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

  var error = null;
  try {
  	if (!req.body.email)
  		error = 'Please provide an email address.';
  	else if (!req.body.zip)
  		error = 'Please provide a zip code.';
  	else {
  	  // write to DB
  	}
  }
  catch(ex) {
  	error = ex.message;
  }

  if (error)
  	res.render('index', {
			title: 'Our Revolution',
			email: req.body.email,
			zip: req.body.zip,
			error: error
		});
  else
		res.render('success', {
    	title: 'Our Revolution',
    	email: req.body.email
    });
});

module.exports = router;
