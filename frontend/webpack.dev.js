const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common(), {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  //   plugins: [new ForkTsCheckerWebpackPlugin()],
});
