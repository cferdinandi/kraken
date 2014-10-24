# The Grid

Kraken uses a fluid, mobile-first grid system based on simple fractions&mdash;halves, thirds, and fourths. It supports nesting, and includes special classes for offsets, content choreography, and dynamic grids.

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#the-base-grid">The Base Grid</a></li>
		<li><a data-scroll href="#offsets">Offsets</a></li>
		<li><a data-scroll href="#grids-on-small-screens">Grids on Small Screens</a></li>
		<li><a data-scroll href="#content-choreography">Content Choreography</a></li>
		<li><a data-scroll href="#dynamic-grids">Dynamic Grids</a></li>
	</ul>
</nav>

<h2 id="the-base-grid">The Base Grid</h2>

The `.container` class centers content on the page and restricts it to a maximum width. To create a grid, add a `<div>` with a `.row` class. You can create grids within a row by creating `<div>` elements with the `.grid-$size` class.

</div></div><!-- /.row /.grid-two-thirds: go full width -->

<div class="row">
	<div class="grid-third"><div class="grid-highlight">.grid-third</div></div>
	<div class="grid-two-thirds"><div class="grid-highlight">.grid-two-thirds</div></div>
</div>

<div class="row">
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-three-fourths"><div class="grid-highlight">.grid-three-fourths</div></div>
</div>

<div class="row">
	<div class="grid-half"><div class="grid-highlight">.grid-half</div></div>
	<div class="grid-half"><div class="grid-highlight">.grid-half</div></div>
</div>

<div class="row">
	<div class="grid-full"><div class="grid-highlight">.grid-full</div></div>
</div>

```markup
<div class="container">

	<p>Kraken uses a fluid, mobile-first grid system...</p>

	<div class="row">
		<div class="grid-third">.grid-third</div>
		<div class="grid-two-thirds">.grid-two-thirds</div>
	</div>

	<div class="row">
		<div class="grid-fourth">.grid-fourth</div>
		<div class="grid-three-fourths">.grid-three-fourths</div>
	</div>

	<div class="row">
		<div class="grid-half">.grid-half</div>
		<div class="grid-half">.grid-half</div>
	</div>

	<div class="row">
		<div class="grid-full">.grid-full</div>
	</div>

</div>
```


<div class="row">
	<div class="grid-two-thirds float-center">
		<h2 id="offsets">Offsets</h2>

		<p>Push grids to the right by adding an <code>.offset-$size</code> class. Center grids with the <code>.float-center</code> class.</p>

	</div>
</div>

<div class="row">
	<div class="grid-three-fourths offset-fourth"><div class="grid-highlight">.grid-three-fourths .offset-fourth</div></div>
</div>

<div class="row">
	<div class="grid-third"><div class="grid-highlight">.grid-third</div></div>
	<div class="grid-third offset-third"><div class="grid-highlight">.grid-third .offset-third</div></div>
</div>

<div class="row">
	<div class="grid-two-thirds float-center"><div class="grid-highlight">.grid-two-thirds .float-center</div></div>
</div>

```markup
<div class="row">
	<div class="grid-three-fourths offset-fourth">.grid-three-fourths .offset-fourth</div>
</div>

<div class="row">
	<div class="grid-third">.grid-third</div>
	<div class="grid-third offset-third">.grid-third .offset-third</div>
</div>

<div class="row">
	<div class="grid-two-thirds float-center">.grid-two-thirds .float-center</div>
</div>
```


<div class="row">
	<div class="grid-two-thirds float-center">
		<h2 id="grids-on-small-screens">Grids on Small Screens</h2>

		<p>The grid activates on medium-sized screens by default. You can toggle the grid on smaller screens by adding a simple class&mdash;<code>.row-start-xsmall</code> or <code>.row-start-small</code>&mdash;to the desired <code>.row</code> element.</p>

		<p>If you're <a href="working-with-the-source-files.html">working with the source files</a>, you can also easily customize when the grid activates by default and adjust or add additional <code>.row-start-$size</code> classes.</p>
	</div>
</div>

**Extra Small Screens**
<div class="row row-start-xsmall">
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
</div>

**Small Screens**
<div class="row row-start-small">
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="grid-highlight">.grid-fourth</div></div>
</div>

```markup
Extra Small Screens
<div class="row row-start-xsmall">
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
</div>

Small Screens
<div class="row row-start-small">
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
</div>
```


<div class="row">
	<div class="grid-two-thirds float-center">
		<h2 id="content-choreography">Content Choreography</h2>

		<p>Flip the order of a grid on bigger screens by adding the <code>.grid-flip</code> class.</p>
	</div>
</div>

<div class="row">
	<div class="grid-third grid-flip"><div class="grid-highlight">First in HTML</div></div>
	<div class="grid-two-thirds"><div class="grid-highlight">Second in HTML</div></div>
</div>

```markup
<div class="row">
	<div class="grid-third grid-flip">First in HTML</div>
	<div class="grid-two-thirds">Second in HTML</div>
</div>
```


<div class="row">
	<div class="grid-two-thirds float-center">
		<h2 id="dynamic-grids">Dynamic Grids</h2>

		<p>Create grids that vary in size based on screen width using the <code>.grid-dynamic</code> class&mdash;great for creating images galleries! For content that may vary in height, you may want to use the <a href="https://github.com/cferdinandi/right-height/">Right Height add-on</a>.</p>

		<p>If you're <a href="working-with-the-source-files.html">working with the source files</a>, you easily adjust the grid breakpoints and even create additional grids with different layout patterns.</p>
	</div>
</div>

<div class="row">
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="assets/img/emu.jpg" title="Picture an emu"></p></div>
</div>

```markup
<div class="row">
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
	<div class="grid-dynamic"><img src="emu.jpg"></div>
</div>
```