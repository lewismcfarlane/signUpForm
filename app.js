let firstNameInput = document.getElementById('firstName');
let surnameInput = document.getElementById('surname');
let emailInput = document.getElementById('email');
let phoneNumberInput = document.getElementById('phoneNumber');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');

// Custom validity messages

firstNameInput.addEventListener("invalid", ({ target }) => {
  target.setCustomValidity("Please enter a valid name.");
});


firstNameInput.addEventListener("change", ({ target }) => {
  target.setCustomValidity("");
});

surnameInput.addEventListener("invalid", ({ target }) => {
    target.setCustomValidity("Please enter a valid name.");
  });
surnameInput.addEventListener("change", ({ target }) => {
    target.setCustomValidity("");
});

emailInput.addEventListener("invalid", ({ target }) => {
    target.setCustomValidity("Please enter a valid email address.");
  });
emailInput.addEventListener("change", ({ target }) => {
    target.setCustomValidity("");
});

phoneNumberInput.addEventListener("invalid", ({ target }) => {
    target.setCustomValidity("Please enter a valid phone number.");
  });
phoneNumberInput.addEventListener("change", ({ target }) => {
    target.setCustomValidity("");
});

passwordInput.addEventListener("invalid", ({ target }) => {
    target.setCustomValidity("Password must be longer than 10 characters.");
  });
passwordInput.addEventListener("change", ({ target }) => {
    target.setCustomValidity("");
});


function validatePassword() {
  if(passwordInput.value != confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords must match.");
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
}
passwordInput.onchange = validatePassword;
confirmPasswordInput.onkeyup = validatePassword;








