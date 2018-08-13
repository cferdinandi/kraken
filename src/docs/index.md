# Kraken

Kraken is a lightweight, mobile-first boilerplate for front-end web developers.

## What's included?

Designed to be lightweight and style agnostic, Kraken includes just the essentials.

### Essential Components

Lightweight, style-agnostic components to kick-start your next project.

* Normalize.css
* A responsive, mobile-first grid
* A well-designed, fluid typographic scale
* CSS buttons
* Simple table styling, with pure CSS responsive tables
* Common form components

### Developer Tools

Kraken is powered by [Gulp.js](http://gulpjs.com/), a build system that minifies and concatenates your [Sass](http://sass-lang.com/) and JavaScript, auto-prefixes your CSS, runs [unit tests](http://jasmine.github.io/) on your scripts, optimizes your SVGs, and creates SVG sprites.

It also includes a style guide generator to help you quickly bring your team or clients up-to-speed.

### Add-Ons

While the base boilerplate is deliberately lightweight, [a growing collection of add-ons](odds-and-ends.html#add-ons) lets you make Kraken as robust—or simple—as you want it to be. Create custom-built sites and applications faster.

<hr>


## The Kraken Approach

Kraken is a lightweight boilerplate for front-end web developers. It's built to be flexible and modular, with performance and accessibility in mind.

### Ugly on purpose

Out-of-the-box, Kraken is a bit ugly. That's intentional.

Kraken isn't supposed to be a finished product. It's a starting point that you can adapt to any project you're working on. Add components. Remove components. Tweak the colors and font stack. Make Kraken your own.


### Mobile-First

Kraken is built mobile-first. The base structure is a fully-fluid, single-column layout. It uses `@media (min-width: whatever)` to add a grid-based layout to bigger screens.

Think of it as progressive enhancement for the layout.

Kraken also includes feature detection for things like SVG support. Just like the layout, those are served to browsers that support them, while fallback text is supplied to older and less capable browsers.


### Object Oriented CSS

Kraken takes an [OOCSS approach](http://www.slideshare.net/stubbornella/object-oriented-css) to web development.

Throughout the stylesheet, you'll see base styles and modifying styles. For example, `.btn` sets the default button styles and behavior, while `.btn-secondary` changes the color and `.btn-large` changes the size. A big button with secondary colors would look like this:

<button class="btn btn-secondary btn-large">A Big Button</button>

```markup
<button class="btn btn-secondary btn-large">A Big Button</button>
```

Classes can be mixed, matched and reused throughout a project.

<hr>


## What's new in Kraken 8?

<dl>
	<dt>Switched to Flexbox</dt>
	<dd>The old float-based CSS grid is gone in favor of Flexbox. This makes setting up grids easier than ever and gives you more layout flexibility and control than previous versions.</dd>
</dl>

<hr>


## Browser Compatibility

The web is for everyone, but [support is not the same as optimization](http://bradfrostweb.com/blog/mobile/support-vs-optimization/).

Rather than trying to provide the same level of functionality for older browsers, Kraken uses progressive enhancement to serve a basic experience to all browsers (even Netscape and IE 5). Newer browsers that support modern APIs and techniques get a better layout, more visually attractive elements, and an enhanced experience.

Kraken works in all browsers, but it's optimized for modern browsers and IE 11 and above.

### Vendor Prefixing

Kraken uses [Autoprefixer](https://github.com/postcss/autoprefixer), and is configured to only add prefixes if required by the last two versions of a browser.

If a feature isn't working (for example, the grid does not work in Firefox 28 and lower), it may simply need a vendor prefix. You can add these manually, or adjust the Autoprefixer settings in `gulpfile.js` if you're working with the source code.

For more details on when support for specific features were added to different browsers, consult [Can I Use](http://caniuse.com/).