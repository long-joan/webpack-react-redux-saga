const path = require('path');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');


module.exports = function () {
  return new webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
      host: 'localhost',
      port: 3334,
      contentBase: path.resolve(__dirname, './build'),
      historyApiFallback:true,
      compress: true
    },
    devtool: 'source-map',
  })
}

