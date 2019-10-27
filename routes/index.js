var express = require('express');
var ViewData = require('../models/view-data.js');
var blogPosts = require('../data/blog-posts.js')
var projects = require('../data/projects.js')
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res, next) {
	res.render('index', { viewData: new ViewData('About', 'about') });
});

/* GET blog posts page. */
router.get('/blog', function (req, res, next) {
	res.render('blog', { viewData: new ViewData('Blog', 'blog'), blogPosts: blogPosts });
});

/* GET blog page. */
router.get('/blog/:blogId', function (req, res, next) {
	res.render(`blog/${req.params.blogId}`, { viewData: new ViewData(`Blog | ${blogPosts[req.params.blogId].shortTitle}`, 'blog'), blogData: blogPosts[req.params.blogId] });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
	res.render('projects', { viewData: new ViewData('Projects', 'projects'), projects: projects });
});

/* GET playground page. */
router.get('/playground', function (req, res, next) {
	res.render('playground', { viewData: new ViewData('Playground', 'playground') });
});

module.exports = router;
