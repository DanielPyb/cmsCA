const registerForm = document.querySelector(".registerVer")
const loginForm = document.querySelector(".loginVer")

const registerSuccess = document.querySelector("#registerSuccess");
const loginSuccess = document.querySelector("#loginSuccess");

const formReg = document.querySelector("#registerForm");
const formLogin = document.querySelector("#formLogin");

const userName = document.querySelector("#username");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2")
const email = document.querySelector("#email");

const userNameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const password1Error = document.querySelector("#password1Error");
const password2Error = document.querySelector("#password2Error");

const registerBTN = document.querySelector(".regClick");

const userNameLogin = document.querySelector("#usernameLogin");
const passwordLogin = document.querySelector("#passwordLogin");

const userNameLoginError = document.querySelector("#usernameLoginError");
const passwordLoginError = document.querySelector("#passwordLoginError");


const logBTN = document.querySelector(".logClick");



const registerBTNClick = () =>{
    if(registerForm.style.display != "block"){
        registerForm.style.display = "block";
        loginForm.style.display = "none"
    } else{
        console.log("why");
    }
}

const loginBTNClick = () =>{
    if(loginForm.style.display != "block"){
        loginForm.style.display = "block";
        registerForm.style.display = "none"
    } else{
        console.log("why");
    }
}
logBTN.addEventListener("click", loginBTNClick)
registerBTN.addEventListener("click", registerBTNClick);

function loginValidation(event){
    event.preventDefault();
    let counter = 0;
    if(userNameLogin.value.trim().length > 0){
        userNameLoginError.style.display = "none"
        counter++;
    } else{
        userNameLoginError.style.display = "block";
    } if(passwordLogin.value.trim().length > 5){
        passwordLoginError.style.display = "none"
        counter++;
    } else{
        passwordLoginError.style.display = "block";
    }if(counter === 2){
        loginForm.style.display = "none"
        loginSuccess.style.display = "block"
    }
}

function registerValidation(event){
    event.preventDefault();
    let counter = 0;
    if(username.value.trim().length > 0){
        userNameError.style.display = "none";
        counter ++;
    } else{
        userNameError.style.display = "block";
    }
    if(password1.value.trim().length > 5){
        password1Error.style.display = "none"
        counter ++;
    } else{
        password1Error.style.display = "block"
    } if(password2.value.trim().length > 5 && password2.value === password1.value){
        password2Error.style.display = "none";
        counter ++;
    } else {
        password2Error.style.display = "block"
    }if(emailValidation(email.value) == true && email.value.trim().length > 0) {
        emailError.style.display = "none"
        counter ++;
        console.log(counter);
    } else {
        emailError.style.display = "block"
    }
    if(counter === 4){
        registerForm.style.display = "none"
        registerSuccess.style.display = "block"
    }
}

function emailValidation(email){
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/; // copied from https://digitalfortress.tech/tips/top-15-commonly-used-regex/ at step 3 "common Email ID's"
    const emailMatch = emailPattern.test(email);
    return emailMatch;
}

formReg.addEventListener("submit", registerValidation);
formLogin.addEventListener("submit", loginValidation)