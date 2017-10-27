/**
 * Form builder
 * Build By Rhuan Santos
 * Email: rhuansantosdev@gmail.com
 * @export
 * @class FormBuilder
 */

// html 5 valid type of inputs
const validInputs = ['button', 'checkbox', 'color', 'date ', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time ', 'url', 'week', 'select'];

exports.FormBuilder = class {
  constructor(_inputs) {
    this.inputs = _inputs;
    this.fields = [];
    this.render();
  }

  buildForm() {
    let input = null;
    this.inputs.forEach((el) => {
    // split by : then remove the last element that should be '}' from the object
      const type = el.split('type:')['1'].slice(0, -1);
      // Checking if the type of the input is valid or not
      if (validInputs.includes(type)) {
        input = `<label><input type="${type}" /></label>`;
        this.fields.push(input); 
      } else { 
        throw new Error(type + ' is not valid, please choose a valid HTML 5 Input type');
      }
    });
  }
  render() {
    const action = null;
    const form = `
    <form action="${action}">
    ${this.fields.join('')}
    </form>
    `;

    return form;
  }
};
