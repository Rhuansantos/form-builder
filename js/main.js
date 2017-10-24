import { FormBuilder } from './core/formBuilder.js';


// when the page is ready
window.addEventListener('load', ()=>{
		let inputs = ['{type:text}', '{type:select}', '{type:number}'];
		let form = new FormBuilder('form', inputs);
});