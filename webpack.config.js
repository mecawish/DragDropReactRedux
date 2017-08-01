var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['react-hot-loader', 'babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
            "style-loader",
            "css-loader"
        ]
    }]
  }
};
