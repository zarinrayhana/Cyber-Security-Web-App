
function register() {

    localStorage.setItem("username", user.value);
    alert('Your account has been created');
}




var user = document.getElementById("signupUsername");
var passwd = document.getElementById("passwordchecker");
var email = document.getElementById("emailchecker");


user.addEventListener("blur", myFunction);


function myFunction() {
  if (user.value.length < 6) {
    alert("Username Must be 6 characters long.");
    return (true)
}

email.addEventListener("blur", myFunction);

function myFunction() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
}