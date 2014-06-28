var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });
});
router.post('/', function(req, res) {
	if(req.body.username == 'admin' && req.body.password == 'password') {
  		req.session.loggedIn = true;
  		res.redirect('/home');
  	}
  	else {
 		 res.render('login', { title: 'Login', error: 'Invalid username or password.' });
 	}

});

module.exports = router;
