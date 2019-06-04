var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
model.Films.findAll({})
.then(films => res.json({
	error: false,
	data: films
}))
.catch(error => res.json({
	error: true,
	data: [],
	error: error
}));
});

router.post('/', function(req, res, next) {
model.Films.create({
	title: req.body.title,
	description: req.body.description,
	vignette: req.body.vignette,
	url: req.body.url
})
.then(films => res.status(201).json({error: false,
	data: films,
message:'New film has been created.'}))
.catch(error => res.json({
	error: true,
	data: [],
	error: error
}));
});



module.exports = router;