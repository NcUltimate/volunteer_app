var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var filters = {'Division': ['Professional', 'Collegiate', 'High School'],
					'Location': ['Outdoors', 'Indoors'],
					'Time of Day': ['Morning', 'Afternoon', 'Evening', 'Night'],
					'Day of Week': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				  }
	if(req.session.loggedIn)
  		res.render('filter', { title: 'Filter', filters: filters });
  	else
  		res.redirect('/');
});

router.post( '/', function(req, res) {
		console.log(req.body);
		res.redirect('/home');
});

module.exports = router;