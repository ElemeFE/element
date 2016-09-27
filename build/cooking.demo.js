var cooking = require('cooking');
var config = require('./config');
var md = require('markdown-it')();
var Components = require('../components.json');
var striptags = require('./strip-tags');

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

cooking.set({
  entry: './examples/entry.js',
  dist: './examples/element-ui/',
  template: './examples/index.tpl',
  publicPath: '/',
  hash: true,
  devServer: {
    port: 8085,
    log: false,
    publicPath: '/'
  },
  minimize: true,
  chunk: true,
  extractCSS: true,
  sourceMap: true,
  alias: config.alias,
  extends: ['vue2', 'lint'],
  postcss: function(webapck) {
    return [
      require('postcss-salad')({
        browser: ['ie > 8', 'last 2 version'],
        features: {
          'partialImport': {
            addDependencyTo: webapck
          },
          'bem': {
            'shortcuts': {
              'component': 'b',
              'modifier': 'm',
              'descendent': 'e'
            },
            'separators': {
              'descendent': '__',
              'modifier': '--'
            }
          }
        }
      })
    ];
  }
});

cooking.add('loader.md', {
  test: /\.md$/,
  loader: 'vue-markdown-loader'
});

cooking.add('vueMarkdown', {
  use: [
    [require('markdown-it-container'), 'demo', {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },

      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          var description = (m && m.length > 1) ? m[1] : '';
          var html = convert(striptags(tokens[idx + 1].content, 'script'));
          var descriptionHTML = description
            ? '<div class="description">' + md.render(description) + '</div>'
            : '';
          return `<demo-block class="demo-box">
                    <div class="source">${html}</div>
                    <div class="meta">
                      ${descriptionHTML}
                      <div class="highlight">`;
        }
        return '</div></div></demo-block>\n';
      }
    }]
  ],
  preprocess: function(MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function() {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  }
});

var wrap = function(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

var externals = {};
Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}/style.css`] = 'null';
});

// 开发模式不需要将不存在的 style.css 打包进去
cooking.add('externals', externals);

if (process.env.NODE_ENV === 'production') {
  cooking.add('externals.vue', 'Vue');
  cooking.add('externals.vue-router', 'VueRouter');
}

module.exports = cooking.resolve();
