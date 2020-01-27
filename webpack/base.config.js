const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/',
        filename: 'main/js/[name].[hash:4].js',
        chunkFilename: 'main/js/[name].[hash:4].chunk.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]

}