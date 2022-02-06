var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('../views/pages/home', { title: "My Portfolio"});
});

router.get('/aboutMe', function(req, res, next) {
  res.render('../views/pages/aboutMe', { title: "Know Me!"});
});

router.get('/services', function(req, res, next) {
  res.render('../views/pages/services', { title: "Services"});
});


router.get('/skillSet', function(req, res, next) {
  res.render('../views/pages/skillSet', { title: "My Arsenal"});
});


router.get('/contactMe', function(req, res, next) {
  res.render('../views/pages/contactMe', { title: "Contact Me!"});
});
module.exports = router;
