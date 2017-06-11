var webpack = require('webpack');
var path = require('path');
var webpackHotMiddleware = require('webpack-hot-middleware');
var combineLoaders = require('webpack-combine-loaders');
var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	context: APP_DIR,
	entry: ['webpack-hot-middleware/client','./index'],
  	output: {
    	path: BUILD_DIR,
    	publicPath: '/',
    	filename: 'bundle.js'
  	},
  	plugins: [
   		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
  	],
  	module : {
    	loaders : [
      	{
        	test : /\.jsx?/,
        	include : APP_DIR,
        	exclude: '/node_modules/',
        	loader : 'babel-loader',
        	query: {
          		presets: ['es2015']
        	}
      	},
       	{
        	test: /\.css$/,
          	loader: combineLoaders([
	        	{
	            	loader: 'style-loader'
	            }, 
	            {
	            	loader: 'css-loader',
	            	query: {
	                	modules: true,
	                	localIdentName: '[name]__[local]___[hash:base64:5]'
	              	}
	            }
          	])
        }
    	]
  	}
};

module.exports = config;