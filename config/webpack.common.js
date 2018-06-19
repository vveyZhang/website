const webpack = require('webpack');
const helper = require("./helper");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: helper.root('src/index.js'),
        vendor: ['jquery', 'promise-polyfill', 'page', 'moment']
    },
    output: {
        path: helper.root('dist'),
        filename: '[name].js',
        publicPath: "/",
        chunkFilename: '[name].[chunkhash:8].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ejs$/,
                use: 'ejs-loader'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: 'url-loader?limit=50000&name=images/[name].[ext]'
            },
        ]
    },
    plugins: [

        new webpack.ProvidePlugin({
            $: "jQuery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor'], // 指定公共 bundle 的名称。
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            template: helper.root('src/index.html'),
            files: {
                "css": ["style.css"],
            },
            inject: true,
            hash: true,

        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.css', 'html', '.less'],
        alias: {
            jquery: helper.root("src/lib/jquery.min.js"),
            jQuery: helper.root("src/lib/jquery.min.js")
        }
    }

}