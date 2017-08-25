var webpack = require('webpack');

module.exports = {
  module: {
    rules: require('./common/webpack.loaders'),
  },
  resolve: require('./common/webpack.resolve')
};
