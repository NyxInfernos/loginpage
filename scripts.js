// scripts.js
// define a function to validate the form input
function validateForm() {
    // get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // check if the username and password are not empty
    if (username == "" || password == "") {
      alert("Please enter your username and password");
      return false;
    }
    // check if the username and password are correct
    if (username == "admin" && password == "1234") {
      alert("You have successfully logged in");
      return true;
    } else {
      alert("Invalid username or password");
      return false;
    }
  }
  