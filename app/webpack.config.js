const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  // 其他配置...
  plugins: [
    // 其他插件...
    gitRevisionPlugin,
    // 其他插件...
  ],
};
