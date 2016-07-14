var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Our Revolution' });
});

router.post('/', function(req, res) {
  console.log(res.body);
  res.render('index', { title: 'Our Revolution' });
});

module.exports = router;
