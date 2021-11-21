const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
  resolve: {
		extensions: ['.js', '.jsx', '.tsx'],
	},
	mode: 'development',
  module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.css$/, // matches .css files only
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					{
						loader: 'sass-loader'
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
  plugins: [htmlWebpackPlugin, new FaviconsWebpackPlugin("./src/assets/profile-pic.png")],
  devServer: {
		static: path.join(__dirname, 'public/'),
		port: 8888,
		historyApiFallback: true,

	},
};
