var express = require('express'),
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	path = require('path');
	

/* Runs webpack dev server to package and serve the app */

const app = express(),
	DIST_DIR = path.join(__dirname, 'src'),
	PORT = 3000,
	compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR));

app.get("*", (req, res, next) => {  
    const filename = path.join(DIST_DIR, "index.html");

    compiler.outputFileSystem.readFile(filename, (err, result) => {
	    if (err) {
	        return next(err);
	    }
	    res.set('content-type', 'text/html');
	    res.send(result);
	    res.end();
    });
});

app.listen(PORT);  