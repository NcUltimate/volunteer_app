var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {	
	var events= [{
		name: 'Event Name #1',
		image: '/images/profile-pic.jpg',
		desc: 'Some sample data',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'slkdjf;aslkdfj.com'
	},{
		name: 'Event Name #2',
		image: '/images/profile-pic.jpg',
		desc: 'Some sample data',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'slkdjf;aslkdfj.com'
	},{
		name: 'Event Name #3',
		image: '/images/profile-pic.jpg',
		desc: 'Some sample data',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'slkdjf;aslkdfj.com'
	},{
		name: 'Event Name #4',
		image: '/images/profile-pic.jpg',
		desc: 'Some sample data',
		sDate: '2014-09-09',
		eDate: '2015-09-09',
		webUrl: 'slkdjf;aslkdfj.com'
	}];
   if(req.session.loggedIn)
  		res.render('profile', { title: 'Profile', events: events });
  	else
  		res.redirect('/');
});

router.post('/', function(req, res) {
	
});

module.exports = router;
