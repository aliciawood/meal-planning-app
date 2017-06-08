const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
var path = require('path');
var DIST_DIR = path.join(__dirname, 'src');

/* Runs webpack dev server to package and serve the app */

const app = express();
const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.path
// }));

// app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(DIST_DIR));

// app.get("*", (req, res) => res.sendFile(express.static(__dirname + '/src/index.html')));
app.get("*", function (req, res) {  
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});



