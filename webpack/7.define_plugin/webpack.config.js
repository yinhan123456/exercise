const path = require('path')
const webpack = require('webpack')
const HtmlWP = require('html-webpack-plugin')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
  mode: 'none',
  entry: {
    app: resolve('./src/main.js')
  },

  output: {
    filename: '[name].js',
    path: resolve('./dist')
  },

  module: {
    rules: []
  },

  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify('12222222222222')
    }),
    new HtmlWP({
      template: resolve('./src/index.html'),
      chunks: ['app']
    })
  ],

  optimization: {}
}
