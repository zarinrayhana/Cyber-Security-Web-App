
function checklogin(){

    

    var checkuser = localStorage.getItem("username");
    var checkpass = localStorage.getItem("password");

    var feedusername = document.getElementById("usercheck");
    var feedpassword = document.getElementById("passcheck");

    if(feedusername.value !== checkuser || feedpassword.value !== checkpass) {
        alert('ERROR');
    }else {
        alert('sucess');
        window.location.href == "../pages/index.html";
    }
}