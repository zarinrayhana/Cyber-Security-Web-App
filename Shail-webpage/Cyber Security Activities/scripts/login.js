
function checklogin(){
    var checkuser = localStorage.username;
    var checkpass = localStorage.password;

   document.getElementById("print").innerHTML = localStorage.getItem("username");
    