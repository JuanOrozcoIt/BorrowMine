//Put Routes here//


var Router = require("express").Router;
var router = new Router()
var connection = require("../config/connection.js");
//use sequalize instead of connection.query

//This get request is rendering the seller_name object from the seller-tbl
router.get("/", function(req, res) {

  connection.query("SELECT * FROM user_tbl;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { user_name: data });
  });
});

//This post request is adding the seller name into the seller_name object in the seller_tbl, 
//and then redirecting the browser back to the URL
router.post("/", function(req, res) {
  connection.query("INSERT INTO post_tbl (description) VALUES (?)", [req.body.description], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});


//This delete request is deleting the row in the seller_tbl where the id is equal to the URL parameter
router.delete("/:id", function(req, res) {
  connection.query("DELETE FROM post_tbl WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});



router.put("/", function(req, res) {
  connection.query("UPDATE user_tbl SET user_name = ? WHERE id = ?", [
    req.body.user_name, req.body.id
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});


module.exports = router
