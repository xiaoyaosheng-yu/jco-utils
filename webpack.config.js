const path = require('path');
const { name, version } = require('./package');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, `dist/static/${version}`),
    filename: `${name}-${version}.min.js`,
    publicPath: `./static/${version}`,
  },
  plugins: [
    new HtmlWebpackPlugin({ // 打包输出HTML
      title: 'Hello jco-utils',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      filename: path.resolve(__dirname, "dist/index.html"),
      template: './test/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};