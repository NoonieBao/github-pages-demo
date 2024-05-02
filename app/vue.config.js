const { defineConfig } = require('@vue/cli-service')
const GitRevisionPlugin = require('git-revision-webpack-plugin');
 
const gitRevision = new GitRevisionPlugin();

module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist', // dist
  assetsDir: 'static',
  transpileDependencies: true,
})


plugins.push(...[
  gitRevision,
  new webpack.DefinePlugin({
    'process.env.VERSION': JSON.stringify(gitRevision.version()),
    'process.env.COMMITHASH': JSON.stringify(gitRevision.commithash()),
    'process.env.BRANCH': JSON.stringify(gitRevision.branch()),
  }),
]);

console.log(process.env.VERSION) 