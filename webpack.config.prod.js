const devConfig = require('./webpack.config.js');
const webpack = require('webpack');

const _ = require('lodash');

module.exports = _.assign(devConfig, {
  devtool: undefined,
  entry: './index',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
});
