const path = require('path');

module.exports = {
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

            /*
                这个是老师写的代码
                    在webpack后将src/img/111.jpg这张图片一起打包到build文件夹里面
                    但在build文件里面的图片提示加载错误
                    导致运行后在页面上也无法显示
            */
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     use: {
            //         loader: "url-loader",
            //         options: {
            //             // outputPath: "img",
            //             name: "img/[name]-[hash:6].[ext]",
            //             limit: 100 * 1024
            //         }
            //     }
            // },
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
        ]
    }
}