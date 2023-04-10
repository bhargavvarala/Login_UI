
console.log("Hi Geeks, Welcome to GfG");
const submitButton = document.getElementById('login');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');

function emailValidation() {
    if (!email.value) {
        email.style.border = '5px solid';
        email.style.borderColor = 'red';
    }
}

function passValidation() {
    if (!pass.value) {
        pass.style.border = '5px solid';
        pass.style.borderColor = 'red';
    }
}



function myFunction() {
    document.getElementById("pass").style.borderColor = "red";
}
