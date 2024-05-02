// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: './',
//   outputDir: 'dist', // dist
//   assetsDir: 'static',
//   transpileDependencies: true
// })


/* vue.config.js 配置文件*/

// 引入插件，并生成实例
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
// 使用 dayjs 格式化时间，使用前需安装依赖 npm i dayjs -S


// module.exports = defineConfig({
//   publicPath: './',
//   outputDir: 'dist', // dist
//   assetsDir: 'static',
//   transpileDependencies: true
// })

module.exports = {
    publicPath: './',
  outputDir: 'dist', // dist
  assetsDir: 'static',
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].COMMIT_HASH = JSON.stringify(gitRevisionPlugin.commithash())
      args[0]['process.env'].BRANCH = JSON.stringify(gitRevisionPlugin.branch())
      return args
    })
  }
}
