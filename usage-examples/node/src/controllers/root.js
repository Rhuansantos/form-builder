const express = require('express');
const router = express.Router();
const { FormBuilder } = require('htmlform-builder');


module.exports = function(app) {
  app.use('/', router);
}

router.get('/', function(req, res, next) {

  let inputs = ['{type:text}', '{type:select}', '{type:number}'];
  let htmlForm = new FormBuilder(inputs);
  let form = htmlForm.render();

  res.render('index', {form});
  
});