const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
/*
		-- TOP LEVEL FUNCTIONS --
		gulp.task - Define tasks
		gulp.src - Points to files to use
		gulp.dest - Points to folder to output
		gulp.watch - Watch files and folder for changes
*/


// Copy all HTML files
gulp.task('copyHtml', function () {
	return gulp.src(['src/*.html'], ['copyHtml'])
		.pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', function() {
	return gulp.src(['src/img/*'], ['imageMin'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

// Compile Sass
gulp.task('sass', function() {
	return gulp.src(['src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src(['src/js/*.js'], ['scripts'])
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Watch & Serve
gulp.task('serve', ['sass', 'copyHtml', 'imageMin', 'scripts'], function() {
	browserSync.init({
		server: './src'
	});

	gulp.watch(['src/scss/*.scss'], ['sass'])
	gulp.watch(['src/images/*'], ['imageMin'])
	gulp.watch(['src/js/*js'], ['scripts'])
	gulp.watch(['src/*.html']).on('change', browserSync.reload)
})

// Default
gulp.task('default', ['serve'])