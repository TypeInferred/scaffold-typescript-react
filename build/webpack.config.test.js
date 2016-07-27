var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: require('./common/webpack.loaders'),
    preLoaders: require('./common/webpack.preloaders')
  },
  resolve: require('./common/webpack.resolve'),
  ts: require('./common/webpack.ts.config')
};
