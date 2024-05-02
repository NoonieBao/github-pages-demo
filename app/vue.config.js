const { defineConfig } = require('@vue/cli-service')
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')

module.exports = {
  plugins: [
    new GitRevisionPlugin({
      branchCommand: 'rev-parse --symbolic-full-name HEAD',
    }),
  ],
}

