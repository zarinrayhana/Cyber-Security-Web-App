
var scorecard = 0;

function goodpost(){
        scorecard = scorecard + 1
        document.getElementById("score").innerHTML = scorecard;
}

function scoresubmitsm() {
    localStroage.setItem("scoresm", scorecard.value);
}
