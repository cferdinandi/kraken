# Alignment, Spacing & Visibility

You can adjust text alignment, spacing, and visibility using a few simple CSS classes.

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#text-alignment">Text Alignment</a></li>
		<li><a data-scroll href="#floats">Floats</a></li>
		<li><a data-scroll href="#margins">Margins</a></li>
		<li><a data-scroll href="#padding">Padding</a></li>
		<li><a data-scroll href="#visibility">Visibility</a></li>
	</ul>
</nav>


<h2 id="text-alignment">Text Alignment</h2>

| Class          | Alignment |
|----------------|-----------|
| `.text-left`   | Left      |
| `.text-center` | Centered  |
| `.text-right`  | Right     |


<h2 id="floats">Floats</h2>

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


<h2 id="margins">Margins</h2>

| Class                  | Margin             |
|------------------------|--------------------|
| `.no-margin`           | all: `0`           |
| `.no-margin-top`       | top: `0`           |
| `.no-margin-bottom`    | bottom: `0`        |
| `.margin-top`          | top: `1.5625em`    |
| `.margin-bottom`       | bottom: `1.5625em` |
| `.margin-bottom-small` | bottom: `0.5em`    |
| `.margin-bottom-large` | bottom: `2em`      |


<h2 id="padding">Padding</h2>

| Class                   | padding            |
|-------------------------|--------------------|
| `.no-padding`           | all: `0`           |
| `.no-padding-top`       | top: `0`           |
| `.no-padding-bottom`    | bottom: `0`        |
| `.padding-top`          | top: `1.5625em`    |
| `.padding-top-small`    | top: `0.5em`       |
| `.padding-top-large`    | top: `2em`         |
| `.padding-bottom`       | bottom: `1.5625em` |
| `.padding-bottom-small` | bottom: `0.5em`    |
| `.padding-bottom-large` | bottom: `2em`      |


<h2 id="visibility">Visibility</h2>

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