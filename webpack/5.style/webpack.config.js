const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

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
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            'css-loader',
            // 需要 autoprefixer, cssnano, postcss-cssnext插件
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            }
          ],
          fallback: 'style-loader'
        })

      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      hash: true
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name]_[hash:10].css'
    })
  ],

  optimization: {}
}
