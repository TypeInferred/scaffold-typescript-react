var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      './src/Entrypoint.ts'
    ]
  },
  output: require('./common/webpack.output'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    require('./common/plugins/html.index'),
    require('./common/plugins/vendor.chunk'),
    require('./common/plugins/sourcemaps'),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: require('./common/webpack.loaders'),
  },
  resolve: require('./common/webpack.resolve'),
  devServer: {
    hot: true
  }
};
