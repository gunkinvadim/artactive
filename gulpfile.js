var gulp         = require('gulp');
var webserver = require('gulp-webserver');

// var browserSync  = require('browser-sync').create();
// var sass         = require('gulp-sass');
// // var autoprefixer = require('gulp-autoprefixer');
// var concatCSS    = require('gulp-concat-css');
// var ftp          = require('gulp-ftp');


var gulp = require('gulp');


gulp.task('serve', function() {
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// gulp.task('sass', function(done) {
//     gulp.src("src/sass/*.sass")
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(concatCSS("style.css"))
//         .pipe(gulp.dest("src/css"))
//         .pipe(browserSync.stream());


//     done();
// });

// gulp.task('serve', function(done) {

//     browserSync.init({
//         proxy: 'artactive',
//         notify: false,
//     });

//     gulp.watch("src/sass/*.sass", gulp.series('sass'));
//     gulp.watch("src/js/*.js").on('change', () => {
//       browserSync.reload();
//       done();
//     });
//     gulp.watch("src/*.html").on('change', () => {
//       browserSync.reload();
//       done();
//     });
  

//     done();
// });

gulp.task('default', gulp.series('serve'));