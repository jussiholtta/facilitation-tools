const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'timer': './babeltmp/timer.js',
		'anyrandomizer': './babeltmp/anyrandomizer.js',
		'anyrandomizercss': './src/anyrandomizer/anyrandomizer.css',
		'randompicture': './babeltmp/randompicture.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]/[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
		inject: false,
		filename: './timer/index.html',
		template: './src/timer/index.html',
		chunks: ['timer']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './anyrandomizer/index.html',
		template: './src/anyrandomizer/index.html',
		chunks: ['anyrandomizer']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './randompicture/index.html',
		template: './src/randompicture/index.html',
		chunks: ['randompicture']
		}),
	],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head',
              injectType: 'singletonStyleTag',
            },
          },
        "css-loader",
        ],
      }
    ]
  },
	mode: 'production'
};
