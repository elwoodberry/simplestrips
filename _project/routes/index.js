var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Simple Strips | Vendor Management",
    description: "Description explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, an",
    robots: "follow",
    canonical: "http://simplestrips.com",
    twitterImage: "http://simplestrips.com"
  });
});

module.exports = router;
