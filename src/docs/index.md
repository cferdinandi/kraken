# A starting point for front-end projects

Designed to be lightweight and style agnostic, Kraken includes just the essentials.

- A minimal, modern CSS reset
- A well-designed, fluid typographic scale
- CSS buttons
- Simple table styling
- Common form components
- A set of utility classes for nudging and tweaking the layout

Kraken isn't supposed to be a finished product. It's a starting point that you can adapt to any project you're working on. Add components. Remove components. Tweak the colors and font stack. Make Kraken your own.

## Object-Oriented CSS

Kraken takes an [OOCSS approach](http://www.slideshare.net/stubbornella/object-oriented-css) to web development.

Throughout the stylesheet, you'll see base styles and modifying styles. Classes can be mixed, matched and reused throughout a project.

For example, `.btn` sets the default button styles and behavior, while `.btn-secondary` changes the color and `.btn-large` changes the size. A big button with secondary colors would look like this:

```html
<button class="btn btn-secondary btn-large">A Big Button</button>
```

## What's new?

### Version 11

Kraken 11 is all about simplifying.

- The built-in grid system was remove entirely. Between Flexbox and CSS Grid, CSS layouts are incredibly powerful today. As a result, there's no good way to do a "one-size fits most" system.
- The `normalize.css` reset has been dropped in favor of a more modern, minimal reset that reflects how good modern browser are at rendering things consistently.

### Version 10

Kraken 10 changed the way spacing between grids works. Grids now sit tight against one another, and using padding to provide space between content instead of magins.

This is a break change, and the only reason for the major version bump.

### Version 9

Kraken 9 is about removing a lot of the kruft from older versions.

- The build tool was removed to focus on Kraken's core strength: the CSS boilerplate.
- Sass mixins weren't really used, and have been removed.
- `calc-em()` was replaced in the Sass files with native `em`-based sizing.
- SVG sprite styles were removed in favor of inline SVGs.
- CSS-only responsive tables had accessibility issues and were removed.
- The `.disabled` class for buttons was removed in favor of the `[disabled]` attribute.
- The `.screen-reader` class was renamed `.visually-hidden` to be consistent with industry norms.
- An accessibility bugfix was added for unstyled and inline lists.

## Browser Support

The web is for everyone, but [support is not the same as optimization](http://bradfrostweb.com/blog/mobile/support-vs-optimization/).

Kraken works in all browsers, but it's optimized for browsers that support Flexbox. That includes all modern browsers, and IE 11 and above.

Older browsers will receive a more basic experience, including a single-column layout instead of a grid.