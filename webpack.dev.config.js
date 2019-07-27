const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3334,
    contentBase: path.resolve(__dirname, './build'),
    historyApiFallback: true,
    compress: true
  },
  devtool: 'inline-source-map'
})
