const path = require('path');

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
module.exports = {
  title: 'SIAGRI',
  description: 'Thema based on element ui',
  themeConfig: {
    nav: [
      {text: 'home', link: '/'},
      {text: 'componentes', link: '/components/', items: [        
        { text: 'Chinese', link: '/language/chinese' }
      ]}
    ],
    // sidebar: 'auto'
    sidebar: {
      '/components/': ['buttons']
    }
  },
  // chainWebpack: config => {
  //   const jsRule = config.module.rule('js')
  //   jsRule.uses.delete('buble-loader')
  //   jsRule.use('babel-loader').loader('babel-loader')
  // },
  configureWebpack: {
    resolve: {
      modules: [path.resolve(process.cwd(), '../'), 'node_modules'],
      alias: {
        // "element-ui/src": "element-ui/lib"
        "element-ui/lib": path.resolve(process.cwd(), '../lib'),
        "element-ui/src": path.resolve(process.cwd(), '../src'),
        "@packages": path.resolve(process.cwd(), '../packages'),
        "element-ui/packages": "@packages"
      }
    }
  }
}
