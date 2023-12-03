module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        /**
         *  使用corejs Modular standard library for JavaScript. promises, symbols, collections, iterators, typed arrays, many other *  features
         */
        useBuiltIns: 'entry',
        corejs: {
          //指定corejs的版本
          version: '3.33',
          proposals: true,
        },
      },
    ],
  ],
  //在这里要排除node_modules的文件让babel处理,否则会报错Module parse failed: 'import' and 'export' may appear only with 'sourceType: module'
  exclude: /node_modules/,
};
