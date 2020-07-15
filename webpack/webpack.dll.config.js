const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, './dist/dll'),
    filename: '[name]_dll.js',
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, './dist/dll/manifest.json'),
      name: '_dll_[name]'
    })
  ]
}
