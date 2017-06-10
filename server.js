var express = require('express'),
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackConfig = require('./webpack.config'),
	path = require('path'),
	mongoose = require('mongoose'),
	config = require('./config');

var userRouter = require('./src/services/api/routers/user');

const app = express(),
	DIST_DIR = path.join(__dirname, 'src'),
	PORT = 3000,
	compiler = webpack(webpackConfig),
	DB_CONNECTION = 'mongodb://admin:admin@ds117592.mlab.com:17592/recipe_app';

app.use(webpackDevMiddleware(compiler, {  
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR));

app.use('/api',userRouter);


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


mongoose.connect(DB_CONNECTION);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB.');
});

app.listen(PORT);  