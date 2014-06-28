var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   if(req.session.loggedIn)
  		res.render('profile', { title: 'Profile' });
  	else
  		res.redirect('/');
});

router.post('/', function(req, res) {
	
});

module.exports = router;
