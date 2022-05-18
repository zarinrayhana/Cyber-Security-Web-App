
var user = document.getElementById("signupUsername");
var email = document.getElementById("emailchecker");
var passwd = document.getElementById("passwordchecker");

function register() {

    window.localStorage.setItem("username", user.value);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("password", passwd.value);
    alert('Your account has been created');
}