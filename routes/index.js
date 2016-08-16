var express = require('express');
var router = express.Router();
var pg = require('pg');
var cookieParser = require('cookie-parser');

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Our Revolution',
    description: "The next step for Bernie Sanders' movement is a new group called Our Revolution, which will fight to transform America and advance the progressive agenda that we believe in.",
    url: 'https://ourrevolution.com',
    imagePath: 'https://ourrevolution.com/img/fb.png',
    type: 'website'
  });
});

router.post('/', function(req, res) {
  var error = null;
  try {
    if (!req.body.email)
      error = 'Please provide an email address.';
    else if (!req.body.zip)
      error = 'Please provide a zip code.';
    else {
      pg.connect(process.env.POSTGRES_URL, function(err, client, done) {
        client.query('INSERT INTO subscribers(email, zip) values($1, $2)', [req.body.email, req.body.zip], function(err, result) {
          done();
          if (err) {
            console.error(err);
            error = 'Something went wrong - please try again.';
          }
        });
      });
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
  		error: error,
      description: "The next step for Bernie Sanders' movement is a new group called Our Revolution, which will fight to transform America and advance the progressive agenda that we believe in.",
      url: 'https://ourrevolution.com',
      imagePath: 'https://ourrevolution.com/img/fb.png',
      type: 'website'
  	});
  else
  	res.redirect('https://secure.actblue.com/contribute/page/ourrevolution?refcode=sp160725&amount=27.00');
});

router.get('/privacy-policy', function(req, res) {
  res.render('privacy-policy', {
    title: 'Our Revolution',
    description: "The next step for Bernie Sanders' movement is a new group called Our Revolution, which will fight to transform America and advance the progressive agenda that we believe in.",
    url: 'https://ourrevolution.com',
    imagePath: 'https://ourrevolution.com/img/fb.png',
    type: 'website'
  });
});

router.get('/jobs/graphic-designer', function(req, res) {
  res.redirect('/');
});

router.get('/jobs', function(req, res) {
  res.redirect('/');
});

router.get('/launch', function(req, res) {
  res.redirect('https://organize.berniesanders.com/events/create#type=our-revolution-kickoff');
});

module.exports = router;
