const path = require('path')

module.exports = {
  entry: {
    app: ['babel-polyfill', './app.js'] // 可扩展配置
    // app: './app.js' // 可扩展配置
  },
  output: {
    path: path.resolve(__dirname, '../www/static'),
    filename: '[chunkhash].[name].js'
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
  }
}
