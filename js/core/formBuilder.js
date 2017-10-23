/**
 * Form builder Packege
 * Build By Rhuan Santos
 * Email: rhuansantosdev@gmail.com
 * @export
 * @class FormBuilder
 */


 const validInputs = ['button','checkbox','color','date ','datetime-local','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time ','url','week'];
 
export class FormBuilder{

	constructor(..._inputs){
		this.inputs = _inputs;

		console.log(this.inputs);

		this.fields = [];
		this.type = [];
		this.buildForm();
	}

	buildForm(){
		
		this.type = 'color';
		let input = null;

		//Checking if the type of the input is valid or not
		if(validInputs.includes(this.type)){
			console.log('is valid');

			this.inputs.forEach(function(element) {
				console.log(element);
			}, this);

			input = `
				<input type="${this.type}">
			`;
		}else{
			console.log('is not valid');
		}

		this.fields = input;

		// If is the last item in the array, print it
		// this.render();

	}
	 
	render(){
		let action = null;
			
		let form = `
			<form action="">
				${this.fields}
			</form>
		`;

		return form;
	}
}