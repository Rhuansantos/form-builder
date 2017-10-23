/**
 * Form builder Packege
 * Build By Rhuan Santos
 * Email: rhuansantosdev@gmail.com
 * @export
 * @class FormBuilder
 */


 let validInputs = [
	'button','checkbox','color','date ','datetime-local','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time ','url','week',
]
 
export class FormBuilder{

	constructor(){
		this.fields = [];
		this.type = [];
		this.buildForm();
	}

	buildForm(){
		
		this.type = 'aa';

		//Checking if the type of the input is valid or not
		if(validInputs.includes(this.type)){
			console.log('is valid');
		}else{
			console.log('is not valid');
		}

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