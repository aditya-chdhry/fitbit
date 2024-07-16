const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Please enter valid height and weight.";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}

function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Please enter valid height and weight.";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}










const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
