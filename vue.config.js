'use strict'
// const path = require('path')
module.exports = {
  publicPath: './', // 部署应用包时的基本URL:这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  outputDir: 'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // Default: 'index.html':指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  filenameHashing: true, // Default: true：默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。,例如<link href="static/js/Home.d92a8e5f.js" rel="prefetch">
  lintOnSave: true, // 是否在保存的时候使用 `eslint-loader` 进行检查.设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  // 所有 webpack-dev-server 的选项都支持：注意：有些值像 host、port 和 https 可能会被命令行参数覆写。有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。
  devServer: {
    // 让浏览器 overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: 8080, // 端口号
    open: true, // 配置后自动启动浏览器
    hotOnly: true, // 热更新
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
    },
    // Webpack相关配置
    configureWebpack: {
      // 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：
      // 有些 webpack 选项是基于 vue.config.js 中的值设置的，所以不能直接修改。例如你应该修改 vue.config.js 中的 outputDir 选项而不是修改 output.path；你应该修改 vue.config.js 中的 publicPath 选项而不是修改 output.publicPath。这样做是因为 vue.config.js 中的值会被用在配置里的多个地方，以确保所有的部分都能正常工作在一起。
    },
    // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：
    // configureWebpack: config => {
    //   if (process.env.NODE_ENV === 'production') {
    //     // 为生产环境修改配置...
    //   } else {
    //     // 为开发环境修改配置...
    //   }
    // }
    // chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        // .loader('vue-loader')
        .tap(options => {
          // 修改它的选项...
          // options.compilerOptions.preserveWhitespace = true // 模版中 HTML 标签之间的空格将会被忽略
          return options
        })
    },
    // css相关配置
    css: {
      // css相关选项配置
    }
  }
}
