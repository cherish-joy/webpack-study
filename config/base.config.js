const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[name][hash:6][ext]',
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      utils: path.resolve(__dirname, '../src/utils'),
      pages: path.resolve(__dirname, '../src/pages'),
      css: path.resolve(__dirname, '../src/css'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
    extensions: ['...', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        // use: [
        //   {
        //     loader: 'css-loader',
        //     options: {},
        //   },
        // ],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ title: 'Hello Webpack', template: './src/index.html' }),
    new DefinePlugin({
      BASE_URL: JSON.stringify('./'),
    }),
  ],
};
