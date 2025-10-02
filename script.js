

document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('registration-form')
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

//User Input Validation
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

let isValid = true;
const messages = [];

//Username Validation
if(username.length < 3) {
    isValid = false;
    messages.push('Username is required');
}

//Email Validation
if(!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("Please enter a valid email address (must include '@' and '.').");
}

//Password Validation
if(password.length < 8 ) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
}

//Make feedbackDiv Visible
feedbackDiv.style.display ="block";

if(isValid){
    //Success
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"; // green
}else {
    //Error messages (with line breaks)
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545"; // red
}


})