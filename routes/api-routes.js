//Put Routes here//
var Router = require("express").Router;
var router = new Router();
var connection = require("../config/connection.js");
//use sequalize instead of connection.query

var post = require("../models/borrow.js");

// GET Route for getting all of the rental posts
  router.get("/api/all", function(req, res) {
    rentalPost.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });


  // POST route for saving a new rental post
  //This post request is adding the seller name into the seller_name object in the seller_tbl, 
//and then redirecting the browser back to the URL
//THIS IS RACHEL AND MICHEALS STUFF
 router.post("/api/new", function(req, res) {
    console.log("Post Data:");
    console.log(req.body);

    rentalPost.create({
      user_name: req.body.user_name,
      description: req.body.description,
      created_at: req.body.created_at
    })
    .then(function(results) {
      // `results` here would be the newly created rental post
      res.end();
    });
  });



module.exports = router
