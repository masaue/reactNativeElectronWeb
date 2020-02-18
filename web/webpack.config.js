const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');
const outputPath = path.resolve(appDirectory, 'web/public/');

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src/')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['react-native-web'],
      presets: ['module:metro-react-native-babel-preset']
    }
  }
};

module.exports = {
  entry: path.resolve(appDirectory, 'index.web.js'),
  output: {
    filename: 'bundle.web.js',
    path: outputPath
  },
  module: {
    rules: [
      babelLoaderConfiguration
    ]
  },
  devServer: {
    contentBase: outputPath
  }
};
