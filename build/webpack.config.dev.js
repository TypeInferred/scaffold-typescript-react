var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  output: require('./common/webpack.output'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    require('./common/webpack.vendor.chunk.plugin')
  ],
  module: {
    loaders: require('./common/webpack.loaders'),
    preLoaders: require('./common/webpack.preloaders')
  },
  resolve: require('./common/webpack.resolve'),
  ts: require('./common/webpack.ts.config')
};
