const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../app.js')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },
  target: 'node'
}
