const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
  mode: 'development',
  entry: {
    app: resolve('./src/main.js')
  },

  output: {
    path: resolve('./dist'),
    filename: '[name].js'
  },

  module: {
    rules: []
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      hash: true
      // title, favicon, filename, template, inject,
      // minify, hash, cache, showErrors, chunks, excludeChunks
    })
  ],

  optimization: {}
}
