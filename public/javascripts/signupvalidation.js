const form = document.querySelector("form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const fpassword = form.querySelector("#firstpassword");
const spassword = form.querySelector("#secondpassword");
const errorElement = form.querySelector('#errorsignup');

function hideErrorMessage(){
    errorElement.innerHTML="";
}
function showErrorMessage(message){
    errorElement.innerHTML =`<div class="alert alert-danger w-50 justify-content-center" role="alert" >${message}</div>`;
}
function submitformsignup(e){
    e.preventDefault()
    if(username.value === ""){
        showErrorMessage("Name is required");
        return false;
    }

    if(username.value.length >15){
        showErrorMessage("Name must be less than 15");
        return false;
    }

    if(email.value === ""){
        showErrorMessage("Email is required");
        return false;
    }

    if(fpassword.value.length <3){
        showErrorMessage("Password must be longer than 3 Characters");
        return false;
    }

    if(fpassword.value.length >=10){
        showErrorMessage("Password must be less than 10 Characters");
        return false;
    }

    if(fpassword.value == "password"){
        showErrorMessage("Password can not be password");
        return false;
    }

    if(fpassword.value !== spassword.value){
        showErrorMessage("Passwords are not same");
        return false;
    }

    if(password.value === username.value){
        showErrorMessage("User name and Password are same");
        return false;
    }

    hideErrorMessage()
    return true;
}