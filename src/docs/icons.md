# Icons

Kraken includes support for both SVG icons and icon fonts. As an [emerging best practice](http://css-tricks.com/svg-sprites-use-better-icon-fonts/), it's strongly recommended that you use SVG.

***Note:*** *Because of namespacing conflicts, you cannot use SVG and icon fonts together by default. If you plan on using both, change the class names for at least one of them to avoid conflicts.*

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#svg">SVG</a></li>
		<li><a data-scroll href="#icon-fonts">Icon Fonts</a></li>
	</ul>
</nav>


<h2 id="svg">SVG Sprites</h2>

Kraken's build system will generate an SVG sprite from individual SVG files. Alternatively, you can use [IcoMoon](https://icomoon.io/) to generate an SVG sprite for you.

Include the contents of your SVG sprite as a hidden element directly after the opening `<body>` tag.

```markup
<svg xmlns="http://www.w3.org/2000/svg" hidden>
	<symbol id="icon-logo" viewBox="0 0 100 100">
		<path d="M92.842 20.437L90.61 47.905 66.19 53.31l-13.6-10.06-.002-26.23 14.45 7.41 25.804-3.993zM65.97 60.827L52.59 50.13v7.048l6.224 5.354-28.008 6.685-10.432-12.403 1.7 24.16 10.02 14.52 26.378-7.8.118-8.64..,"/>
	</symbol>
	<symbol id="icon-goldfish" viewBox="0 0 100 100">
		...
	</symbol>
</svg>
```

Include icons on your site by referencing their ID, which will be the original file name prefixed with `icon-`. Add the `.icon` class&mdash;which sets the height, width, and color to inherit based on its context&mdash;and any others to the `svg` tag.

```markup
<svg class="icon">
	<use xlink:href="#icon-logo"></use>
</svg>
```

Kraken comes with SVG support detection that adds an `.svg` class to the `<html>` element if supported. If an image is more than decorative, always include supporting text in a `<span>` with the `.icon-fallback-text` class. This text will display when SVG is not supported by the browser, and is accessible screen readers.

```markup
<svg class="icon some-other-class">
	<use xlink:href="#icon-twitter"></use>
</svg>
<span class="icon-fallback-text">Tweet This</span>
```


<h2 id="icon-fonts">Icon Fonts</h2>

[IcoMoon](https://icomoon.io/) is an incredible app for building custom icon fonts.

Add icons to your markup by applying the `.icon` class to an empty `<span>` tag, as well as the name of the icon prefixed with `.icon-`.

```markup
<span class="icon icon-logo"></span>
```

While icon fonts are well supported, some browsers&mdash;most notably Opera Mini&mdash;have issues with them. Kraken comes with icon font support detection that adds a `.font-face` class to the `<html>` element if supported.

If an icon is more than decorative, always include supporting text in a `<span>` with the `.icon-fallback-text` class. This text will display when icon fonts are not supported by the browser, and is accessible screen readers.

```markup
<span class="icon icon-twitter"></span>
<span class="icon-fallback-text">Tweet This</span>
```

Learn more about icon fonts in this [guide for beginners](http://gomakethings.com/icon-fonts).