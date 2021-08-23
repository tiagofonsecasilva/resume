const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tiago Miguel Fonseca - WebDev' });
});

router.get('/blog-home2', function(req, res, next) {
  res.render('blog-home', { title: 'Tiago Miguel Fonseca - WebDev' });
});

router.get("/project", (req, res, next) => {
  res.render("project", { title: 'Tiago Miguel Fonseca - WebDev' });
});

router.get("/portfolio", (req, res, next) => {
  res.render("portfolio", { title: 'Tiago Miguel Fonseca - WebDev' });
});

router.get("/contact", (req, res, next) => {
  res.render("contact", { title: 'Tiago Miguel Fonseca - WebDev' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Tiago Miguel Fonseca - WebDev' });
});

// router.get('/services', function(req, res, next) {
//   res.render('services', { title: 'Services' });
// });

// router.get('/blog-home-alt', function(req, res, next) {
//   res.render('blog-home-alt', { title: 'Services' });
// });

// router.get('/blog-post', function(req, res, next) {
//   res.render('blog-post', { title: 'Services' });
// });



module.exports = router;
