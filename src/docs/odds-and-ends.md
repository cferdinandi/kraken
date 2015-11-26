# Odds & Ends

## Add-Ons

Extend Kraken with add-ons built to be dropped right in. Kind of like Legos for frontend developers.

### Boilerplates

* [Keel.](https://github.com/cferdinandi/keel) A barebones starter theme for WordPress developers.
* [Buoy.](https://github.com/cferdinandi/buoy) A lightweight collection of helper methods for getting stuff done in native JavaScript.

### Interactive Content

* [Smooth Scroll.](https://github.com/cferdinandi/smooth-scroll/) Animate scrolling to anchor links.
* [Gumshoe.](https://github.com/cferdinandi/gumshoe) A framework-agnostic scrollspy script.
* [Astro.](https://github.com/cferdinandi/astro/) A collection of responsive, mobile-first navigation patterns.
* [Drop.](https://github.com/cferdinandi/drop/) Mobile-friendly dropdown menus.
* [Houdini.](https://github.com/cferdinandi/houdini/) A progressively enhanced expand-and-collapse widget and accordion.
* [Tabby.](https://github.com/cferdinandi/tabby/) Lightweight toggle-tabs.
* [Modals.](https://github.com/cferdinandi/modals/) Simple, mobile-friendly modal dialogue windows.
* [Form Saver.](https://github.com/cferdinandi/form-saver/) Let users save, reuse, and delete form data.
* [X-Ray.](https://github.com/cferdinandi/x-ray/) Let users toggle password visibility.
* [Right Height](https://github.com/cferdinandi/right-height/) Set variable content containers to equal height.
* [Sticky Footer](https://github.com/cferdinandi/sticky-footer/) Dynamic, responsive sticky footers.


### CSS Components

* [Social Sharing.](https://github.com/cferdinandi/social-sharing/) Links and buttons without the bloat.
* [Snapshot.](https://github.com/cferdinandi/snapshot/) Basic image styling.
* [Progress Bars.](https://github.com/cferdinandi/progress-bars/) Lightweight CSS progress bars.
* [Alerts.](https://github.com/cferdinandi/alerts/) Simple alert messages.
* [Labels.](https://github.com/cferdinandi/labels/) Lightweight CSS labels.


### Other People's Stuff

* [FluidVids.js.](https://github.com/toddmotto/fluidvids) A lightweight javascript snippet for fluid iframes.
* [Prism.](http://prismjs.com/) A lightweight syntax highlighter by Lea Verou.
* [.htaccess.](https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess) Best practice server rules for making web pages fast and secure.

<hr>


## Generating Documentation

Kraken ships with a simple documentation generator powered by [Gulp.js](http://gulpjs.com). This feature requires you to [work with the source files](working-with-the-source-files.html).

Documentation files can be found under `src` > `docs`, and compile to `docs`.

### How to Create Docs

Add HTML or markdown (`.md` or `.markdown`) files to your `docs` folder in `src`.

The `_templates` directory in `src` contains the `_header.html` and `_footer.html` templates. These are automatically added to the beginning and end of each documentation page. You can also add your own templates to the `_templates` directory. Include template files in your docs by writing <code>&commat;&commat;include('path-to-file')</code> on its own line in your markup (or markdown).

Files placed in the `assets` directory will be moved over as-is to the `docs` directory. Kraken will also add a copy of your `dist` files so you can use them in your documentation.

Documentation is automatically created when you [run of the Gulp tasks](setup.html#working-with-the-source-files).

### Creating a table of contents

The build system includes `toc.js`, a custom script for dynamically generating tables of contents based on page headers. It's already configured for use in the `_footer.html` template.

1. Add an empty `div` with the `.js-toc` class wherever you want your table of contents to get generated.
2. Add the `.js-toc-content` class to the section you want to generate a table of contents from. By default, the script grabs any `h2` with an `id` and creates a link to it.
3. Initialize the script to create your table of contents, and to pass in your own options.

**Markup**

```markup
<div data-toc></div>
<div data-toc-content>
	<h1>Page Title</h1>
	<h2>Section</h2>
	...
	<h2>Another Section</h2>
	...
</div>
```

**JavaScript**

```javascript
tableOfContents.init({
	container: '[data-toc]', // The selector for the table of contents (uses document.querySelector)
	selectors: '[data-toc-content] h2',  // The selector for the section headers (uses document.querySelectorAll)
	heading: 'Contents', // The heading for the table of contents
	headingType: 'h2', // The heading type for the table of contents
	headingClass: '', // The class(es) to add to the table of contents heading
	navClass: '', // The class(es) to add to the navigation <ul> element
	linkClass: '', // The class(es) to add to the navigation <a> elements
	initClass: 'js-table-of-contents', // The class(es) to add to the <html> element on init
	callback: function () {} // A callback to run after the table of contents is rendered
});
```


### Automatically highlighting the active navigation link

The build system includes `highlight-active-nav.js`, a custom script for dynamically highlighting the active link in the navigation. It's already configured for use in the `_footer.html` template.

Simply add the `.js-nav-highlight` class to the navigation list, and initialize the script. You can pass in your own options and settings.

**Markup**

```markup
<ul data-nav-highlight>
	<li><a href="link1.html">Link 1</a></li>
	<li><a href="link2.html">Link 2</a></li>
	<li><a href="link3.html">Link 3</a></li>
</ul>
```

**JavaScript**

```javascript
highlightActiveNav.init({
	selector: '[data-nav-highlight]', // The selector for the nav (uses document.querySelector)
	activeClass: 'nav-active', // Class(es) to add to the active navigation link
	urlPrefix: null, // If the base domain isn't root, add the prefix
	callback: function () {} // Callback to run after the nav is highlighted
});
```


### Why not use an existing documentation tool?

There are a ton of great CSS and JS documentation tools available. I explored using [KSS](http://warpspire.com/kss/), [Hologram](http://trulia.github.io/hologram/), and a few others.

I found myself frustrated by the lack of control over the layout, the clutter added to the stylesheet, and the complexity in getting setup.

I decided creating my own documentation tool was a better fit for my needs. Obviously, feel free to use the documentation tool that best fits your needs.

<hr>


## Built with Kraken

Build a site with Kraken? <a href="mailto:&#104;&#101;llo&#64;&#103;om&#97;ke&#116;h&#105;&#110;&#103;s.&#99;o&#109;">Let me know!</a>

* [Harvard Business School Digital Initiative](https://digital.hbs.edu/)
* [Go Make Things](http://gomakethings.com/)
* [PAWS New England](http://www.pawsnewengland.com/)
* [Nick Simson](http://nicksimson.com/)
* [Christian von Schack](http://schackmatt.no/)
* [Shift it](http://www.shiftit.com.br/)
* [Benjamin Obdyke](http://www.benjaminobdyke.com/)
* [Osasu](http://osasu.com/)
* [Nicole Burley Coaching](http://nicoleburley.com/)
* [Poetreat](http://poetreatapp.com/)
* [Barry Zimmerman](http://barryzimmerman.co.uk/)
* [Exis](http://exisweb.net/)

<hr>


## Support

If you have a question, find a bug, or just want to say hi, please open an [issue on GitHub](https://github.com/cferdinandi/kraken/issues).