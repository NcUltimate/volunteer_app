var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	req.session.loggedIn = false;
	res.redirect('/');
});

module.exports = router;
