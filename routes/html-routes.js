// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
var Router = require("express").Router;
var router = new Router();


var rentalPost = require("../models/borrow.js");




// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.
// index route loads view.html
router.get("/", function(req, res) {
	rentalPost.findAll()
	.then(function(results) {
	  var listings = {
	    rentalPost: results
	  }
	res.render('main', listings);
	})
})

 module.exports = router;