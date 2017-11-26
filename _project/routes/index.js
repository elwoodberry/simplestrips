var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Title ipsum dolor sit amet, consectetuer adipiscing eli",
    description: "Description explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, an",
    robots: "follow",
    canonical: "http://google.com",
    twitterImage: "http://google.com"
  });
});

module.exports = router;
