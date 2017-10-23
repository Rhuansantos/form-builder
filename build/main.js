(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Form builder Packege
 * Build By Rhuan Santos
 * Email: rhuansantosdev@gmail.com
 * @export
 * @class FormBuilder
 */

var validInputs = ['button', 'checkbox', 'color', 'date ', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time ', 'url', 'week'];

var FormBuilder = exports.FormBuilder = function () {
	function FormBuilder() {
		_classCallCheck(this, FormBuilder);

		for (var _len = arguments.length, _inputs = Array(_len), _key = 0; _key < _len; _key++) {
			_inputs[_key] = arguments[_key];
		}

		this.inputs = _inputs;

		console.log(this.inputs);

		this.fields = [];
		this.type = [];
		this.buildForm();
	}

	_createClass(FormBuilder, [{
		key: 'buildForm',
		value: function buildForm() {

			this.type = 'color';
			var input = null;

			//Checking if the type of the input is valid or not
			if (validInputs.includes(this.type)) {
				console.log('is valid');

				this.inputs.forEach(function (element) {
					console.log(element);
				}, this);

				input = '\n\t\t\t\t<input type="' + this.type + '">\n\t\t\t';
			} else {
				console.log('is not valid');
			}

			this.fields = input;

			// If is the last item in the array, print it
			// this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			var action = null;

			var form = '\n\t\t\t<form action="">\n\t\t\t\t' + this.fields + '\n\t\t\t</form>\n\t\t';

			return form;
		}
	}]);

	return FormBuilder;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _formBuilder = require('./core/formBuilder.js');

// when the page is ready
window.addEventListener('load', function () {
		var form = new _formBuilder.FormBuilder('{phone=text}', '{type:select}');
		// print result
		document.getElementById("form").innerHTML = form.render();
});

},{"./core/formBuilder.js":1}]},{},[2]);
