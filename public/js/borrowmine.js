// The code in borrowmine.js handles what happens when the user clicks the "SUBMIT RENTAL" button.
// When user clicks add-btn
$("#post-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newRental object
  var newRental = {
    user_name: $("#name").val().trim(),
    user_email: $("#email").val().trim(),
    rental_name: $("#rental_name").val().trim(),
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
  $("#description").val("");
});

//=================================================================
// Make a get request to our api route that will return every Rental Listing
$.get("/api/all", function(data) {
  // For each listing that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold listing data
    var allListings = $("<div>");
    // Add a class to this div: 'listing'
    allListings.addClass("listing");
    // Add an id to the listing to mark which listing(rental) it is
    allListings.attr("id", "rental_listing-" + i);
    // Append the listing to the rental listings section
    $("#").append(allListings);
    // Now  we add our listing data to the rental listing we just placed on the page
    $("#rental_listing-" + i).append("<h2>" + (i + 1) + ". " + data[i].rental_name + "</h2>");
    $("#rental_listing-" + i).append("<h3>User Name: " + data[i].user_name + "</h4>");
    $("#rental_listing-" + i).append("<h3>email: " + data[i].user_email + "</h4>");
    $("#rental_listing-" + i).append("<h3>Description: " + data[i].description + "</h4>");
  }
});

