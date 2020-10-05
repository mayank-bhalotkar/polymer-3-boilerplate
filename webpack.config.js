const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './app-data.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    mode: "development",
    devtool: "source-map",
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                }
                ],
            },
        ]
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin('./favicon.ico'),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './index.html'
        })
    ]
};