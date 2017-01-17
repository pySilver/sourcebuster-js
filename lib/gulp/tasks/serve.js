var gulp    = require('gulp'),
    finder  = require('../helpers/finder'),
    config  = require('../config'),
    browserSync = require('browser-sync');

// Watch files for changes & reload
gulp.task('serve', ['bundle'], function () {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['dist', 'public']
  });

  gulp.watch(finder(config.css.in_dir),  ['css']);
  gulp.watch(finder(config.imgs.in_dir), ['imgs']);
  gulp.watch(finder(config.html.in_dir), ['html']);
});
