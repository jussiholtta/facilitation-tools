const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'timer': './babeltmp/timer.js',
		'anyrandomizer': './babeltmp/anyrandomizer.js',
		'randompicture': './babeltmp/randompicture.js',
		'pickrandom': './babeltmp/pickrandom.js',
		'randommetaphor': './babeltmp/randommetaphor.js',
		'metaphorcourse': './babeltmp/metaphorcourse.js',
		'aa': './babeltmp/aa.js',
		'clock': './babeltmp/clock.js',
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
		new HtmlWebpackPlugin({
		inject: false,
		filename: './pickrandom/index.html',
		template: './src/pickrandom/index.html',
		chunks: ['pickrandom']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './randommetaphor/index.html',
		template: './src/randommetaphor/index.html',
		chunks: ['randommetaphor']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './metaphorcourse/index.html',
		template: './src/metaphorcourse/index.html',
		chunks: ['metaphorcourse']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './aa/index.html',
		template: './src/aa/index.html',
		chunks: ['aa']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './clock/index.html',
		template: './src/clock/index.html',
		chunks: ['clock']
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
