var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {
  	title: 'Our Revolution',
  	description: 'Join us for the future of our political movement.',
  	url: 'ourrevolution.com',
  	imagePath: '/img/fb.png',
	type: 'website'  	
  });
});

module.exports = router;
