var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      './src/Entrypoint.ts'
    ]
  },
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
    require('./common/plugins/html.index'),
    require('./common/plugins/vendor.chunk')
  ],
  module: {
    loaders: require('./common/webpack.loaders'),
    preLoaders: require('./common/webpack.preloaders')
  },
  resolve: require('./common/webpack.resolve'),
  ts: require('./common/webpack.ts.config')
};
