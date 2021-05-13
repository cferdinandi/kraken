# Components

## Grid

The `.container` class centers content on the page and restricts it to a maximum width.

```html
<div class="container">
	<p>The <code>.container</code> class centers content on the page and restricts it to a maximum width.</p>
</div>
```

Kraken also includes a simple, mobile-first grid system built with CSS Grid.

It's designed to be a starting point you can modify and build on (or delete altogether) depending on your project. Modify as needed.

### Fraction-based layouts

Kraken uses fraction-based grids, because it makes the math of grid-based layouts easier.

To create a grid, add a `<div>` with a `.row` class. You can create grids within a row by creating `<div>` elements with the `.grid-*` class.

<div class="row">
	<div class="grid-third grid-highlight">.grid-third</div>
	<div class="grid-two-thirds grid-highlight">.grid-two-thirds</div>
</div>

<div class="row">
	<div class="grid-fourth grid-highlight">.grid-fourth</div>
	<div class="grid-three-fourths grid-highlight">.grid-three-fourths</div>
</div>

<div class="row">
	<div class="grid-half grid-highlight">.grid-half</div>
	<div class="grid-half grid-highlight">.grid-half</div>
</div>

<div class="row">
	<div class="grid-fourth grid-highlight">.grid-fourth</div>
	<div class="grid-half grid-highlight">.grid-half</div>
	<div class="grid-fourth grid-highlight">.grid-fourth</div>
</div>

```html
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
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-half">.grid-half</div>
	<div class="grid-fourth">.grid-fourth</div>
</div>
```

### More or less space between columns

You can double the space between columns in a grid by adding the `.row-gap-large` class, or remove it altogether by adding the `.row-no-gap` class.

<div class="row row-gap-large">
	<div class="grid-third grid-highlight">.grid-third</div>
	<div class="grid-third grid-highlight">.grid-third</div>
	<div class="grid-third grid-highlight">.grid-third</div>
</div>

<div class="row row-no-gap">
	<div class="grid-third grid-highlight">.grid-third</div>
	<div class="grid-third grid-highlight">.grid-third</div>
	<div class="grid-third grid-highlight">.grid-third</div>
</div>

```html
<div class="row row-gap-large">
	<div class="grid-third">.grid-third</div>
	<div class="grid-third">.grid-third</div>
	<div class="grid-third">.grid-third</div>
</div>

<div class="row row-no-gap">
	<div class="grid-third">.grid-third</div>
	<div class="grid-third">.grid-third</div>
	<div class="grid-third">.grid-third</div>
</div>
```

### Automatically scaling grids

The `.row-auto` class will scale the content to fit whatever space is available.

<div class="row row-auto">
	<div class="grid-highlight">Auto Scales</div>
	<div class="grid-highlight">Auto Scales</div>
	<div class="grid-highlight">Auto Scales</div>
	<div class="grid-highlight">Auto Scales</div>
	<div class="grid-highlight">Auto Scales</div>
</div>

```html
<div class="row row-auto">
	<div>Auto Scales</div>
	<div>Auto Scales</div>
	<div>Auto Scales</div>
	<div>Auto Scales</div>
	<div>Auto Scales</div>
</div>
```

### Content Choreography

You can flip the order of grid items on bigger screens with a series of helper classes.

Add the `.grid-start-first` class to move content to the beginning of a row. Use `.grid-start-{fraction}` classes start content at a specific spot in a grid.

<div class="row">
	<div class="grid-third grid-highlight">1</div>
	<div class="grid-third grid-start-first grid-highlight">2</div>
	<div class="grid-third grid-highlight">3</div>
</div>

<div class="row">
	<div class="grid-third grid-highlight">1</div>
	<div class="grid-third grid-start-two-thirds grid-highlight">2</div>
	<div class="grid-third grid-highlight">3</div>
</div>

<div class="row">
	<div class="grid-third grig-start-two-thirds grid-highlight">1</div>
	<div class="grid-third grid-start-third grid-highlight">2</div>
	<div class="grid-third grid-start-first grid-highlight">3</div>
</div>

```html
<div class="row">
	<div class="grid-third">1</div>
	<div class="grid-third grid-start-first">2</div>
	<div class="grid-third">3</div>
</div>

<div class="row">
	<div class="grid-third">1</div>
	<div class="grid-third grid-start-two-thirds">2</div>
	<div class="grid-third">3</div>
</div>

<div class="row">
	<div class="grid-third grig-start-two-thirds">1</div>
	<div class="grid-third grid-start-third">2</div>
	<div class="grid-third grid-start-first">3</div>
</div>
```

## Typography

Kraken uses relative sizing (ems and %, not pixels) for everything.

The `body` has a base `font-size` of `100%`, which is `16px` on browsers with default font settings. All other sizes are in ems. Changing the `font-size` on the `body` element will adjust the typographical scale for the entire site.</p>

