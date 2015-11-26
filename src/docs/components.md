# Components

## Branding Elements

These are the default colors and typefaces in Kraken. Update them to suite your project.

### Colors

<div class="clearfix">
	<div class="float-left branding-color-box" style="background-color: #0088cc; color: white;">
		#0088cc
	</div>
	<div class="float-left branding-color-box" style="background-color: #808080; color: white;">
		#808080
	</div>
	<div class="float-left branding-color-box" style="background-color: #e5e5e5;">
		#e5e5e5
	</div>
	<div class="float-left branding-color-box" style="background-color: #ffffff;">
		#ffffff
	</div>
	<div class="float-left branding-color-box" style="background-color: #272727; color: white;">
		#272727
	</div>
</div>

### Font Stacks

<p class="branding-font" style="font-family: 'Helvetica Neue', Arial, sans-serif">Helvetica Neue, Arial, sans-serif</p>
<p class="branding-font" style="font-family: Menlo, Monaco, 'Courier New', monospace;">Menlo, Monaco, Courier New, monospace</p>

<hr>


## The Grid

Kraken uses a fluid, mobile-first grid system based on simple fractions&mdash;halves, thirds, and fourths. It supports nesting, and includes special classes for offsets, content choreography, and dynamic grids.

### The Base Grid

The `.container` class centers content on the page and restricts it to a maximum width. To create a grid, add a `<div>` with a `.row` class. You can create grids within a row by creating `<div>` elements with the `.grid-$size` class.

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


### Offsets

Push grids to the right by adding an `.offset-$size` class. Center grids with the `.float-center` class.

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


### Grids on Small Screens

The grid activates on medium-sized screens by default. You can toggle the grid on smaller screens by adding a simple class-`.row-start-xsmall` or `.row-start-small`-to the desired `.row` element.

If you're [working with the source files](setup.html#working-with-the-source-files), you can also easily customize when the grid activates by default and adjust or add additional `.row-start-$size` classes.

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


### Content Choreography

Flip the order of a grid on bigger screens by adding the `.grid-flip` class.

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


### Dynamic Grids

