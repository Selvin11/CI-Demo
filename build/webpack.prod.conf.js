var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.conf')


var webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      template: 'index.html',
      filename: '../index.html'
    })
  ]
})

module.exports = webpackConfig