const path = require('path')

const resolve = function(relative) {
  return path.resolve(__dirname, relative)
}

module.exports = {
  entry: {
    app: resolve('../src/main.js')
    // vendor: ['vue']
  },

  output: {
    filename: '[name].js',
    path: resolve('../basic_usage_dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {loader: 'style-loader'},
      //     {loader: 'css-loader'},
      //     {loader: 'postcss-loader'}
      //   ],
      //   exclude: /node_modules/
      // },
      {
        test: /\.css$/,
        use: ETWP.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 100,
          name: 'assets/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HWP({
      template: resolve('../src/index.html'),
      filename: 'index.html',
      chunk: ['main.js']
    }),

    new ETWP('[name].[id].css')
  ],

  optimization: {
  },

  devServer: {
    host: 'localhost',
    port: 8888,
    contentBase: './dist'
  }
}
