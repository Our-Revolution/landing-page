var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
res.render('index', {
    title: 'Our Revolution',
    description: 'Join us for the future of our political movement.',
    url: 'ourrevolution.com',
    imagePath: '/img/fb.png',
    type: 'website'
  });
});

router.post('/', function(req, res) {
  console.log(req.body);

  res.render('index', {
  	title: 'Our Revolution',
  	email: req.body.email,
  	zip: req.body.zip,
  	error: 'There was an issue with your submission!!'
  });
});

module.exports = router;