*New to relative sizing? [Learn more.](http://gomakethings.com/working-with-relative-sizing/)*

### Text Basics

Default text<br>
<span class="text-muted">Muted text</span><br>
<span class="text-small">Small text</span><br>
<span class="text-large">Large text</span><br>
<a href="#">Hyperlinks</a><br>
<strong>Bold</strong>, <em>italics</em>, and <del>strikethrough</del><br>
<mark>Highlighted text</mark>

```html
Default text
<span class="text-muted">Muted text</span>
<span class="text-small">Small text</span>
<span class="text-large">Large text</span>
<a href="#">Hyperlinks</a>
<strong>Bold</strong>, <em>italics</em>, and <del>strikethrough</del>
<mark>Highlighted text</mark>
```

_Because Kraken uses relative sizing, you should always apply `.text-large` and `.text-small` classes to a `span` element and not directly to a `p`. Otherwise, your spacing will get all messed up. The `.text-*` classes can be found in `_overrides.scss` for better cascade inheritance._

---


## Lists

Kraken includes styling for ordered, unordered, unstyled, inline, and definition lists.

<div class="row-thirds">
	<div>
		<strong>Ordered</strong>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ol>
	</div>
	<div>
		<strong>Unordered</strong>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
	<div>
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

```html
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

---


## Headings

Kraken includes styling for `h1` through `h6` headings.

<h1>h1. Heading 1</h1>
<h2>h2. Heading 2</h2>
<h3>h3. Heading 3</h3>
<h4>h4. Heading 4</h4>
<h5>h5. Heading 5</h5>
<h6>h6. Heading 6</h6>


```html
<h1>h1. Heading 1</h1>
<h2>h2. Heading 2</h2>
<h3>h3. Heading 3</h3>
<h4>h4. Heading 4</h4>
<h5>h5. Heading 5</h5>
<h6>h6. Heading 6</h6>
```

### Semantic Heading Classes

All heading values can also be applied as classes. For example, if a heading should be an `h1` element semantically, but you would like it to be styled as an `h4` element, you can apply `class="h4"` to the `h1` element.

<h1 class="h4">This is an h1 heading that's styled as an h4 heading</h1>

```html
<h1 class="h4">This is an h1 heading that's styled as an h4 heading</h1>
```

---


## Quotes & Citations

<blockquote>
	Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.
	<cite>- Someone Important</cite>
</blockquote>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.

```html
<blockquote>
	Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.
	<cite>- Someone Important</cite>
</blockquote>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.
```

---


## Code

Inline code: `.js-example`.

```
/* Preformatted Text */
.js-example {
	color: #272727;
	background: #ffffff;
}
```

```html
<p>Inline code: <code>.js-example</code></p>

<pre><code>/* Preformatted Text */
.js-example {
	color: #272727;
	background: #ffffff;
}</code></pre>
```

You'll need to escape brackets contained in code by typing `&lt;` for `<` and `&gt;` for `>`. The syntax highlighting used in this documentation is provided by [Prism](http://prismjs.com/) by Lea Verou.

---


## Lines

Add lines to your markup using the `<hr>` element.

---


## Buttons

Button styles can be applied to anything with the `.btn` class applied. However, typically you'll want to apply these to only `a`, `button`, and `<input type="submit">` elements for the best rendering.

### Basic Buttons

<button class="btn">Button</button>
<button class="btn btn-secondary">Button Secondary</button>
<button class="btn btn-large">Button Large</button>

<button class="btn btn-block">Button Block</button>
<button class="btn btn-secondary btn-block">Button Block</button>

```html
<button class="btn">Button</button>
<button class="btn btn-secondary">Button Secondary</button>
<button class="btn btn-large">Button Large</button>

<button class="btn btn-block">Button Block</button>
<button class="btn btn-secondary btn-block">Button Block</button>

<button class="btn active">Button Active</button>
<button class="btn btn-secondary active">Button Secondary Active</button>

<button class="btn" disabled>Button Disabled</button>
<button class="btn btn-secondary" disabled>Button Secondary Disabled</button>
```


### Disabled Buttons

Use the `[disabled]` attribute to change the appearance of buttons&mdash;useful for creating apps.

<button class="btn" disabled>Disabled</button>
<button class="btn btn-secondary" disabled>Secondary Disabled</button>

```html
<button class="btn" disabled>Disabled</button>
<button class="btn btn-secondary" disabled>Secondary Disabled</button>
```

---


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

```html
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

```html
<table class="table-condensed">
	<!-- Your table content... -->
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

```html
<table class="table-striped">
	<!-- Your table content... -->
</table>
```

### Combining Classes

Classes can be combined as needed.

<table class="table-condensed table-striped">
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

```html
<table class="table-condensed table-striped">
    <!-- Your table content... -->
</table>
```

---


## Forms

Labels, legends and inputs are styled as full width block elements (with the exception of checkboxes and radio buttons).

### Basic Forms

<form>
	<label for="input">Label</label>
	<input type="text" id="input">
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
		Option A
	</label>
	<label>
		<input type="radio" name="radioset">
		Option B
	</label>
	<label for="select">Select Menu</label>
	<select id="select">
		<option>Select 1</option>
		<option>Select 2</option>
		<option>Select 3</option>
	</select>
	<label for="select" for="textarea">Textarea</label>
	<textarea id="text-area"></textarea>
</form>

```html
<form>
	<label for="input">Label</label>
	<input type="text" id="input">

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
		Option A
	</label>
	<label>
		<input type="radio" name="radioset">
		Option B
	</label>

	<label for="select">Select Menu</label>
	<select id="select">
		<option>Select 1</option>
		<option>Select 2</option>
		<option>Select 3</option>
	</select>

	<label for="select" for="textarea">Select Menu</label>
	<textarea id="text-area"></textarea>
</form>
```

*Wrap checkboxes and radio buttons inside a `label` to make them easier to click.*

### Condensed & Inline Inputs

For smaller forms, add the `.input-condensed` class to your input fields. For inline form elements, add the `.input-inline` class.

<form>
	<input type="text" class="input-inline" placeholder=".input-inline">
	<input type="text" class="input-condensed input-inline" placeholder=".input-condensed">
</form>

```html
<form>
	<input type="text" class="input-inline">
	<input type="text" class="input-condensed input-inline">
</form>
```

### Search Forms

Apply special styling to search form elements using the `.input-search` and `.btn-search` classes. You'll also need to use the `.input-inline` class.

<form>
	<label class="visually-hidden" for="search">Search this site</label>
	<input type="text" class="input-inline input-search no-margin-bottom" id="search" name="search" placeholder="Your search terms..." value="">
	<button type="submit" class="btn-search" id="searchsubmit">
		<svg xmlns="http://www.w3.org/2000/svg" style="height:1em;width:1em;" viewBox="0 0 32 32" aria-describedby="search-button-title"><title id="search-button-title">Search</title><path fill="currentColor" d="M31.008 27.23l-7.58-6.446c-.784-.705-1.622-1.03-2.3-.998C22.92 17.69 24 14.97 24 12 24 5.37 18.627 0 12 0S0 5.37 0 12c0 6.626 5.374 12 12 12 2.973 0 5.692-1.082 7.788-2.87-.03.676.293 1.514.998 2.298l6.447 7.58c1.105 1.226 2.908 1.33 4.008.23s.997-2.903-.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
	</button>
</form>

```html
<form>
	<label class="visually-hidden" for="search">Search this site</label>
	<input type="text" class="input-inline input-search no-margin-bottom" id="search" name="search" placeholder="Your search terms..." value="">
	<button type="submit" class="btn-search" id="searchsubmit">
		<svg xmlns="http://www.w3.org/2000/svg" style="height:1em;width:1em;" viewBox="0 0 32 32" aria-describedby="search-button-title"><title id="search-button-title">Search</title><path fill="currentColor" d="M31.008 27.23l-7.58-6.446c-.784-.705-1.622-1.03-2.3-.998C22.92 17.69 24 14.97 24 12 24 5.37 18.627 0 12 0S0 5.37 0 12c0 6.626 5.374 12 12 12 2.973 0 5.692-1.082 7.788-2.87-.03.676.293 1.514.998 2.298l6.447 7.58c1.105 1.226 2.908 1.33 4.008.23s.997-2.903-.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
	</button>
</form>
```

---


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

*Clear floats by wrapping floated content in a `div` with the `.clearfix` class.*

```html
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

```html
<div hidden>This is removed from the markup.</div>
```

If you have text that you don't want displayed on screen, but that should still be in the markup for screen readers (for example, a search form label), simply apply the `.visually-hidden` class.</p>

```html
<form>
    <label class="visually-hidden">Search this site</label>
    <input type="text" placeholder="Search this site...">
    <input type="submit">
</form>
```

For visually hidden content that should become visible on focus (such as a [skip nav link](http://webaim.org/techniques/skipnav/) for sighted users navigating by keyboard), add the `.focusable` class.

```html
<a class="visually-hidden focusable" href="#main">Skip to content</a>
```

## Tabindex & Focus Styles

Focusable elements should *always* have `:focus` styles on them. You can customize them, but don't remove them altogether.

If you need to programmatically add focus to an element that's not normally focusable (like a `div`), you need to give it a `tabindex` attribute of `-1`. However, this also applies `:focus` styles, which are likely not desired or needed in these rare edge cases.

Kraken removes the default outline from items with `[tabindex="-1"]`.

```html
<a class="visually-hidden focusable" href="#main">Skip to content</a>
...
<main id="main" tabindex="-1">
	...
</main>
```