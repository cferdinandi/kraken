# Typography

Kraken uses relative sizing (ems and %, not pixels) for everything.

The `body` has a base `font-size` of 100%, which is 16px on browsers with default font settings. All other sizes are in ems. Changing the `font-size` on the `body` element will adjust the typographical scale for the entire site.</p>

*New to relative sizing? [Learn more.](http://gomakethings.com/working-with-relative-sizing/)*

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#text-basics">Text Basics</a></li>
		<li><a data-scroll href="#lists">Lists</a></li>
		<li><a data-scroll href="#headings">Headings</a></li>
		<li><a data-scroll href="#quotes-and-citations">Quotes &amp; Citations</a></li>
		<li><a data-scroll href="#code">Code</a></li>
		<li><a data-scroll href="#lines">Lines</a></li>
	</ul>
</nav>


<h2 id="text-basics">Text Basics</h2>

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


<h2 id="lists">Lists</h2>

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
</dl>
```

*For semantic reasons, `.list-unstyled` and `.list-inline` should only be applied to unordered lists.*


<h2 id="headings">Headings</h2>

Kraken includes styling for `h1` through `h6` headings.

# h1. Heading 1

## h2. Heading 2

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


<h2 id="quotes-and-citations">Quotes and Citations</h2>

> Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.

```markup
<blockquote>Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.</blockquote>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.
```


<h2 id="code">Code</h2>

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


<h2 id="lines">Lines</h2>

Add lines to your markup using the `<hr>` element.