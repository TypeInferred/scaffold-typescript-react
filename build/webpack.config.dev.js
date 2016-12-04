var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      './src/Entrypoint.ts'
    ]
  },
  output: require('./common/webpack.output'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    require('./common/plugins/html.index'),
    require('./common/plugins/vendor.chunk'),
    require('./common/plugins/sourcemaps')
  ],
  module: {
    loaders: require('./common/webpack.loaders'),
    preLoaders: require('./common/webpack.preloaders')
  },
  resolve: require('./common/webpack.resolve'),
  ts: require('./common/webpack.ts.config')
};
