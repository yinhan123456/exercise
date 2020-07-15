const path = require('path')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
  mode: 'none',
  entry: {
    app1: resolve('./src/main1.js'),
    app2: resolve('./src/main2.js'),
  },

  output: {
    filename: '[name].js',
    path: resolve('./dist')
  },

  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: '/asset/[name]_[hash:8].[ext]'
              }
            }
          }
        }
      }
    ]
  },

  plugins: [],

  optimization: {}
}
