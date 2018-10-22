let path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

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
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		})
  ],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
            },
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        		],
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
