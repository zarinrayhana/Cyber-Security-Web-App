document.querySelector('.chat[data-chat=person1]').classList.add('active-chat');
document.querySelector('.person[data-chat=person1]').classList.add('active');

let friends = {
    list: document.querySelector('ul.people'),
    all: document.querySelectorAll('.left .person'),
    name: '',
    subject: '' },

chat = {
    container: document.querySelector('.container .right'),
    current: null,
    person: null,
    name: document.querySelector('.container .right .top .name'),
    subject: document.querySelector('.container .right .top .subject') };


friends.all.forEach(f => {
    f.addEventListener('mousedown', () => {
        f.classList.contains('active') || setAciveChat(f);
    });
});

function setAciveChat(f) {
    friends.list.querySelector('.active').classList.remove('active');
    f.classList.add('active');
    chat.current = chat.container.querySelector('.active-chat');
    chat.person = f.getAttribute('data-chat');
    chat.current.classList.remove('active-chat');
    chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat');
    friends.name = f.querySelector('.name').innerText;
    chat.name.innerHTML = friends.name;

    friends.subject = f.querySelector('.subject').innerText;
    chat.subject.innerHTML = friends.subject;
}

var scorecard = 0;

function badmail(){
        scorecard = scorecard + 1
        document.getElementById("score").innerHTML = scorecard;
}
function goodmail(){

}


function scoresubmitmail() {
    localStroage.setItem("scoremail", scorecard.value);
}