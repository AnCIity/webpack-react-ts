/**
 * @author City
 * @description 配置常量
 */

const path = require('path')

// 项目路径
const PROJECT_PATH = path.resolve(__dirname, '../')
// 项目名称
const PROJECT_NAME = path.parse(PROJECT_PATH).name
// 当前环境
const isDev = process.env.NODE_ENV !== 'production'
// 开发服务主机
const SERVER_HOST = 'localhost'
// 开发服务端口
const SERVER_PORT = 80

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT
}
