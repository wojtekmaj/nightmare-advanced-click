[![npm](https://img.shields.io/npm/v/nightmare-advanced-click.svg)](https://www.npmjs.com/package/nightmare-advanced-click) ![downloads](https://img.shields.io/npm/dt/nightmare-advanced-click.svg) [![CI](https://github.com/wojtekmaj/nightmare-advanced-click/workflows/CI/badge.svg)](https://github.com/wojtekmaj/nightmare-advanced-click/actions) ![dependencies](https://img.shields.io/david/wojtekmaj/nightmare-advanced-click.svg
) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/nightmare-advanced-click.svg)

# nightmare-advanced-click

Extends [Nightmare](http://github.com/segmentio/nightmare) with .rightClick(), .middleClick(), .ctrlClick() and other actions.

## tl;dr
* Install by executing `npm install nightmare-advanced-click` or `yarn add nightmare-advanced-click`.
* Import by adding `require('nightmare-advanced-click')`.
* Use by adding e.g. `.middleClick(selector)` to your Nightmare chain.

## Getting started

### Installation

Add nigthmare-wait-for-url by executing `npm install nightmare-advanced-click` or `yarn add nightmare-advanced-click`.

### Usage

Here's an example of basic usage:

```js
const Nightmare = require('nightmare');
require('nightmare-advanced-click');

const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://duckduckgo.com/')
  .type('#search_form_input_homepage', 'Alexander the great')
  .ctrlClick('#search_button_homepage');
```

### .middleClick(string)

Clicks a given element with a middle button.

### .rightClick(string)

Clicks a given element with a right button.

### .ctrlClick(string)

Clicks a given element with a left button while holding <kbd>Ctrl</kbd> key.

### .altClick(string)

Clicks a given element with a left button while holding <kbd>Alt</kbd> key.

### .shiftClick(string)

Clicks a given element with a left button while holding <kbd>⇧ Shift</kbd> key.

### .cmdClick(string)

Clicks a given element with a left button while holding <kbd>⌘ Command</kbd> key.

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
