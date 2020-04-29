const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'timer': './timer/timer.js',
		'anyrandomizer': './anyrandomizer/anyrandomizer.js',
		'randompicture': './randompicture/randompicture.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]/[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
		inject: false,
		filename: './timer/index.html',
		template: './timer/index.html',
		chunks: ['timer']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './anyrandomizer/index.html',
		template: './anyrandomizer/index.html',
		chunks: ['anyrandomizer']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './randompicture/index.html',
		template: './randompicture/index.html',
		chunks: ['randompicture']
		})
	],
	mode: 'production'
};
