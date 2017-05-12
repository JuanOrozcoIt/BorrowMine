//Put Routes here//

//use sequalize instead of connection.query

//This get request is rendering the seller_name object from the seller-tbl
app.get("/", function(req, res) {
  connection.query("SELECT * FROM seller_tbl;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { seller_name: data });
  });
});

//This post request is adding the seller name into the seller_name object in the seller_tbl, 
//and then redirecting the browser back to the URL
app.post("/", function(req, res) {
  connection.query("INSERT INTO seller_tbl (seller_name) VALUES (?)", [req.body.seller_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});


//This delete request is deleting the row in the seller_tbl where the id is equal to the URL parameter
app.delete("/:id", function(req, res) {
  connection.query("DELETE FROM seller_tbl WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});



app.put("/", function(req, res) {
  connection.query("UPDATE seller_tbl SET seller_name = ? WHERE id = ?", [
    req.body.seller_name, req.body.id
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});
