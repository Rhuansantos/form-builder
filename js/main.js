import { FormBuilder } from './core/formBuilder.js';


// when the page is ready
window.addEventListener('load', ()=>{
		console.log('ready');

		let form = new FormBuilder.return();

		console.log(form);
});