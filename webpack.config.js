var path = require('path');
var webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new UglifyJSPlugin(),
        new HappyPack({
            loaders: [
              'babel-loader'
            ]
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: ['react-hot-loader', 'happypack/loader'],
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
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 100000,
        maxAssetSize: 450000,
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
