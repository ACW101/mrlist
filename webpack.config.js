var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app: './src/index.js' //entry point where react start'
	},
	output: {
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map' // when app crash, used this to debug 
	},
	devtool: '#source-map',
	module: { // instruction to how to transpile the code
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: '/(node_modules)/',
				loader: 'babel-loader',
				query: { presets: ['react', 'es2015'] }
			}
		]
	}

}