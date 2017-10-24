import { FormBuilder } from './core/formBuilder.js';


// when the page is ready
window.addEventListener('load', ()=>{
		let inputs = ['{type:1}', '{type:select}', '{type:number}'];
		let form = new FormBuilder('form', inputs);
	
		// // print result
		// document.getElementById("form").innerHTML = form.render();
});