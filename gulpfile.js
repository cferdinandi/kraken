/**
 * Gulp Packages
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');
var tap = require('gulp-tap');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var karma = require('gulp-karma');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var markdown = require('gulp-markdown');
var fileinclude = require('gulp-file-include');
var headerfooter = require('gulp-headerfooter');
var package = require('./package.json');


/**
 * Paths to project folders
 */

var paths = {
	output : 'dist/',
	scripts : {
		input : 'src/js/*',
		output : 'dist/js/'
	},
	styles : {
		input : 'src/sass/**/*.{scss,sass}',
		output : 'dist/css/'
	},
	svgs: {
		input: 'src/svg/**/*.svg',
		output: 'dist/svg/'
	},
	static : 'src/static/**',
	test : {
		spec : [ 'test/spec/**/*.js' ],
		coverage: 'test/coverage/',
		results: 'test/results/'
	},
	docs : {
		input: 'src/docs/*.{html,md,markdown}',
		output: 'docs/',
		templates: 'src/docs/_templates/',
		assets: 'src/docs/assets/**'
	}
};


/**
 * Template for banner to add to file headers
 */

var banner = {
	full :
		'/**\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.description %>, by <%= package.author.name %>.\n' +
		' * <%= package.repository.url %>\n' +
		' * \n' +
		' * Free to use under the MIT License.\n' +
		' * http://gomakethings.com/mit/\n' +
		' */\n\n',
	min :
		'/**' +
		' <%= package.name %> v<%= package.version %>, by Chris Ferdinandi' +
		' | <%= package.repository.url %>' +
		' | Licensed under MIT: http://gomakethings.com/mit/' +
		' */\n'
};


/**
 * Gulp Taks
 */

// Lint, minify, and concatenate scripts
gulp.task('scripts', ['clean'], function() {

	var jsTasks = lazypipe()
		.pipe(header, banner.full, { package : package })
		.pipe(gulp.dest, paths.scripts.output)
		.pipe(rename, { suffix: '.min' })
		.pipe(uglify)
		.pipe(header, banner.min, { package : package })
		.pipe(gulp.dest, paths.scripts.output);

	return gulp.src(paths.scripts.input)
		.pipe(plumber())
		.pipe(flatten())
		.pipe(tap(function (file, t) {
			if ( file.stat.isDirectory() ) {
				var name = file.relative + '.js';
				return gulp.src(file.path + '/*.js')
					.pipe(concat(name))
					.pipe(jsTasks());
			}
		}))
		.pipe(jsTasks());
});

// Process, lint, and minify Sass files
gulp.task('styles', ['clean'], function() {
	return gulp.src(paths.styles.input)
		.pipe(plumber())
		.pipe(sass({style: 'expanded', noCache: true}))
		.pipe(flatten())
		.pipe(prefix('last 2 version', '> 1%'))
		.pipe(header(banner.full, { package : package }))
		.pipe(gulp.dest(paths.styles.output))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minify())
		.pipe(header(banner.min, { package : package }))
		.pipe(gulp.dest(paths.styles.output));
});

// Generate SVG sprites
gulp.task('svgs', ['clean'], function () {
	return gulp.src(paths.svgs.input)
		.pipe(svgmin())
		.pipe(svgstore({
			fileName: 'icons.svg',
			prefix: 'icon-',
			inlineSvg: false
		}))
		.pipe(gulp.dest(paths.svgs.output));
});

// Copy static files into output folder
gulp.task('static', ['clean'], function() {
	return gulp.src(paths.static)
		.pipe(plumber())
		.pipe(gulp.dest(paths.output));
});

// Lint scripts
gulp.task('lint', function () {
	return gulp.src(paths.scripts.input)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// Remove prexisting content from output and test folders
gulp.task('clean', function () {
	return gulp.src([
			paths.output,
			paths.test.coverage,
			paths.test.results
		], { read: false })
		.pipe(plumber())
		.pipe(clean());
});

// Run unit tests
gulp.task('test', function() {
	return gulp.src([paths.scripts.input + '/../**/*.js'].concat(paths.test.spec))
		.pipe(plumber())
		.pipe(karma({ configFile: 'test/karma.conf.js' }))
		.on('error', function(err) { throw err; });
});

// Generate documentation
gulp.task('generatedocs', ['default', 'cleandocs'], function() {
	return gulp.src(paths.docs.input)
		.pipe(plumber())
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(tap(function (file, t) {
			if ( /\.md|\.markdown/.test(file.path) ) {
				return t.through(markdown);
			}
		}))
		.pipe(headerfooter.header(paths.docs.templates + '/_header.html'))
		.pipe(headerfooter.footer(paths.docs.templates + '/_footer.html'))
		.pipe(gulp.dest(paths.docs.output));
});

// Copy distribution files to docs
gulp.task('copydist', ['default', 'cleandocs'], function() {
	return gulp.src(paths.output + '/**')
		.pipe(plumber())
		.pipe(gulp.dest(paths.docs.output + '/dist'));
});

// Copy documentation assets to docs
gulp.task('copyassets', ['cleandocs'], function() {
	return gulp.src(paths.docs.assets)
		.pipe(plumber())
		.pipe(gulp.dest(paths.docs.output + '/assets'));
});

// Remove prexisting content from docs folder
gulp.task('cleandocs', function () {
	return gulp.src(paths.docs.output, { read: false })
		.pipe(plumber())
		.pipe(clean());
});


/**
 * Task Runners
 */

// Compile files (default)
gulp.task('default', [
	'lint',
	'clean',
	'static',
	'scripts',
	'svgs',
	'styles',
	'test'
]);

// Compile files and generate documentation
gulp.task('docs', [
	'default',
	'cleandocs',
	'generatedocs',
	'copydist',
	'copyassets'
]);