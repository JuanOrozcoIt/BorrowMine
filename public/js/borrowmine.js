// The code in borrowmine.js handles what happens when the user clicks the "SUBMIT RENTAL" button.
// When user clicks add-btn
$("#post-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newRental object
  var newRental = {
    user_name: $("#name").val().trim(),
    user_email: $("#email").val().trim(),
    rental_name: $("#rental_name").val().trim(),
    price: $("#price").val().trim(),
    description: $("#description").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newRental)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });
  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#email").val("");
  $("#rental_name").val("");
  $("#price").val("");
  $("#description").val("");
});
//======================================================================
//Attempt to get the contact feature to work

/* The code in borrowmine.js handles what happens when the user clicks the "SUBMIT RENTAL" button.
// When user clicks add-btn
$("#contact-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newRental object
  var newEmail = {  
    user_email: $("#email").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/contact", newEmail)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });
  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#email").val("");
  $("#rental_name").val("");
  $("#price").val("");
  $("#description").val("");
});
//END Contact feature*/







 // This function grabs rental postings from the database and updates the view
  function () {
    $.get("/api/all", function(data) {
      console.log("Rental Posts", data);
      newRental = data;
      initializeRows();
    });
  }


//=================================================================
// Make a get request to our api route that will return every Rental Listing
$.get("/api/all", function(data) {
  // For each listing that our server sends us back
  for (var i = 0; i < data.length; i++) {

    console.log("creating listing is working");
    // Create a parent div to hold listing data
    var allListings = $("<div>");
    // Add a class to this div: 'listing'
    allListings.addClass("listing");
    // Add an id to the listing to mark which listing(rental) it is
    allListings.attr("id", "rental_listing-" + i);
    // Append the listing to the rental listings section
    $("#").append(allListings);
    // Now  we add our listing data to the rental listing we just placed on the page
    
    $("#rental_listing-" + i).append("<h3>User Name: " + data[i].user_name + "</h4>");
    $("#rental_listing-" + i).append("<h3>Email: " + data[i].user_email + "</h4>");
    $("#rental_listing-" + i).append("<h2>" + (i + 1) + ". " + data[i].rental_name + "</h2>");
    $("#rental_listing-" + i).append("<h2>" + (i + 1) + ". " + data[i].price + "</h2>");
    $("#rental_listing-" + i).append("<h3>Description: " + data[i].description + "</h4>");
  }
});

