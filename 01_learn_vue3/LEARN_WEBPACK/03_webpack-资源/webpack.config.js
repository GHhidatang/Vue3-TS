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
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // outputPath: "img",
                        name: "img/[name]-[hash:6].[ext]",
                        limit: 100 * 1024
                    }
                }
            },

            /*
                这个是我在百度上寻找解决方法时 别人提供的解决代码
                    但我无法理解这些代码 且在src/js/element.js这个文件里面的第3、12、13和17行代码 无法实现想要的功能
            */
            // {
            //     test: /\.jpg$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: './src/img/1111.jpg',
            //                 esModule: false
            //             }
            //         }
            //     ],
            //     type: 'javascript/auto'
            // }
        ]
    }
}