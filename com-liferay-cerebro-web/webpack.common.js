const BundleQueryStringPlugin = require('./bundle-query-string-webpack-plugin');
const clay = require('clay');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const PUBLIC_PATH = '/o/com-liferay-cerebro-web/dist/';

const extractSass = new ExtractTextPlugin('main.css');

function resolveModule(name) {
	return path.resolve(__dirname, `src/main/js/${name}`);
}

const config = {
	entry: {
		contacts: resolveModule('main.js')
	},
	module: {
		rules: [
			{
				include: __dirname,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									require('autoprefixer')()
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: clay
									.includePaths
									.concat(
										path.join(
											clay.includePaths[0],
											'../fonts'
										)
									)
							}
						}
					]
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					'file-loader'
				]
			},
		]
	},
	output: {
		chunkFilename: '[name].bundle.js',
		filename: 'bundle.js',
		path: path.resolve('src/main/resources/META-INF/resources/dist'),
		publicPath: PUBLIC_PATH
	},
	plugins: [
		new CleanWebpackPlugin(),
		extractSass,
		new BundleQueryStringPlugin()
	]
};

module.exports = {
	config: config,
	publicPath: PUBLIC_PATH
};