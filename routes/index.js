var express = require('express');
var router = express.Router();
var pg = require('pg');

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
  var email = req.body.email;
  var zip = req.body.zip;

  var error = null;
  if (!req.body.email)
  	error = 'Please provide an email address.';
  else if (!req.body.zip)
  	error = 'Please provide a zip code.';
  else {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
      client.query('INSERT INTO subscribers(email, zip) values($1, $2)', [req.body.email, req.body.zip], function(err, result) {
        done();
        if (err) {
          console.error(err);
          error = 'Something went wrong - please try again.';
        }
      });
    });

    return res.render('success', {
    	title: 'Our Revolution',
    	email: req.body.email
    });
  }

  res.render('index', {
  	title: 'Our Revolution',
  	email: req.body.email,
  	zip: req.body.zip,
  	error: error
  });
});

module.exports = router;
