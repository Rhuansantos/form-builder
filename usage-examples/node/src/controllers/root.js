const express = require('express');
const router = express.Router();
const form = require('../../../../index');


module.exports = function(app) {
  app.use('/', router);
}

router.get('/', function(req, res, next) {
  res.render('index');
});