'use strict'
// const path = require('path')
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  devServer: {
    // 让浏览器 overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    host: 'localhost',
    // 端口号
    port: 8080,
    // 配置后自动启动浏览器
    open: true,
    // 热更新
    hotOnly: true,
    // 配置跨域代理
    proxy: {
      // 1.聚合数据
      // '/v1': {
      //   target: 'http://apis.juhe.cn',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/v1': ''
      //   }
      // }
      // 2.fastmock:https://www.fastmock.site/
      '/v1': {
        target:
          'https://www.fastmock.site/mock/82217cca2f53e4decc55926eb24f5051',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      }
    }
  }
}
