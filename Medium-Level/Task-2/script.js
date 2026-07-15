const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Name Validation
    if(name === ""){
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        emailError.textContent = "Email is required.";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Message Validation
    if(message === ""){
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    if(isValid){
        alert("Form submitted successfully!");
        form.reset();
    }

});