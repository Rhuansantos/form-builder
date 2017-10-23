import { FormBuilder } from './core/formBuilder.js';


// when the page is ready
window.addEventListener('load', ()=>{
		let inputs = ['{phone:text}', '{type:select}', '{type:text}'];
		let form = new FormBuilder(inputs);
		// print result
		document.getElementById("form").innerHTML = form.render();
});