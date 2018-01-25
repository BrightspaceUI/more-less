# d2l-more-less
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/more-less)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component for D2L's more/less control.

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

```shell
bower install d2l-more-less
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-more-less.html`:

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="../d2l-more-less/d2l-more-less.html">
</head>
```

You can now wrap a `d2l-more-less` element around any content:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-more-less.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-more-less>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, ligula vulputate mattis aliquam, arcu arcu porttitor urna, ut pretium neque lorem venenatis elit. Fusce rutrum, nunc a tempor dictum, elit est lobortis libero, at lobortis nisl libero id enim. Vestibulum in lorem sed metus ornare faucibus a ac massa. Donec sodales massa vitae lacus blandit, at placerat erat blandit. Aenean consequat sapien ac viverra ornare. Nullam sem felis, ultrices nec egestas ut, mollis ac arcu. Nunc sit amet aliquam neque, fringilla lobortis justo. Sed pharetra, ipsum ut tempor tempor, sem risus tincidunt nisl, vitae feugiat lectus lorem a urna. In sit amet lobortis tellus. Sed suscipit magna et aliquam consequat. Pellentesque rhoncus ut dui at semper. Mauris vel ante euismod, tempus nunc eu, pellentesque lacus. Mauris consectetur ante eget consequat tempus.</p>
</d2l-more-less>
```

### Attributes

#### `height` _(4em)_

The `height` attribute sets the maximum height of the **content** when in "less" mode. The `d2l-more-less` element itself will take up additional vertical space in order to provide the fading effect and the more/less controls themselves. If the content is not at least this height, `d2l-more-less` will become inactive and add nothing to the page.

```html
<d2l-more-less height="10rem">
	<!-- content -->
</d2l-more-less>
```

#### `expanded`

The `expanded` attribute will be present when `d2l-more-less` is in "more" mode. The element can also be made expanded by default by using this attribute.

```html
<d2l-more-less expanded>
	<!-- content -->
</d2l-more-less>
```

#### `blur-color` _(#fff)_

The blur-color attribute will control the gradient color of the blurring effect. It must be a properly formatted HEX color code, either in shorthand or longform.

```html
<d2l-more-less blur-color="#f00">
	<!-- content -->
</d2l-more-less>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

[bower-url]: http://bower.io/search/?q=d2l-more-less
[bower-image]: https://badge.fury.io/bo//d2l-more-less.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/more-less
[ci-image]: https://travis-ci.org/BrightspaceUI/more-less.svg
