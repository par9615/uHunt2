const base = require('./base.config');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const HOST = 'localhost';
const PORT = '3008';

module.exports = merge(base, {
    mode: "development",
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        hot: true,
        host: HOST,
        port: PORT,
        compress: true,
        historyApiFallback: true,
        clientLogLevel: 'debug',
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        }
    },

    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s[ac]ss$/
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main/css/[name].[hash:4].css'
        })
    ]


});