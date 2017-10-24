# Form-Builder
### A package to simplify the way that you create your HTML forms!

## Installation

[![NPM Version][npm-image]][npm-url]

In a browser:
```html
<script src="formBuilder.js"></script>
```

Using npm:
```shell
$ npm install --save htmlform-builder
```

Browser example
```js
import { FormBuilder } from './core/formBuilder.js';

window.addEventListener('load', () => {
		let inputs = ['{type:text}', '{type:select}', '{type:number}'];
		let form = new FormBuilder('form', inputs);
});
```

Node example - using express
```js
const { FormBuilder } = require('htmlform-builder');

router.get('/', function(req, res, next) {

  let inputs = ['{type:text}', '{type:select}', '{type:number}'];
  let htmlForm = new FormBuilder(inputs);
  let form = htmlForm.render();

  res.render('index', {form});
  
});
```

## Roadmap
- Fix node version.
- accept placeholder, required and all of the input fields possibilities.


[npm-image]: https://img.shields.io/badge/npm-building-orange.svg
[npm-url]: https://www.npmjs.com/package/htmlform-builder