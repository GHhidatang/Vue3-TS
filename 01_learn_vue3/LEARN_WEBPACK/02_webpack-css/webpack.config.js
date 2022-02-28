const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    } // ,
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             loader: "css-loader" // 这个是loader的语法糖
    //         }
    //     ]
    // }
}

