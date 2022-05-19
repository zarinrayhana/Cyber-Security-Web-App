var mailscore = localStroage.getItem("username");
var smscore = localStroage.getItem("scoresm");

function checkscore() {
    document.getElementById("scoreofmail").innerHTML = mailscore;
}
