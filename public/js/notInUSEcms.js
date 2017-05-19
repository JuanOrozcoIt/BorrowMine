/* global moment */

// equivl to ./public/js/chirp.js


// When user clicks add-btn
$("#post-submit").on("click", function(event) {
  event.preventDefault();

   // Make a post object
  var newPost = {
    user_name: $("#name").val().trim(),
    description: $("#message").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };
  console.log(newPost);


// Send an AJAX POST-request with jQuery
//IDK IF THIS ROUTE IS CORRECT
  $.post("/api/new", newPost)
    // On success, run the following code
    .done(function() {
      var row = $("<div>");
      row.addClass("post");
      row.append("<p>" + newPost.user_name + " THIS WORKS: </p>");
      row.append("<p>" + newPost.description + "</p>");
      row.append("<p>At " + moment(newPost.created_at).format("h:mma on dddd") + "</p>");
      $("#post-area").prepend(row);

      //add refresh here.
      
    });
  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#message").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("post");
      row.append("<p>" + data[i].user_name + "</p>");
      row.append("<p>" + data[i].description + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
      $("#post-area").prepend(row);
    }
  }
});
