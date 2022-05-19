



var user = document.getElementById("signupUsername");
var passwd = document.getElementById("passwordchecker");
var email = document.getElementById("emailchecker");




function register() {

    localStorage.setItem("username", user.value);
    localStorage.setItem("password", passwd.value);

    alert('Your account has been created');

}