> 此项目属于从零开始搭建React开发环境，主要知识点： eslint(代码检测)， 按需加载（bundle import）,react-router4.x,react-css-modules(css模块化),postcss(css前缀自动添加)，px2rem(移动端适配)，webpack4.x，es6，less，antd-mobile。

# 启动
    * npm i
    * 开发环境 npm start
    * 生产环境 npm run build
    * 代码检测 nup run lint

# 开始webpack环境搭建
## 导入插件
```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    const miniCssExtractPlugin = require('mini-css-extract-plugin');
```
## entry/output代码
```javascript
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
```
## rules
```javascript
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
```
## plugins
```javascript
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
```

## dev 配置
```javascript
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


```
## prod 配置
```javascript
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');


module.exports = function () {
  return new webpackMerge(baseWebpackConfig, {
    mode: 'production'
  })
}

```
> 至此  webpack环境搭建已经全部完成 具体可以看完整代码

# 文件释义

postcss.config.js ------ css3浏览器前缀文件

.eslintrc         ------ eslint 规则描述文件

app.js ----------- 路由文件

components/bundle.js ------ 按需加载bundle文件代码