Create grids that vary in size based on screen width using the `.grid-dynamic` class&mdash;great for creating images galleries! For content that may vary in height, you may want to use the [Right Height add-on](https://github.com/cferdinandi/right-height/).

If you're [working with the source files](setup.html#working-with-the-source-files), you easily adjust the grid breakpoints and even create additional grids with different layout patterns.

<div class="row">
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
	<div class="grid-dynamic"><p><img src="http://placehold.it/350x350" title="Picture an emu"></p></div>
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

<hr>


## Typography

Kraken uses relative sizing (ems and %, not pixels) for everything.

The `body` has a base `font-size` of 100%, which is 16px on browsers with default font settings. All other sizes are in ems. Changing the `font-size` on the `body` element will adjust the typographical scale for the entire site.</p>

*New to relative sizing? [Learn more.](http://gomakethings.com/working-with-relative-sizing/)*

### Text Basics

Default text<br>
<span class="text-muted">Muted text</span><br>
<span class="text-small">Small text</span><br>
<span class="text-large">Large text</span><br>
<a href="#">Hyperlinks</a><br>
<strong>Bold</strong> and <em>italics</em>

```markup
Default text
<span class="text-muted">Muted text</span>
<span class="text-small">Small text</span>
<span class="text-large">Large text</span>
<a href="#">Hyperlinks</a>
<strong>Bold</strong> and <em>italics</em>
```

*Because Kraken uses relative sizing, you should always apply `.text-tall` and `.text-small` classes to a `<span>` element and not directly to a `<p>`. Otherwise, your spacing will get all messed up. The `.text-*` classes can be found in `_overrides.scss` for better cascade inheritance.*

<hr>


## Lists

Kraken includes styling for ordered, unordered, unstyled, and definition lists.

<div class="row">
	<div class="grid-third">
		<strong>Ordered</strong>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ol>
	</div>
	<div class="grid-third">
		<strong>Unordered</strong>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
	<div class="grid-third">
		<strong>Unstyled</strong>
		<ul class="list-unstyled">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
</div>

<div>
	<strong>Inline</strong>
	<ul class="list-inline">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

<dl>
	<dt>Definition List</dt>
	<dd>Encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</dd>

	<dt>Here's another term</dt>
	<dd>And here's the definition that would go with it.</dd>
</dl>

```markup
Ordered
<ol>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ol>

Unordered
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Unstyled
<ul class="list-unstyled">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Inline
<ul class="list-inline">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

<dl>
	<dt>Definition List</dt>
	<dd>Encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</dd>

	<dt>Here's another term</dt>
	<dd>And here's the definition that would go with it.</dd>
</dl>
```

*For semantic reasons, `.list-unstyled` and `.list-inline` should only be applied to unordered lists.*

<hr>


## Headings

Kraken includes styling for `h1` through `h6` headings.

# h1. Heading 1

<h2>h2. Heading 2</h2>

### h3. Heading 3

#### h4. Heading 4

##### h5. Heading 5

###### h6. Heading 6


```markup
<h1>h1. Heading 1</h1>
<h2>h2. Heading 2</h2>
<h3>h3. Heading 3</h3>
<h4>h4. Heading 4</h4>
<h5>h5. Heading 5</h5>
<h6>h6. Heading 6</h6>
```

### Semantic Heading Classes

All heading values can also be applied as classes. For example, if a heading should be an `h1` element semantically, but you would like it to be styled as an `h4` element, you can apply `class="h4"` to the `h1` element.

<h1 class="h4 text-left">This is an h1 heading that's styled as an h4 heading</h1>

```markup
<h1 class="h4 text-left">This is an h1 heading that's styled as an h4 heading</h1>
```

<hr>


## Quotes and Citations

> Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.
> <cite>- Someone Important</cite>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.

```markup
<blockquote>
	Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.
	<cite>- Someone Important</cite>
</blockquote>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.
```

<hr>


## Code

Inline code: `.js-example`.

```
/* Preformatted Text */
.js-example {
	color: #272727;
	background: #ffffff;
}
```

```markup
<p>Inline code: <code>.js-example</code></p>

<pre>
	<code>
		/* Preformatted Text */
		.js-example {
			color: #272727;
			background: #ffffff;
		}
	</code>
</pre>
```

You'll need to escape brackets contained in code by typing `&lt;` for `<` and `&gt;` for `>`. The syntax highlighting used in this documentation is provided by [Prism](http://prismjs.com/) by Lea Verou.

<hr>


## Lines

Add lines to your markup using the `<hr>` element.

<hr>


## Buttons

Button styles can be applied to anything with the `.btn` class applied. However, typically you'll want to apply these to only `<a>`, `<button>`, and `<input type="submit">` elements for the best rendering.

### Basic Buttons

<button class="btn">Button</button>
<button class="btn btn-secondary">Button Secondary</button>
<button class="btn btn-large">Button Large</button>

<button class="btn btn-block">Button Block</button>
<button class="btn btn-secondary btn-block">Button Block</button>

```markup
<button class="btn">Button</button>
<button class="btn btn-secondary">Button Secondary</button>
<button class="btn btn-large">Button Large</button>

<button class="btn btn-block">Button Block</button>
<button class="btn btn-secondary btn-block">Button Block</button>
```


### Active and Disabled Buttons

Use `.active` and `.disabled` classes to change the appearance of buttons&mdash;useful for creating apps.

<button class="btn active">Active</button>
<button class="btn btn-secondary active">Secondary Active</button>
<button class="btn disabled">Disabled</button>
<button class="btn btn-secondary disabled">Secondary Disabled</button>

```markup
<button class="btn active">Active</button>
<button class="btn btn-secondary active">Secondary Active</button>
<button class="btn disabled">Disabled</button>
<button class="btn btn-secondary disabled">Secondary Disabled</button>
```

<hr>


## Tables

Kraken includes simple, easy-to-read table styling.

<table>
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```markup
<table>
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>
```

### Condensed Table

Add the `.table-condensed` class for more compact tables.

<table class="table-condensed">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```markup
<table class="table-condensed">
	...
</table>
```

### Zebra Striping

Add zebra striping for easier readability with the `.table-striped` class.

<table class="table-striped">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```markup
<table class="table-striped">
	...
</table>
```

### Responsive Table

Add the `.table-responsive` class for tables that reformat on smaller viewports. Use the `[data-label]` data attribute to apply the label that displays on smaller viewports.

<table class="table-responsive">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="First Name">Peter</td>
			<td data-label="Last Name">Parker</td>
			<td data-label="Super Hero">Spiderman</td>
		</tr>
		<tr>
			<td data-label="First Name">Bruce</td>
			<td data-label="Last Name">Wayne</td>
			<td data-label="Super Hero">Batman</td>
		</tr>
		<tr>
			<td data-label="First Name">Clark</td>
			<td data-label="Last Name">Kent</td>
			<td data-label="Super Hero">Superman</td>
		</tr>
	</tbody>
</table>

```markup
<table class="table-responsive">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Super Hero</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="First Name">Peter</td>
            <td data-label="Last Name">Parker</td>
            <td data-label="Super Hero">Spiderman</td>
        </tr>
        ...
    </tbody>
</table>
```

### Combining Classes

Classes can be combined as needed.

<table class="table-condensed table-striped table-responsive">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="First Name">Peter</td>
			<td data-label="Last Name">Parker</td>
			<td data-label="Super Hero">Spiderman</td>
		</tr>
		<tr>
			<td data-label="First Name">Bruce</td>
			<td data-label="Last Name">Wayne</td>
			<td data-label="Super Hero">Batman</td>
		</tr>
		<tr>
			<td data-label="First Name">Clark</td>
			<td data-label="Last Name">Kent</td>
			<td data-label="Super Hero">Superman</td>
		</tr>
	</tbody>
</table>

```markup
<table class="table-condensed table-striped table-responsive">
    ...
</table>
```

<hr>


## Forms

Labels, legends and inputs are styled as full width block elements (with the exception of checkboxes and radio buttons).

### Basic Forms

<form>
	<label>Label</label>
	<input type="text">
	<label>
		<input type="checkbox">
		Option 1
	</label>
	<label>
		<input type="checkbox">
		Option 2
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 1
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 2
	</label>
	<select>
		<option>Select 1</option>
		<option>Select 2</option>
		<option>Select 3</option>
	</select>
	<textarea></textarea>
</form>

```markup
<form>
	<label>Label</label>
	<input type="text">
	<label>
		<input type="checkbox">
		Option 1
	</label>
	<label>
		<input type="checkbox">
		Option 2
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 1
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 2
	</label>
	<select>
		<option>Select 1</option>
		<option>Select 2</option>
		<option>Select 3</option>
	</select>
	<textarea></textarea>
</form>
```

*Wrap checkboxes and radio buttons inside a `<label>` to make them easier to click.*


### Form Layouts

Use the grid system to add structure to your forms.

<form>
	<div class="row">
		<div class="grid-fourth">
				<label>Name</label>
		</div>
		<div class="grid-three-fourths">
				<input type="text">
		</div>
	</div>
	<div class="row">
		<div class="grid-fourth">
				<label>Message</label>
		</div>
		<div class="grid-three-fourths">
				<textarea></textarea>
		</div>
	</div>
	<div class="row">
		<div class="grid-three-fourths offset-fourth">
			<button class="btn btn-blue">Submit</button>
		</div>
	</div>
</form>

```markup
<form>
	<div class="row">
		<div class="grid-fourth">
				<label>Name</label>
		</div>
		<div class="grid-three-fourths">
				<input type="text">
		</div>
	</div>
	<div class="row">
		<div class="grid-fourth">
				<label>Message</label>
		</div>
		<div class="grid-three-fourths">
				<textarea></textarea>
		</div>
	</div>
	<div class="row">
		<div class="grid-three-fourths offset-fourth">
			<button class="btn btn-blue">Submit</button>
		</div>
	</div>
</form>
```


### Condensed & Inline Inputs

For smaller forms, add the `.input-condensed` class to your input fields. For inline form elements, add the `.input-inline` class.

<form>
	<input type="text" class="input-inline" placeholder=".input-inline">
	<input type="text" class="input-condensed input-inline" placeholder=".input-condensed">
</form>

```markup
<form>
	<input type="text" class="input-inline">
	<input type="text" class="input-condensed input-inline">
</form>
```

### Search Forms

Apply special styling to search form elements using the `.input-search` and `.btn-search` classes. You'll also need to use the `.input-inline` class.

<form>
	<label class="screen-reader" for="search">Search this site</label>
	<input type="text" class="input-inline input-search no-margin-bottom" id="search" name="search" placeholder="Search this site..." value="">
	<button type="submit" class="btn-search" id="searchsubmit">
		<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 32 32"><path d="M31.008 27.23l-7.58-6.446c-.784-.705-1.622-1.03-2.3-.998C22.92 17.69 24 14.97 24 12 24 5.37 18.627 0 12 0S0 5.37 0 12c0 6.626 5.374 12 12 12 2.973 0 5.692-1.082 7.788-2.87-.03.676.293 1.514.998 2.298l6.447 7.58c1.105 1.226 2.908 1.33 4.008.23s.997-2.903-.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
		<span class="icon-fallback-text">Search</span>
	</button>
</form>

```markup
<input type="text" class="input-inline input-search no-margin-bottom" id="search" name="search" placeholder="Search this site..." value="">
<button type="submit" class="btn-search" id="searchsubmit">
	<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 32 32"><path d="M31.008 27.23l-7.58-6.446c-.784-.705-1.622-1.03-2.3-.998C22.92 17.69 24 14.97 24 12 24 5.37 18.627 0 12 0S0 5.37 0 12c0 6.626 5.374 12 12 12 2.973 0 5.692-1.082 7.788-2.87-.03.676.293 1.514.998 2.298l6.447 7.58c1.105 1.226 2.908 1.33 4.008.23s.997-2.903-.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
	<span class="icon-fallback-text">Search</span>
</button>
```

<hr>


## SVGs

Kraken includes SVG detection that adds an `.svg` class to the `html` element when supported. [The build system](setup.html#working-with-the-source-files) optimizes SVGs, and can also generate SVG sprites from individual SVG files.

Use the `.icon` class hide SVGs on unsupported browsers, and the `.icon-fallback-text` class to display fallback text in it's place.

### Inline SVGs

Open the SVG file in your text editor of choice, and then literally copy and paste the content from the file into your markup.

```markup
<svg class="icon">...</svg>
<span class="icon-fallback-text">Descriptive Text</span>
```

### SVG Sprites

Add the contents of your sprite to the markup in a hidden container directly after the opening `<body>` tag.

```markup
<div hidden>
    <svg>...</svg>
</div>
```

To use an icon, simply reference its ID using the `<use>` element.

```markup
<svg class="icon">
    <use xlink:href="#icon-logo"></use>
</svg>
<span class="icon-fallback-text">My Awesome Website</span>
```

#### External SVG sprites

Instead of embedding, you can link to the SVG as an external file. However, this method is not supported in Internet Explorer and requires you to use [svg4everybody](https://github.com/jonathantneal/svg4everybody), a JavaScript polyfill. I’ve also found that inlining the sprite results in faster peceived performance.

While this will gain you some browser caching benefits, I’ve found that perceived load times are better using the inlined sprite approach, as the icons are rendered immediately.

[Learn more about using SVGs.](http://gomakethings.com/using-svgs/)

<hr>


## Alignment, Spacing & Visibility

You can adjust text alignment, spacing, and visibility using a few simple CSS classes.

### Text Alignment

| Class                 | Alignment        |
|-----------------------|------------------|
| `.text-left`          | Left             |
| `.text-center`        | Centered         |
| `.text-right`         | Right            |
| `.text-right-medium`  | Right above 40em |


### Floats

| Class           | Float    |
|-----------------|----------|
| `.float-left`   | Left     |
| `.float-center` | Centered |
| `.float-right`  | Right    |

*Clear floats by wrapping floated content in a `<div>` with the `.clearfix` class.*

```markup
<div class="clearfix">
	<button class="float-right">Floated to the Right</button>
	<button>Not floated</button>
</div>
```

### Margins

| Class                  | Margin             |
|------------------------|--------------------|
| `.no-margin-top`       | top: `0`           |
| `.no-margin-bottom`    | bottom: `0`        |
| `.margin-top`          | top: `1.5625em`    |
| `.margin-bottom`       | bottom: `1.5625em` |
| `.margin-bottom-small` | bottom: `0.5em`    |
| `.margin-bottom-large` | bottom: `2em`      |


### Padding

| Class                   | padding            |
|-------------------------|--------------------|
| `.no-padding-top`       | top: `0`           |
| `.no-padding-bottom`    | bottom: `0`        |
| `.padding-top`          | top: `1.5625em`    |
| `.padding-top-small`    | top: `0.5em`       |
| `.padding-top-large`    | top: `2em`         |
| `.padding-bottom`       | bottom: `1.5625em` |
| `.padding-bottom-small` | bottom: `0.5em`    |
| `.padding-bottom-large` | bottom: `2em`      |


### Visibility

Hide content using the `[hidden]` attribute.

```markup
<div hidden>This is removed from the markup.</div>
```

If you have text that you don't want displayed on screen, but that should still be in the markup for screen readers (for example, a search form label), simply apply the `.screen-reader` class.</p>

```markup
<form>
    <label class="screen-reader">Search this site</label>
    <input type="text" placeholder="Search this site...">
    <input type="submit">
</form>
```

For visually hidden content that should become visible on focus (such as a [skip nav link](http://webaim.org/techniques/skipnav/) for sighted users navigating by keyboard), add the `.screen-reader-focusable` class.

```markup
<a class="screen-reader screen-reader-focusable" href="#main">Skip to content</a>
```