var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dashboard', {
    title: "Simple Strips",
    description: "Description explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, an",
    robots: "follow",
    canonical: "http://simplestrips.com",
    twitterImage: "http://simplestrips.com",
    leftButton: 'Dashboard left',
    rightButton: ''
  });
});

module.exports = router;
