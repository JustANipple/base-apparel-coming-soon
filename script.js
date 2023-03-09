const email = document.querySelector("#typeEmail");
const button = document.querySelector(".send-email");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".email-error");
const regex = new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+");
let emailText = "";

email.addEventListener("change", (event) => {
    emailText = document.getElementById("typeEmail").value;
    if(!regex.test(emailText)) {
        email.style.border = "2px solid red";
        errorIcon.style.visibility = "visible";
        errorText.style.visibility = "visible";
    } else {
        email.style.border = "2px solid green";
        errorIcon.style.visibility = "hidden";
        errorText.style.visibility = "hidden";
    }
});

button.addEventListener("click", (event) => {
    console.log(regex.test(emailText));
    if(regex.test(emailText)) {
        window.location.reload();
    } else {
        email.style.border = "2px solid red";
        errorIcon.style.visibility = "visible";
        errorText.style.visibility = "visible";
    }
});