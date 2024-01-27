// scripts.js
// define a function to validate the form input
function validateForm() {
    // get the email, username, password, and confirm password values
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;
    // check if the email, username, password, and confirm password are not empty
    if (email == "" || username == "" || password == "" || confirm_password == "") {
      alert("Please fill out all the fields");
      return false;
    }
    // check if the email is valid
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    // check if the password and confirm password are the same
    if (password != confirm_password) {
      alert("The passwords do not match");
      return false;
    }
    // check if the password is strong enough
    if (!validatePassword(password)) {
      alert("The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
      return false;
    }
    // if everything is valid, alert the user and return true
    alert("You have successfully signed up");
    return true;
  }
  
  // define a function to validate the email format
  function validateEmail(email) {
    // use a regular expression to check the email format
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  
  // define a function to validate the password strength
  function validatePassword(password) {
    // use a regular expression to check the password strength
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  }
  