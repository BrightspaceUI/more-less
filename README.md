# d2l-more-less

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for D2L's more/less control.

For further information on this and other D2L UI components, visit the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).


## Installation

```sh
bower install d2l-more-less
```

## Usage

Import d2l-more-less.html:
```html
<head>
	<link rel="import" href="../d2l-more-less/d2l-more-less.html">
</head>
```

You can now wrap a `d2l-more-less` element around any content:
```html
<d2l-more-less>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, ligula vulputate mattis aliquam, arcu arcu porttitor urna, ut pretium neque lorem venenatis elit. Fusce rutrum, nunc a tempor dictum, elit est lobortis libero, at lobortis nisl libero id enim. Vestibulum in lorem sed metus ornare faucibus a ac massa. Donec sodales massa vitae lacus blandit, at placerat erat blandit. Aenean consequat sapien ac viverra ornare. Nullam sem felis, ultrices nec egestas ut, mollis ac arcu. Nunc sit amet aliquam neque, fringilla lobortis justo. Sed pharetra, ipsum ut tempor tempor, sem risus tincidunt nisl, vitae feugiat lectus lorem a urna. In sit amet lobortis tellus. Sed suscipit magna et aliquam consequat. Pellentesque rhoncus ut dui at semper. Mauris vel ante euismod, tempus nunc eu, pellentesque lacus. Mauris consectetur ante eget consequat tempus.</p>
</d2l-more-less>
```

### Attributes

#### `height` _(4em)_

The `height` attribute sets the maximum height of the **content** when in "less" mode. The `d2l-more-less` element itself will take up additional vertical space in order to provide the fading effect and the more/less controls themselves. If the content is not at least this height `d2l-more-less` will become inactive and add nothing to the page.
```html
<d2l-more-less height="10rem">
	<!-- content -->
</d2l-more-less>
```

---

#### `expanded`

The `expanded` attribute will be present when `d2l-more-less` is in "more" mode. The element can also be made expanded by default by using this attriubte.
```html
<d2l-more-less expanded>
	<!-- content -->
</d2l-more-less>
```

---

#### `blur-color` _(#fff)_

The blur-color atttribute will control the gradient colour of the blurring effect. It must be a properly formatted hex colour code, either in shorthand or longform.

```html
<d2l-more-less blur-color="#f00">
	<!-- content -->
</d2l-more-less>
```
