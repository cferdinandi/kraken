# A starting point for front-end projects

Designed to be lightweight and style agnostic, Kraken includes just the essentials.

- A minimal, modern CSS reset
- A responsive, mobile-first grid built on flexbox
- A well-designed, fluid typographic scale
- CSS buttons
- Simple table styling
- Common form components
- A set of utility classes for nudging and tweaking the layout

Kraken isn't supposed to be a finished product. It's a starting point that you can adapt to any project you're working on. Add components. Remove components. Tweak the colors and font stack. Make Kraken your own.

## The Kraken Approach

Kraken is built to be flexible and modular, with performance and accessibility in mind.

- **Ugly on purpose.** Out-of-the-box, Kraken is a bit ugly. That's intentional. Kraken isn't supposed to be a finished product. It's a starting point that you can adapt to any project you're working on. Add components. Remove components. Tweak the colors and font stack. Make Kraken your own.<br><br>
- **Mobile-First.** Kraken is built mobile-first. The base structure is a fully-fluid, single-column layout. It uses `@media (min-width: whatever)` to add a grid-based layout to bigger screens. Think of it as progressive enhancement for the layout.<br><br>
- **Object-Oriented CSS.** Kraken takes an [OOCSS approach](http://www.slideshare.net/stubbornella/object-oriented-css) to web development. Throughout the stylesheet, you'll see base styles and modifying styles. Classes can be mixed, matched and reused throughout a project.<br><br>For example, `.btn` sets the default button styles and behavior, while `.btn-secondary` changes the color and `.btn-large` changes the size. A big button with secondary colors would look like this:
	```html
	<button class="btn btn-secondary btn-large">A Big Button</button>
	```

## What's new?

### Version 13

Kraken 13 adds modern CSS updates.

- Switched from flexbox to CSS Grid for more predictability and control over layouts.
- Implemented CSS custom properties (also known as CSS variables) for all colors, typefaces, and sizes, making customization faster and easier.

### Version 12

Added a simple flexbox grid back in. The new grid is designed to be a starting point (and possibly removed altogether) rather than a complete templating system.

### Version 11

Kraken 11 is all about simplifying.

- The built-in grid system was remove entirely. Between Flexbox and CSS Grid, CSS layouts are incredibly powerful today. As a result, there's no good way to do a "one-size fits most" system.
- The `normalize.css` reset has been dropped in favor of a more modern, minimal reset that reflects how good modern browser are at rendering things consistently.

### Version 10

Kraken 10 changed the way spacing between grids works. Grids now sit tight against one another, and using padding to provide space between content instead of margins.

This is a break change, and the only reason for the major version bump.

### Version 9

Kraken 9 is about removing a lot of the cruft from older versions.

- The build tool was removed to focus on Kraken's core strength: the CSS boilerplate.
- Sass mixins weren't really used, and have been removed.
- `calc-em()` was replaced in the Sass files with native `em`-based sizing.
- SVG sprite styles were removed in favor of inline SVGs.
- CSS-only responsive tables had accessibility issues and were removed.
- The `.disabled` class for buttons was removed in favor of the `[disabled]` attribute.
- The `.screen-reader` class was renamed `.visually-hidden` to be consistent with industry norms.
- An accessibility bugfix was added for unstyled and inline lists.

## Browser Support

Kraken works in all browsers, but it's optimized for modern browsers, and IE 11 and above.

(_[Support is not the same as optimization.](http://bradfrostweb.com/blog/mobile/support-vs-optimization/)_)