var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.tsx'
  ],
  output: require('./common/webpack.output'),
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    require('./common/webpack.vendor.chunk.plugin')
  ],
  module: {
    loaders: require('./common/webpack.loaders'),
    preLoaders: require('./common/webpack.preloaders')
  },
  resolve: require('./common/webpack.resolve'),
  ts: require('./common/webpack.ts.config')
};
