const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const OnlyIfChangedPlugin = require('only-if-changed-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common.config, {
	plugins: [
		new OnlyIfChangedPlugin({
			cacheDirectory: path.resolve('src/main/resources/META-INF/resources/dist'),
			cacheIdentifier: 'cache',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	]
});