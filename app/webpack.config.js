const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevision = new GitRevisionPlugin();

module.exports = {
  // 其他配置...
  plugins: [
    // 其他插件...
    gitRevision,
    // 其他插件...
    new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(gitRevision.version()),
        'process.env.COMMITHASH': JSON.stringify(gitRevision.commithash()),
        'process.env.BRANCH': JSON.stringify(gitRevision.branch())
    })
  ],
};
