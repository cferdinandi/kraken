# Getting Started

## Installation

There are three ways to use Kraken with your project:

1. [Download Kraken directly from GitHub.](https://github.com/cferdinandi/kraken/archive/master.zip)
2. Clone Kraken from GitHub: `git@github.com:cferdinandi/kraken.git`
3. Install Kraken from GitHub using your favorite package manager: `npm install kraken-css`

<hr>

## Working with CSS

The stylesheets in the `dist` directory contain CSS variables (also known as custom properties) that you can modify to change the colors, typefaces, and sizes for your project.

```css
/**
 * Configs
 */
:root {

	/* Colors */
	--color-primary: #0088cc;
	--color-primary-dark: #005580;
	--color-secondary: #377f31;
	--color-secondary-dark: #2C6327;
	--color-code: #dd1144;
	--color-highlight: #fbf9c9;

	--color-black: #272727;
	--color-white: #ffffff;
	--color-gray-dark: #808080;
	--color-gray-darker: #555555;
	--color-gray-medium: #B8B8B8;
	--color-gray-light: #e5e5e5;
	--color-gray-lighter: #f7f7f7;

	/* Fonts */
	--font-primary: "Helvetica Neue", Arial, sans-serif;
	--font-monospace: Menlo, Monaco, "Courier New", monospace;

	/* Sizes */
	--font-size: 100%;
	--spacing: 1.5625em;
	--container-width: 88%;
	--container-max-width: 80em;

}
```

<dl>
	<dt>Page Width</dt>
	<dd>The <code>.container</code> class sets the width for page content. Adjust the <code>--max-width</code> property to set the maximum width of the page.</dd>
	<dt>Font Stack</dt>
	<dd>The <code>body</code> element sets the typeface for the entire set. By default, the font stack is Helvetica Neue, Arial, and sans-serif. The two exceptions are <code>pre</code> and <code>code</code> elements, which use a monospace stack. Adjust as desired.</dd>
	<dt>Typographic Scale</dt>
	<dd>Kraken uses a <a href="http://lamb.cc/typograph/">fluid typographic scale</a>. You can scale the size of all site elements proportionately by adjusting the <code>--font-size</code> property on the body element, which is set to 100% by default.</dd>
	<dt>Colors</dt>
	<dd>The color palette is used to style text, buttons, forms, and form. Adjust to suit your design.</dd>
	<dt>Breakpoints (used throughout)</dt>
	<dd>CSS variables cannot be used in media queries, so these are hard-coded through the stylesheet.<br><br>Extra Small: 20em<br>
	Small: 30em<br>
	Medium: 40em<br>
	Large: 60em<br>
	Extra Large: 80em</dd>
</dl>

<hr>

## Working with Sass

Kraken's Sass files are located in the `src/scss` directory.

The compiled CSS in the `dist` directory can be built from the command line by running `npm install`, then `npm run css`, or using your favorite Sass compiler.

### File Structure

- The `_config.scss` file contains all of the configuration options, including Sass variables for breakpoints, and CSS custom properties for everything else.
- The `components` directory holds the styles for each of the individual component groups (typography, the grid, buttons, forms, and so on).
- The `main.scss` file pulls the configurations and components together into a single file.

### `_config.scss`

The `_config.scss` file contains variables for all of the colors, font stacks, breakpoints, and sizing used in Kraken. It also contains settings for the grid.

```scss
/**
 * Configs
 */
:root {

	/* Colors */
	--color-primary: #0088cc;
	--color-primary-dark: #005580;
	--color-secondary: #377f31;
	--color-secondary-dark: #2C6327;
	--color-code: #dd1144;
	--color-highlight: #fbf9c9;

	--color-black: #272727;
	--color-white: #ffffff;
	--color-gray-dark: #808080;
	--color-gray-darker: #555555;
	--color-gray-medium: #B8B8B8;
	--color-gray-light: #e5e5e5;
	--color-gray-lighter: #f7f7f7;

	/* Fonts */
	--font-primary: "Helvetica Neue", Arial, sans-serif;
	--font-monospace: Menlo, Monaco, "Courier New", monospace;

	/* Sizes */
	--font-size: 100%;
	--spacing: 1.5625em;
	--container-width: 88%;
	--container-max-width: 80em;

}

// Breakpoints
$bp-xsmall: 20em;
$bp-small: 30em;
$bp-medium: 40em;
$bp-large: 60em;
$bp-xlarge: 80em;
```