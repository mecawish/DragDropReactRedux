var path = require('path');
var webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
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
            loaders: [{
                path: 'babel-loader',
                query: {
                    plugins: [
                        'babel-plugin-add-module-exports',
                        'babel-plugin-syntax-async-functions',
                        'babel-plugin-syntax-dynamic-import',
                        'babel-plugin-transform-object-rest-spread',
                        'babel-plugin-transform-regenerator',
                        'babel-plugin-transform-runtime'
                    ],
                    presets: ['es2015', 'react', 'stage-0'],
                    cacheDirectory: false,
                },
            }]
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            //use: ['react-hot-loader', 'happypack/loader'],
            use: [{
                loader: 'happypack/loader?id=loader0',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                                'transform-regenerator',
                                'add-module-exports',
                                'syntax-async-functions',
                                'transform-object-rest-spread',
                                'syntax-dynamic-import',
                                'transform-runtime', {
                                    "polyfill": false,
                                    "regenerator": true
                                }
                            ],
                }
            }],
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
