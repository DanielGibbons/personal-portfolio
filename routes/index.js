var express = require('express');
var ViewData = require("../models/view-data.js");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { viewData: new ViewData('', 'home') });
});

router.get('/about', function (req, res, next) {
	viewData = new ViewData('About', 'about')
	res.render('about', { viewData: new ViewData('About', 'about') });
});

router.get('/posts', function (req, res, next) {
	viewData = new ViewData('Posts', 'posts')
	res.render('posts', { viewData: new ViewData('Posts', 'posts') });
});


module.exports = router;
