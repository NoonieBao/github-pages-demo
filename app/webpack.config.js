const { GitRevisionPlugin } = require('git-revision-webpack-plugin');
const webpack = require('webpack'); // Don't forget to import webpack

const gitRevision = new GitRevisionPlugin();

module.exports = {
  // Other configuration...
  plugins: [
    // Other plugins...
    gitRevision, // This line might not be necessary; check the plugin documentation
    // Other plugins...
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(gitRevision.version()),
      'process.env.COMMITHASH': JSON.stringify(gitRevision.commithash()),
      'process.env.BRANCH': JSON.stringify(gitRevision.branch())
    })
  ],
};
