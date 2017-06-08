const gulp = require('gulp');

/* Build files and watch for any changes and rebuild */
// gulp.task('watch', ['link', 'index', 'livestyles'], function() {
// 	require('./lib/watcher').start();
// });

/* Same as watch, but also starts a hot-reloading file-server */
gulp.task('serve', function() {
	require('./server').start();
});