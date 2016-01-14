# Setup

## Download

There are three ways to use Kraken on your project:

1. [Download Kraken](https://github.com/cferdinandi/kraken/archive/master.zip) directly from GitHub.
2. Clone Kraken from GitHub: `git@github.com:cferdinandi/kraken.git`
3. Install Kraken using your favorite package manager:
	* [NPM](https://www.npmjs.org/): `npm install cferdinandi/kraken`
	* [Bower](http://bower.io/): `bower install https://github.com/cferdinandi/kraken.git`
	* [Component](http://component.io/): `component install cferdinandi/kraken`


<hr>


## File Structure

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code. Compiled documentation is in the `docs` directory. Unit tests are located in the `test` directory.

```
kraken
|—— dist/
|   |—— css/
|   |   |—— main.css
|   |   |—— main.min.css
|   |—— img/
|   |   |—— # Your image files
|   |—— js/
|   |   |—— detects.js
|   |   |—— detects.min.js
|   |   |—— main.js
|   |   |—— main.min.js
|   |—— svg/
|   |   |—— # Your SVGs
|—— docs/
|   |—— assets/
|   |   |—— # Your documentation assets
|   |—— dist/
|   |   |—— # Your distribution files
|   |—— img/
|   |   |—— # Your image files
|   |—— index.html
|   |—— # Your other documentation files
|—— src/
|   |—— docs/
|   |   |—— _templates
|   |   |   |—— _header.html
|   |   |   |—— _footer.html
|   |   |   |—— # Your template files
|   |   |—— assets
|   |   |   |—— # Your documentation assets
|   |   |—— index.html
|   |   |—— # Your documentation files
|   |—— img/
|   |   |—— # Your images
|   |—— js/
|   |   |—— detects
|   |   |   |—— svg.js
|   |   |   |—— # Your feature detection scripts
|   |   |—— main
|   |   |   |—— kraken.js
|   |   |   |—— # Your JavaScript plugins
|   |—— sass/
|   |   |—— components/
|   |   |   |—— _buttons.scss
|   |   |   |—— _code.scss
|   |   |   |—— _forms.scss
|   |   |   |—— _grid.scss
|   |   |   |—— _normalize.scss
|   |   |   |—— _overrides.scss
|   |   |   |—— _print.scss
|   |   |   |—— _svg.scss
|   |   |   |—— _tables.scss
|   |   |   |—— _typography.scss
|   |   |—— _config.scss
|   |   |—— _mixins.scss
|   |   |—— main.scss
|   |—— static/
|   |   |—— # Static files and folders
|—— test/
|   |—— coverage/
|   |   |—— # various files
|   |—— results/
|   |   |—— unit-tests.html
|   |—— spec/
|   |   |—— spec-myplugin.js
|   |   |—— # Your Jasmine JS unit tests
|—— .travis.yml
|—— README.md
|—— gulpfile.js
|—— package.json
```

<hr>


## Working with the Source Files

Working with the development code in the `src` directory allows you to take advantage of the powerful features included in Kraken's [Gulp.js](http://gulpjs.com) build system.


### Dependencies

Make sure these are installed first.

* [Node.js](http://nodejs.org/)
* [Gulp](http://gulpjs.com/)</a> `sudo npm install -g gulp`


### Quick Start

* In bash/terminal/command line, `cd` into the `kraken` directory.
* Run `npm install` to install the required files.
* When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files.
	* `gulp watch` automatically compiles files and applies changes using <a href="">[LiveReload](http://livereload.com/).
	* `gulp test` compiles files and runs unit tests.


### Working with Sass

Kraken's Sass files are located in `src` > `sass`. Kraken's build system generates minified and unminified CSS files. It also includes [autoprefixer](https://github.com/postcss/autoprefixer), which adds vendor prefixes for you if required by the last two versions of a browser (you can configure browser support in `gulpfile.js`).

#### `_config.scss`

The `_config.scss` file contains variables for all of the colors, font stacks, breakpoints, and sizing used in Kraken. It also contains settings for the grid.

```scss
// Colors
$color-primary: #0088cc;
$color-black: #272727;
$color-white: #ffffff;

$color-success: #377f31; // Green
$color-danger: #880e14; // Red
$color-warning: #dba909; // Yellow
$color-code: #dd1144;

$color-gray-dark: #808080;
$color-gray-light: #e5e5e5;


// Font Stacks
$font-primary: "Helvetica Neue", Arial, sans-serif;
$font-secondary: Georgia, Times, serif;
$font-monospace: Menlo, Monaco, "Courier New", monospace;


// Breakpoints
$bp-xsmall: 20em;
$bp-small: 30em;
$bp-medium: 40em;
$bp-large: 60em;
$bp-xlarge: 80em;


// Sizing
$font-size-base: 100%;
$spacing: 1.5625em;
$container-width: 88%;
$container-max-width: 80em;


// Grid
$grid-margins: 1.4%;
$grid-sizes: (
	// Grid width options
	// Add/remove grid's as needed
	// $name: $width
	// $name - {string} class suffix
	// $width - {string} width of the grid
	fourth: 25%,
	third: 33.33333333333%,
	half: 50%,
	two-thirds: 66.666666666667%,
	three-fourths: 75%,
	full: 100%
);
$grid-breakpoints: (
	// Breakpoints at which to activate grid
	// Add/remove breakpoints as needed
	// ($breakpoint, $prefix-class, $include-offsets)
	// $breakpoint - {string|variable} the breakpoint
	// $prefix-class - {string|optional} class to be used with `.row` to activate grid
	// $include-offsets - {boolean} if true, include offset classes at this breakpoint
	($bp-xsmall, ".row-start-xsmall", false),
	($bp-small, ".row-start-small", false),
	($bp-medium, null, true),
);
$grid-dynamic: (
	// Create grid classes that vary in size at different breakpoints
	// Add/remove classes, breakpoints, and sizes as needed
	// ($class, $breakpoint, $width)
	// $class - {string} the grid class
	// $breakpoint - {string|variable} the breakpoint
	// $width - {string|variable} width of the grid at the breakpoint
	(".grid-dynamic", $bp-xsmall, map-get($grid-sizes, half))
	(".grid-dynamic", $bp-small, map-get($grid-sizes, third))
	(".grid-dynamic", $bp-medium, map-get($grid-sizes, fourth))
);
```

#### `_mixins.scss`

The `_mixins.scss` file contains just a handful of mixins and functions to speed up development.

* `font-face` adds the `@font-face` property.
* `strip-unit` removes units (px, em, etc.) from numbers.
* `calc-em` converts pixels to ems.

`font-face` was forked from [Bourbon](http://bourbon.io/), the world's best Sass library.


#### Components

The `components` folder contains all of the Kraken components: the grid, button and form styling, and so on. The `main.scss` file imports `_config.scss`, `_mixins.scss`, and the components for processing into a CSS file.


### Working with SVG

SVG files placed in the `src` > `svg` directory will be optimized and compiled into the `dist` > `svg` directory. SVG files placed in a subdirectory of `src` > `svg` will be compiled into a single SVG sprite named after the subdirectory.

For example, SVGs placed in `svg` > `portfolio` would compile into `portfolio.svg` in the `dist` > `svg` directory.


### Working with Images

Image files placed in the `src` > `img` directory will be copied as-is into the `dist` > `img` directory. While you can add image optimization processes to Gulp, I find that tools like [ImageOptim](https://imageoptim.com/) and [b64.io](http://b64.io/) do a better job.


### Working with JavaScript

Kraken's JavaScript files are located in the `src` > `js` directory.

Files placed directly in the `js` folder will compile directly to `dist` > `js` as both minified and unminified files. Files placed in subdirectories will also be concatenated into a single file.

For example, `detects` > `flexbox.js` and `detects` > `svg.js` would compile into `detects.js` in the `dist` > `js` directory.

### Working with Static Files

Files and folders placed in the `src` > `static` directory will be copied as-is into the `dist` directory.

#### Unit Testing

If you've written [Jasmine unit tests](http://jasmine.github.io/) for any of your scripts, place them in the `test` > `spec` directory and they will automatically run on compile.

Results are displayed in both the terminal window and `test` > `results`. You can see how much coverage each unit test provides in the `test` > `coverage` directory.


### Continous Integration

Kraken includes a configuration file for [Travis CI](http://docs.travis-ci.com/user/getting-started/), a continuous integration service for GitHub.

If you sign-up and activate it for your repository, Travis CI will run your build and execute any processes to make sure everything is working as expected. This is particularly useful when working with a team or managing open source projects with multiple contributors.

The `.travis.yml` file is pre-configured for Kraken's build system. Even if you add files or update the Gulp tasks, you shouldn't need to change anything for it to work.


### GUI Source Compilers

If you would like the benefits of working with the source files, but aren't comfortable using terminal and command line code, there are a few GUIs that can help.

[CodeKit](https://incident57.com/codekit/) and [Hammer](http://hammerformac.com/) are two powerful Mac-only products that I used for some time. On Windows, I hear [Prepos](http://alphapixels.com/prepros/) is both beautiful and delightful to use.</p>

These tools can't replicate all of the features of the Gulp.js build system, but they come close.

<hr>


## Working with CSS

If you're more comfortable working in CSS, you can modify the `main.css` stylesheet in the `dist` > `css` directory.

### Adjusting Settings

<dl>
	<dt>Page Width</dt>
	<dd>The <code>.container</code> class sets the width for page content. Adjust the <code>max-width</code> property to set the maximum width of the page.</dd>

	<dt>Font Stack</dt>
	<dd>The <code>body</code> element sets the typeface for the entire set. By default, the font stack is Helvetica Neue, Arial, and sans-serif. The two exceptions are <code>pre</code> and <code>code</code> elements, which use a monospace stack. Adjust as desired.</dd>

	<dt>Typographic Scale</dt>
	<dd>Kraken uses a <a href="http://lamb.cc/typograph/">fluid typographic scale</a>. You can scale the size of all site elements proportionately by adjusting the <code>font-size</code> property on the body element, which is set to 100% by default (and 125% on screens above 80em).</dd>

	<dt>Colors (used throughout)</dt>
	<dd>Primary: <code style="color: #ffffff; background-color: #0088cc;">#0088cc</code><br>
	Black: <code style="color: #ffffff; background-color: #272727;">#272727</code><br>
	White: <code style="color: #272727; background-color: #ffffff;">#ffffff</code><br>
	Dark Gray: <code style="color: #ffffff; background-color: #808080;">#808080</code><br>
	Light Gray: <code style="color: #272727; background-color:#e5e5e5 ;">#e5e5e5</code></dd>

	<dt>Breakpoints (used throughout)</dt>
	<dd>Extra Small: 20em<br>
	Small: 30em<br>
	Medium: 40em<br>
	Large: 60em<br>
	Extra Large: 80em</dd>
</dl>

<hr>


## HTML Template

Here's a basic HTML template page to get you started.

```markup
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8">

		<!-- Force latest available IE rendering engine and Chrome Frame (if installed) -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title></title>
		<meta name="description" content="">

		<!-- Mobile Screen Resizing -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Icons: place in the root directory -->
		<!-- https://github.com/audreyr/favicon-cheat-sheet -->

		<!-- feature detection -->
		<script src="dist/js/detects.js"></script>

		<!-- stylesheets -->
		<link rel="stylesheet" href="dist/css/main.css" type="text/css">
	</head>

	<body>

		<!-- Old Browser Warning -->
		<!--[if lt IE 9]>
			<section class="container">
				Did you know that your web browser is a bit old? Some of the content on this site might not work right as a result. <a href="http://whatbrowser.org">Upgrade your browser</a> for a faster, better, and safer web experience.
			</section>
		<![endif]-->

		<nav>
			<!-- Skip Nav Link -->
			<a class="screen-reader screen-reader-focusable" href="#main">Skip to content</a>
			Navigation content
		</nav>

		<main id="#main">

			<section class="container">

				<h1>Hello World!</h1>

				<p>Add your content here.</p>

			</section>

		</main>

		<!-- Javascript -->
		<!-- In the footer for better performance -->
		<script src="dist/js/main.js"></script>

		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<!-- (Via HTML5 Boilerplate: http://html5boilerplate.com/) -->
		<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X');ga('send','pageview');
		</script>

	</body>

</html>
```

### The Template Explained

<dl>
	<dt>HTML Language</dt>
	<dd>The language attribute (`lang`) helps screen-readers and translation software read your site ([learn more](http://www.youtube.com/watch?v=Rx7lE8j5MNA)). Be default, it's set to English. Change it as needed for [your local language](http://www.w3.org/International/questions/qa-choosing-language-tags).</dd>

	<dt>Chrome Frame</dt>
	<dd>Sometimes newer versions of IE will use not-so-new versions of their rendering engine. We tell IE to use the latest available version of it's rendering engine, or Chrome Frame if it's installed.</dd>

	<dt>Mobile Screen Resizing</dt>
	<dd>Modern mobile browsers often "fake" a desktop sized viewport so that websites that aren't mobile-optimized aren't weirdly zoomed in when you load them. The viewport tag tells browsers that the viewport should be the size of the screen (because our site *is* mobile-optimize).</dd>

	<dt>Icons</dt>
	<dd>The site [favicon and touch icons](https://github.com/audreyr/favicon-cheat-sheet) for when people bookmark your site or app on the homescreen of their mobile device. Learn more.</dd>

	<dt>Old Browser Warning</dt>
	<dd>A friendly message encouraging visitors on older versions of IE to upgrade their browser. They can still access the site content. It will just look a bit funny.</dd>

	<dt>Skip Navigation Link</dt>
	<dd>[For better accessibility](http://webaim.org/techniques/skipnav/), this hidden link provides those navigating the site with screen readers and keyboards the ability to skip over the navigation and go straight to the content.</dd>

	<dt>JavaScript in the Footer</dt>
	<dd>For faster loading and better site performance, JavaScript files are included in the footer, not the header.</dd>

	<dt>Google Analytics</dt>
	<dd>An optimized version of Google Analytics is preloaded for you. Just add your site's ID (or replace the code altogether if you're using another analytics platform). [Adapted from HTML5 Boilerplate.](http://html5boilerplate.com/)</dd>
</dl>