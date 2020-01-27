const base = require('./base.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(base, {
    mode: "production",
    module: {
        rules: [
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css$/
            },
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                test: /\.s[ac]ss$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main/css/[name].[hash:4].css'
        })
    ]

});