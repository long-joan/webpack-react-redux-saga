const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');


module.exports = function () {
  return new webpackMerge(baseWebpackConfig, {
    mode: 'production'
  })
}
