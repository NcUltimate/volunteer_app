var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var filters = {division: ['Professional', 'Collegiate', 'High School'],
					indoors: ['Outdoors', 'Indoors'],
					time_of_day: ['Morning', 'Afternoon', 'Evening', 'Night'],
					day_of_week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				  }
  res.render('filter', { title: 'Filter', filters: filters });
});

module.exports = router;