var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      './src/Entrypoint.tsx'
    ]
  },
  output: require('./common/webpack.output'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin(),
    require('./common/plugins/html.index'),
    require('./common/plugins/vendor.chunk')
  ],
  module: {
    rules: require('./common/webpack.loaders')
  },
  resolve: require('./common/webpack.resolve')
};
