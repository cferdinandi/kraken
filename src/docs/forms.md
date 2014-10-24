# Forms

Labels, legends and inputs are styled as full width block elements (with the exception of checkboxes and radio buttons).

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#basic-forms">Basic Forms</a></li>
		<li><a data-scroll href="#form-layouts">Form Layouts</a></li>
		<li><a data-scroll href="#condensed-and-inline-inputs">Condensed &amp; Inline Inputs</a></li>
	</ul>
</nav>

<h2 id="basic-forms">Basic Forms</h2>

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


<h2 id="form-layouts">Form Layouts</h2>

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


<h2 id="condensed-and-inline-inputs">Condensed &amp; Inline Inputs</h2>

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