const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 8888, //端口号
    open: true, //自动打开浏览器
    hot: true, //开启热模块更新
  },
});
