var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   if(req.session.loggedIn)
  		res.render('show', { title: 'Event Details' });
  	else
  		res.redirect('/');
});

module.exports = router;
