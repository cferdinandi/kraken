# Buttons

Button styles can be applied to anything with the `.btn` class applied. However, typically you'll want to apply these to only `<a>`, `<button>`, and `<input type="submit">` elements for the best rendering.

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#basic-buttons">Basic Buttons</a></li>
		<li><a data-scroll href="#active-and-disabled-buttons">Active and Disabled Buttons</a></li>
	</ul>
</nav>


<h2 id="basic-buttons">Basic Buttons</h2>

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


<h2 id="active-and-disabled-buttons">Active and Disabled Buttons</h2>

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