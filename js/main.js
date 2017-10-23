import { FormBuilder } from './core/formBuilder.js';


// when the page is ready
window.addEventListener('load', ()=>{
		let form = new FormBuilder('{phone=text}', '{type:select}');
		// print result
		document.getElementById("form").innerHTML = form.render();
});