const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[naem]_[hash:6][ext]"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        // new DefinePlugin({
        //     BASE_URL: "'./aaa'"
        // })
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public",
                    to: "./",
                    globOptions: {
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]
}