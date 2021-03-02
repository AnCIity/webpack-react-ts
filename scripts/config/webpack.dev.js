/**
 * @author City
 * @description Webpack 开发环境配置
 */

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

// const
const { SERVER_HOST, SERVER_PORT } = require('../constant')

module.exports = merge([
  common,
  {
    mode: 'development',
    // 源代码映射
    devtool: 'eval-source-map',
    devServer: {
      host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
      port: SERVER_PORT, // 指定端口，默认是8080
      stats: 'errors-only', // 终端仅打印 error
      clientLogLevel: 'silent', // 日志等级
      compress: true, // 是否启用 gzip 压缩
      open: true, // 打开默认浏览器
      hot: true, // 热更新
      proxy: {
        '/api/': {
          target: 'http://localhost:4000',
          changeOrigin: true
        }
      }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
])
