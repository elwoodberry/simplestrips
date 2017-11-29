var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vendors/index', {
    title: "Vendors",
    description: "Description explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, an",
    robots: "nofollow",
    canonical: "http://simplestrips.com",
    twitterImage: "http://simplestrips.com",
    leftButton: 'vender left',
    rightButton: 'fa-plus',
    actionUrl: 'vendor'
  });
});

module.exports = router;
