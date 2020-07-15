const path = require('path')

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
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      }
    }]
  },

  plugins: [],

  optimization: {}
}
