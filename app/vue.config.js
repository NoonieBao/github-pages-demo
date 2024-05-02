const { defineConfig } = require('@vue/cli-service')
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')

module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist', // dist
  assetsDir: 'static',
  transpileDependencies: true,
  plugins: [new GitRevisionPlugin()],
})

