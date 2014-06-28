var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {	
	var events= [{
		name: 'NCAA Collegiate Track Meet',
		image: '/images/profile-pic.jpg',
		desc: 'Time and scorekeepers are needed.',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'http://www.ncaa.com/track/meet'
	},{
		name: 'Super Bowl XVII',
		image: '/images/profile-pic.jpg',
		desc: 'It\'s almost superbowl season. We need volunteers for all kinds of tasks.',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'http://www.superbowl.com/xvii'
	},{
		name: 'Bankers Life BBall Tourney',
		image: '/images/profile-pic.jpg',
		desc: 'COme help out at the 25th annual Pacersbasketball community tournament.',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'http://www.pacersbasketball.com'
	},{
		name: 'Special Olympics',
		image: '/images/profile-pic.jpg',
		desc: 'Special olympics are a longstanding tradition in the Indianapolis community',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'http://www.specialolympics.com/about'
	}];
   if(req.session.loggedIn)
  		res.render('profile', { title: 'Profile', events: events });
  	else
  		res.redirect('/');
});

router.post('/', function(req, res) {
	req.session.loggedIn = false;
	res.redirect('/profile');
});

module.exports = router;
