const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
  mode: 'none',
  entry: {
    app: resolve('./src/main1.js')
  },

  output: {
    filename: '[name]_[chunkhash:10].js',
    path: resolve('./dist')
  },

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.jpg$/, use: 'file-loader' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: resolve('./src/static'), to: 'static' }
      ]
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // 字节B
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendor1: {
          test: /[/\\]node_modules[/\\]vue/,
          name: 'vue',
          minChunks: 1
        },
        vendor2: {
          test: /[/\\]node_modules[/\\]iview/,
          name: 'iview',
          minChunks: 1
        }
      }
    }
  },

  externals: { echarts: 'echarts' }
}
