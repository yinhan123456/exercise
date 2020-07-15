const path = require('path')
const HtmlWP = require('html-webpack-plugin')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
  mode: 'development',
  entry: {
    app: resolve('./src/main.js')
  },

  output: {
    filename: '[name].js',
    path: resolve('./dist'),
    publicPath: '/'
  },

  module: {
    rules: []
  },

  devServer: {
    allowedHosts: ['www.host.com'],
    publicPath: '/',
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
    inline: true
  },

  plugins: [
    new HtmlWP({
      template: resolve('./src/index.html')
    })
  ],

  optimization: {}
}
