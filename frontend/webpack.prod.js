const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common(), {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    port: 7777,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['swc-loader'],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
