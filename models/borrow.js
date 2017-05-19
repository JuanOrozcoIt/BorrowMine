var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Chirp" model that matches up with DB
var rentalPost = sequelize.define("post_tbl", {
  user_name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING //change to TEXT??
  },
  user_email: {
    type: Sequelize.STRING
  },
  rental_name: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});
// Syncs with DB
rentalPost.sync();
// Makes the Chirp Model available for other files (will also create a table)
module.exports = rentalPost;