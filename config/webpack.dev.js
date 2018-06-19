const webpack = require('webpack');
module.exports = {
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [
                { loader: "style-loader" },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                    }
                },
                {
                    loader: "postcss-loader",
                },
                {
                    loader: "less-loader",
                },
            ],

        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        inline: true,
        contentBase: 'src',
        watchContentBase: true,
        disableHostCheck: true,
        port: 8080,
        proxy: {
            "/api": {
                "target": "http://ngrok.calohas.com/",
                "changeOrigin": true,
                "pathRewrite": { "^/api": "" }
            }
        }

    }
}