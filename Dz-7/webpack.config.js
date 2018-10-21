let path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
        publicPath: "dist/"
    },
    devServer: {
        overlay: true
    },
    plugins: [
    new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            //            filename: "[name].css",
            //            chunkFilename: "[id].css"
        })
  ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
}
        ]
    },
    devtool: "eval-sourcemap"
}

module.exports = conf;
