var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.loggedIn)
  		res.render('index', { title: 'Home Page' });
  	else
  		res.redirect('/');
});

router.post( '/', function(req, res) {
		console.log(req.body);
		res.redirect('/home');
});


module.exports = router;
