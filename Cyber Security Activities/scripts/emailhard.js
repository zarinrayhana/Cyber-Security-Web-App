document.querySelector('.chat[data-chat=person1]').classList.add('active-chat');
document.querySelector('.person[data-chat=person1]').classList.add('active');

let name1 = document.getElementById('emailname1');
let subject1 = document.getElementById('emailsubject1');
let badlink1 = document.getElementById('badlink')
let idvalue = document.getElementById('email2')
let button1 = document.getElementById('reportbutton');
let score = document.getElementById('score');
let hidescoreboard = document.getElementById('scoreboard1')
let scorekeep = 0;
let datachatval = 'person1';
let badlink2 = document.getElementById('scamlink')
let displaynext = document.getElementById('nextboard1');
let hidescore = document.getElementsByClassName('scoreboard');

function next(){
    localStorage.setItem('malEmail2', true);
    window.location.href = 'smFeed End.html', true;
}

//reassign the ID of subject and name content based on the email also reset the highlights#
resetclick = function(name,subject){
    if (datachatval === 'person2'){
        name.style.backgroundColor = ''
        subject.style.backgroundColor = ''
        name1.id = 'emailname2'
    } else if (datachatval === 'person3'){
        name.style.backgroundColor = ''
        subject.style.backgroundColor = ''
        name1.id = 'emailname3'
    } else if(datachatval === 'person4'){
        name.style.backgroundColor = ''
        subject.style.backgroundColor = ''
        name1.id = 'emailname4'
    } else if (datachatval === 'person1'){
            name.style.backgroundColor = ''
            subject.style.backgroundColor = ''
            name1.id = 'emailname1'
        }else if(datachatval === 'person5'){
            name.style.backgroundColor = ''
            subject.style.backgroundColor = ''
            name1.id = 'emailname5'
        }
}


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
    datachatval = f.getAttribute('data-chat');
    chat.current.classList.remove('active-chat');
    chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat');
    friends.name = f.querySelector('.name').innerText;
    chat.name.innerHTML = friends.name;

    friends.subject = f.querySelector('.subject').innerText;
    chat.subject.innerHTML = friends.subject;
    resetclick(name1,subject1)


}
//click on a malicious element

//email 3 name malicious click

    const clickname1 = function(event) {
        event.target.style.backgroundColor = "rgba(0,0,0,.5)"

    }
    const reclickname1 = function(event){
        event.target.style.backgroundColor = ''
    }
    const onclick1 = function(event){
        if(event.target.style.backgroundColor === '' && event.target.id === 'emailname3'){
            clickname1(event)
        } else {reclickname1(event);}
    }
    
    ;
    name1.addEventListener('mousedown', onclick1);

    const clickreport1 = function(event){
        if (name1.style.backgroundColor === 'rgba(0, 0, 0, 0.5)' && name1.id === "emailname3"){
            console.log('true')
            scorekeep ++
            score.innerHTML = `your score is: ${scorekeep} `;
            name1.style.backgroundColor = '';
            name1.removeEventListener('mousedown', onclick1);
        } else { console.log(name1.style.backgroundColor)}
                    
        if (scorekeep === 3){
            displaynext.style.display = 'block';
            hidescoreboard.style.display = 'none';
        }
    }
        button1.addEventListener('mousedown',function checkanswer(event){
        clickreport1(event)
        })

//email name 4


const onclick3 = function(event){
    if(event.target.style.backgroundColor === '' ){
        clickname1(event)
        console.log('yes')
    } else {reclickname1(event);}
}

badlink1.addEventListener('mousedown', onclick3);
button1.addEventListener('mousedown',function checkanswer2(event){
    clickreport3(event)})
badlink1.addEventListener('mousedown', onclick3);

const clickreport3 = function(event){
    if (badlink1.style.backgroundColor === 'rgba(0, 0, 0, 0.5)'){
        console.log('true')
        scorekeep ++
        score.innerHTML = `your score is: ${scorekeep} `;
        badlink1.style.backgroundColor = ''
        badlink1.removeEventListener('mousedown', onclick3);
    } else { console.log(badlink1.style.backgroundColor)}
                
    if (scorekeep === 3){
        displaynext.style.display = 'block';
        hidescoreboard.style.display = 'none';
    }
}

 const onclick5 = function(event){
        if(event.target.style.backgroundColor === '' ){
            clickname1(event)
            console.log('yes')
        } else {reclickname1(event);}
    }
    
    badlink2.addEventListener('mousedown', onclick5);
    button1.addEventListener('mousedown',function checkanswer2(event){
        clickreport5(event)})
    badlink2.addEventListener('mousedown', onclick5);
    
    const clickreport5 = function(event){
        if (badlink2.style.backgroundColor === 'rgba(0, 0, 0, 0.5)'){
            console.log('true')
            scorekeep ++
            score.innerHTML = `your score is: ${scorekeep} `;
            badlink2.style.backgroundColor = ''
            badlink2.removeEventListener('mousedown', onclick5);
        } else { console.log(badlink2.style.backgroundColor)}
        if (scorekeep === 3){
            displaynext.style.display = 'block';
            hidescoreboard.style.display = 'none';
        }  
    }
    
