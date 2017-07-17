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
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['react', 'es2015', "stage-1"] }
				}
			}
		]
	}

}