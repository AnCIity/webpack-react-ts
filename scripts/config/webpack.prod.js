/**
 * @author City
 * @description Webpack 生产环境配置
 */

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

// plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [new CleanWebpackPlugin()]
})
