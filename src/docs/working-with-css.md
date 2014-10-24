# Working with CSS

If you're more comfortable working in CSS, you can modify the `main.css` stylesheet in the `dist` > `css` directory.

<nav>
	<strong>In this section:</strong>
	<ul>
		<li><a data-scroll href="#adjusting-settings">Adjusting Settings</a></li>
	</ul>
</nav>

<h2 id="adjusting-settings">Adjusting Settings</h2>

<dl>
	<dt>Page Width</dt>
	<dd>The <code>.container</code> class sets the width for page content. Adjust the <code>max-width</code> property to set the maximum width of the page.</dd>
</dl>

<dl>
	<dt>Font Stack</dt>
	<dd>The <code>body</code> element sets the typeface for the entire set. By default, the font stack is Helvetica Neue, Arial, and sans-serif. The two exceptions are <code>pre</code> and <code>code</code> elements, which use a monospace stack. Adjust as desired.</dd>
</dl>

<dl>
	<dt>Typographic Scale</dt>
	<dd>Kraken uses a <a href="http://lamb.cc/typograph/">fluid typographic scale</a>. You can scale the size of all site elements proportionately by adjusting the <code>font-size</code> property on the body element, which is set to 100% by default (and 125% on screens above 80em).</dd>
</dl>

<dl>
	<dt>Colors (used throughout)</dt>
	<dd>Primary: <code style="color: #ffffff; background-color: #0088cc;">#0088cc</code><br>
	Black: <code style="color: #ffffff; background-color: #272727;">#272727</code><br>
	White: <code style="color: #272727; background-color: #ffffff;">#ffffff</code><br>
	Dark Gray: <code style="color: #ffffff; background-color: #808080;">#808080</code><br>
	Light Gray: <code style="color: #272727; background-color:#e5e5e5 ;">#e5e5e5</code></dd>
</dl>

<dl>
	<dt>Breakpoints (used throughout)</dt>
	<dd>Extra Small: 20em<br>
	Small: 30em<br>
	Medium: 40em<br>
	Large: 60em<br>
	Extra Large: 80em</dd>
</dl>