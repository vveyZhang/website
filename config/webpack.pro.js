var webpack = require('webpack');
var helper = require("./helper");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractStyle = new ExtractTextPlugin({
    filename: "style.css"
});
module.exports = {
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: extractStyle.extract({
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "postcss-loader",
                    }, {
                        loader: "less-loader",
                    },],
                fallback: "style-loader",
            }),
        }]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: true        　　　　　　　　　　//启用删除文件
            }
        ),
        extractStyle,
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CopyWebpackPlugin([

            {
                from: helper.root('src/images'),
                to: helper.root('dist/images'),
                toType: 'dir',
                flatten: true
            }
        ], {
                copyUnmodified: true,
            })
    ]
};
