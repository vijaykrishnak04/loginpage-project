const form = document.querySelector("form");
const username = form.querySelector("#username");
const password = form.querySelector("#password");
const errorElement = form.querySelector('#error');


function hideErrorMessage(){
    errorElement.innerHTML="";
}
function showErrorMessage(message){
    errorElement.innerHTML =`<div class="alert alert-danger w-80 justify-content-center" role="alert" >${message}</div>`;
}
function submitform(e){
    // e.preventDefault()
    if(username.value === ""){
        showErrorMessage("Name is required");
        return false;
    }

    if(username.value.length >15){
        showErrorMessage("Name must be less than 15");
        return false;
    }

    if(password.value.length <5){
        showErrorMessage("Password must be longer than 5 Characters");
        return false;
    }

    if(password.value.length >=10){
        showErrorMessage("Password must be less than 10 Characters");
        return false;
    }

    if(password.value == "password"){
        showErrorMessage("Password can not be password");
        return false;
    }

    if(password.value === username.value){
        showErrorMessage("User name and Password are same");
        return false;
    }

    // if(password.value !== 12345 && username.value !== "vijay"){
    //     showErrorMessage("Incorrect Username or Password");
    //     return false;
    // }


    hideErrorMessage()
    return true;
}
    
