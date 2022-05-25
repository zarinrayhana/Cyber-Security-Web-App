
function checklogin(){

    


    var feedusername = document.getElementById("usercheck");
    var feedpassword = document.getElementById("passcheck");


    if(feedusername.value !== "MinnieMax" || feedpassword.value !== "Sammy2002") {
        alert("Your Password is WRONG, Please try again")
    } else{
        return true;
        alert('Sucess');
        window.location.href = 'malemail.html';
    }

}