function checklogin(){

    


    var feedusername = document.getElementById("usercheck");
    var feedpassword = document.getElementById("passcheck");


    if(feedusername.value !== "CPUBFF" || feedpassword.value !== "2004Mackay") {
        alert("Your Password is WRONG, Please try again")
    } else{
        window.location.href = 'endpage.html', true;
    }

}