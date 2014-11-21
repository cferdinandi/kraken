# Generating Documentation

Kraken ships with a simple documentation generator powered by [Gulp.js](http://gulpjs.com). This feature requires you to [work with the source files](working-with-the-source-files.html).

Documentation files can be found under `src` > `docs`, and compile to `docs`.

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#how-to-create-docs">How to Create Docs</a></li>
		<li><a data-scroll href="#why-not-use-an-existing-documentation-tool">Why not use an existing documentation tool?</a></li>
	</ul>
</nav>

<h2 id="how-to-create-docs">How to Create Docs</h2>

Add HTML or markdown (`.md` or `.markdown`) files to your `docs` folder in `src`.

The `_templates` directory in `src` contains the `_header.html` and `_footer.html` templates. These are automatically added to the beginning and end of each documentation page. You can also add your own templates to the `_templates` directory. Include template files in your docs by writing <code>&commat;&commat;include('path-to-file')</code> on its own line in your markup (or markdown).

Files placed in the `assets` directory will be moved over as-is to the `docs` directory. Kraken will also add a copy of your `dist` files so you can use them in your documentation.

Documentation is automatically created when you [run of the Gulp tasks](working-with-the-source-files.html).


<h2 id="why-not-use-an-existing-documentation-tool">Why not use an existing documentation tool?</h2>

There are a ton of great CSS and JS documentation tools available. I explored using [KSS](http://warpspire.com/kss/), [Hologram](http://trulia.github.io/hologram/), and a few others.

I found myself frustrated by the lack of control over the layout, the clutter added to the stylesheet, and the complexity in getting setup.

I decided creating my own documentation tool was a better fit for my needs. Obviously, feel free to use the documentation tool that best fits your needs.