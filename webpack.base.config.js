const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './src/main.js'),
    //添加要打包在vendor里面的库
    vendors: ['react','react-dom','react-router'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash].js',
    chunkFilename: "[name].chunk.[hash:5].js"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, './src/components'),
        use: [
          miniCssExtractPlugin.loader,
          { loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              // namedExport: true, // this is  invalid Options ,I find it
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }, // react css module
          'resolve-url-loader',  // may need this (https://www.npmjs.com/package/resolve-url-loader)
          'px2rem-loader', 'postcss-loader', 'less-loader'
        ],
      },
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, './src/css'),
        use: [ miniCssExtractPlugin.loader, 'css-loader', 'px2rem-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash].[ext]',//所有图片在一个目录
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'style/app_[contenthash:5].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.DefinePlugin({//设置成production去除警告
      'process.env': {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(['dist',
      'build'], {
        root: __dirname,
        verbose: true,
        dry: false,
        exclude: ['jslibs']
      })
  ]
};
