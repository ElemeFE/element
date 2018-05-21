const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = require('./config');

const webpackConfig = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: Object.assign(config.alias, {
      'vue$': 'vue/dist/vue.common.js'
    }),
    modules: ['node_modules']
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.jsx?$/,
        loader: 'isparta-loader',
        options: { esModules: true },
        exclude: config.jsexclude,
        include: /src|packages/
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: process.env.CI_ENV ? 'isparta-loader' : 'isparta-loader!eslint-loader'
          },
          preserveWhitespace: false
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
  ]
};

if (!process.env.CI_ENV) {
  webpackConfig.plugins.push(
    new ProgressBarPlugin()
  );
}

module.exports = webpackConfig;
