const contactForm = document.querySelector(".contactForm");
const messageTitle = document.querySelector("#message");
const email = document.querySelector("#contactEmail");
const messageText = document.querySelector("#messageText");


const messageTitleError = document.querySelector("#titleError");
const messageTextError = document.querySelector("#messageTextError");
const contactSuccess = document.querySelector(".contactSuccess");



function sendMessage(event){
    event.preventDefault();
    let counter = 0;
    if(messageTitle.value.trim().length > 0){
        messageTitleError.style.display = "none";
        counter ++;
    } else{
        messageTitleError.style.display = "block";
    }if(emailValidation(email.value) == true && email.value.trim().length > 0) {
        emailError.style.display = "none"
        counter ++;
        console.log(counter);
    } else {
        emailError.style.display = "block"
    }
    if(messageText.value.trim().length > 25){
        messageTextError.style.display = "none"
        counter ++;
    } else{
        messageTextError.style.display = "block"
    }
    if(counter === 3){
        registerForm.style.display = "none"
        registerSuccess.style.display = "block"
    }
}

contactForm.addEventListener("submit", sendMessage);

function emailValidation(email){
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/; // copied from https://digitalfortress.tech/tips/top-15-commonly-used-regex/ at step 3 "common Email ID's"
    const emailMatch = emailPattern.test(email);
    return emailMatch;
}