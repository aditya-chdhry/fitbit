var overlay = document.getElementById("overlay");

// Buttons to 'switch' the page
var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");

// The sidebars
var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");

// The forms
var accountForm = document.getElementById("sign-in-info")
var signinForm = document.getElementById("sign-up-info");
document.getElementById("sign-up-form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get the form data
  const name = event.target.querySelector('input[placeholder="Name"]').value;
  const email = event.target.querySelector('input[placeholder="Email"]').value;
  const password = event.target.querySelector('input[placeholder="Password"]').value;

  // Create an object with the form data
  const userData = {
      name: name,
      email: email,
      password: password
  };

  try {
      // Make a fetch request to sign up the user
      const response = await fetch('http://localhost:8000/auth/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });

      // Check if the request was successful
      if (response.ok) {
          const result = await response.json();
          console.log('User signed up successfully:', result);
          window.location.href = 'http://127.0.0.1:5500/FitBit-main/index.html';
          // Optionally, redirect the user or show a success message
      } else {
          const error = await response.json();
          console.error('Sign up failed:', error);
          // Optionally, show an error message to the user
      }
  } catch (error) {
      console.error('Error during sign up:', error);
      // Optionally, show an error message to the user
  }

});


// Open the Sign Up page
openSignUp = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}

// Open the Sign In page
openSignIn = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");
  // Add classes for animations
  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";
  // hide the sign in form once it is out of view
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);

  
// console.log(JSON.stringify({
//   "name" : name.value,
//   "email" : email.value,
//   "password" : password.value
// }))
// const response = fetch("http://localhost:8000/saveUser" , {
//   method: "POST", 
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body :JSON.stringify({
//     "name" : name.value,
//     "email" : email.value,
//     "password" : password.value
//   })})
//   .then(function(res){ return res.json() })
//   .then(function(data){ alert( "success" ) })
//   return true;



  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}

// When a 'switch' button is pressed, switch page
openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);





  


