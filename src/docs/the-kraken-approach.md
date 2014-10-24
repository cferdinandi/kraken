# The Kraken Approach

Kraken is a lightweight boilerplate for front-end web developers. It's built to be flexible and modular, with performance and accessibility in mind.

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#ugly-on-purpose">Ugly on Purpose</a></li>
		<li><a data-scroll href="#mobile-first">Mobile First</a></li>
		<li><a data-scroll href="#oocss">Object-Oriented CSS</a></li>
	</ul>
</nav>


<h2 id="ugly-on-purpose">Ugly on purpose</h2>

Out-of-the-box, Kraken is a bit ugly. That's intentional.

Kraken isn't supposed to be a finished product. It's a starting point that you can adapt to any project you're working on. Add components. Remove components. Tweak the colors and font stack. Make Kraken your own.


<h2 id="mobile-first">Mobile-First</h2>

Kraken is built mobile-first. The base structure is a fully-fluid, single-column layout. It uses `@media (min-width: whatever)` to add a grid-based layout to bigger screens.

Think of it as progressive enhancement for the layout.

Kraken also includes feature detection for things like icon fonts and SVG. Just like the layout, those are served to browsers that support them, while fallback text is supplied to older and less capable browsers.


<h2 id="oocss">Object Oriented CSS</h2>

Kraken takes an [OOCSS approach](http://www.slideshare.net/stubbornella/object-oriented-css) to web development.

Throughout the stylesheet, you'll see base styles and modifying styles. For example, `.btn` sets the default button styles and behavior, while `.btn-secondary` changes the color and `.btn-large` changes the size. A big button with secondary colors would look like this:

<button class="btn btn-secondary btn-large">A Big Button</button>

```markup
<button class="btn btn-secondary btn-large">A Big Button</button>
```

Classes can be mixed, matched and reused throughout a project.