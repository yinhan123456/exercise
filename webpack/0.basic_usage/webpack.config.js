const path = require('path')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
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

  plugins: [],

  optimization: {}
}
