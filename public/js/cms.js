/* global moment */


  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  var postCategorySelect = $("#category");

  // Giving the postCategorySelect a default value
  postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      category: postCategorySelect.val()
    };

    console.log(newPost)

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
      window.location.href = "/blog";
    });
  }

  
  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
    .done(function() {
      window.location.href = "/blog";
    });
  }
});

























// equivl to ./public/js/chirp.js
/*1st attempt
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
