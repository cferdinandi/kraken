# What's new in version 5?

Most of the changes from Kraken 4 to Kraken 5 were class name changes and updates to the build process that break backwards compatibility but provide a more flexible foundation for front-end web developers.

<dl>
	<dt>Accessibility Improvements</dt>
	<dd>Kraken 5 includes a class to make hidden link content viewable when in focus for people navigating with keyboards. The HTML template now includes a skip nav link.</dd>
</dl>

<dl>
	<dt>List Updates</dt>
	<dd>Kraken 5 adds an inline list option. It also removes `list-style` attributes and allows browser defaults to take effect.</dd>
</dl>

<dl>
	<dt>Smarter Class Names</dt>
	<dd>`.grid-img` is now `.grid-dynamic` to better reflect its functionality and accomodate various types of content. General `*-space-*` modifiers have been replaced with `*-margin-*` and `*-padding-*`. `.group` is now `.clearfix`.</dd>
</dl>


## More awesome features (added in version 4)

<dl>
	<dt>SVG Support</dt>
	<dd>Kraken now features an SVG sprite generator, as well as an SVG feature test for some conditional styling.</dd>
</dl>

<dl>
	<dt>Goodbye IE 8</dt>
	<dd>Kraken 4 drops optimization for IE 8. That means no more conditional classes on the `<html>` element, and [HTML5 shim](https://code.google.com/p/html5shim/) has been removed. IE 8 users will get a very minimal, content-focused, single-column experience.</dd>
</dl>

<dl>
	<dt>Documentation Generator</dt>
	<dd>A built-in documentation generator makes it easier for you to keep your team informed and teach clients about how to use the things you build with Kraken.</dd>
</dl>

<dl>
	<dt>Sass 3 Features</dt>
	<dd>Sass variables and the new `@each` loop make extending the grid and adding icon fonts much easier.</dd>
</dl>

<dl>
	<dt>New Namespacing</dt>
	<dd>The feature detection script was renamed `detects.js`. The main CSS and JavaScript files were namespaced as `main` instead of `kraken`. And `.text-tall` was changed to `.text-large` for better semantics and extensibility.</dd>
</dl>