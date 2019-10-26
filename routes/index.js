var express = require('express');
var ViewData = require('../models/view-data.js');
var blogPosts = require('../data/blog-posts.js')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { viewData: new ViewData('dangibbons.io', 'home') });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
	viewData = new ViewData('About', 'about')
	res.render('about', { viewData: new ViewData('About', 'about') });
});

/* GET blog page. */
router.get('/blog', function (req, res, next) {
	res.render('blog', { viewData: new ViewData('Blog', 'blog'), blogPosts: blogPosts });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
	res.render('projects', { viewData: new ViewData('Projects', 'projects') });
});

module.exports = router;
