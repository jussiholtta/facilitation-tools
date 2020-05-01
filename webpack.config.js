const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function recursiveIssuer(m) {
  if(m.issuer) {
    return recursiveIssuer(m.issuer);
  }
  if(m.name) {
    return m.name;
  }
  return false
}

module.exports = {
	entry: {
		'timer': './babeltmp/timer.js',
		'anyrandomizer': './babeltmp/anyrandomizer.js',
		'anyrandomizercss': './src/anyrandomizer/anyrandomizer.css',
		'randompicture': './babeltmp/randompicture.js',
		'wtf': './babeltmp/wtf.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]/[name].js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
        criticalStyles: {
  				name: "anyrandomizercss",
	  			test: (m, c, entry = "anyrandomizercss") =>
		  			m.constructor.name === "CssModule" && recursiveIssuer(m) === entry, 
			  	chunks: "all",
  				enforce: true
        }
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './wtf/index.html',
		template: './src/wtf/index.html',
		chunks: ['wtf']
		}),
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
		chunks: ['anyrandomizer','anyrandomizercss']
		}),
		new HtmlWebpackPlugin({
		inject: false,
		filename: './randompicture/index.html',
		template: './src/randompicture/index.html',
		chunks: ['randompicture']
		})
	],
	module: {
		rules: [	
			{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {
						modules: {
  						localIdentName: "[name]__[local]",
            },
					}
				},
			],
			},
		],
	},
	mode: 'production'
};
