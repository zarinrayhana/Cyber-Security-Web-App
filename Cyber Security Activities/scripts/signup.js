var user = document.getElementById("signupUsername");
var passwd = document.getElementById("pwd");
var email = document.getElementById("emailchecker");



function register() {

    localStorage.setItem("username", user.value);
    localStorage.setItem("password", passwd.value);
    window.location.href = 'Runme.html', true;
}

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


// Elements
const input = document.querySelector("#pwd");
const btn = document.querySelector("#check");
const output = document.querySelector(".output");

// Click Event
btn.addEventListener("click", crackcheck);
input.addEventListener("input", crackcheck);
document.addEventListener("DOMContentLoaded", crackcheck);
// The Crack Checker Function
function crackcheck() {
  const val = input.value;
  const str = stringCheck(val);
  const qty = str.str;
  const range = str.range;

  if(val.length > 0){
btn.innerText = 'reset'
  } else {
    btn.innerText = 'check now'  
  }
  if(val.length < 1 && event.type === 'click'){
      alert('Please enter a text before you start testing');
  } else if (event.type === 'click') {
    input.value = '';
  }

  const duration = crackDuration(range, val.length);
  const displayDuration =
    duration.dimension === null
      ? "Less than a Secound"
      : `${duration.time} ${duration.dimension}`;
  const status = duration.status;

  let label = [
    "Big letters",
    "Small letters",
    "Digits",
    "Special character",
    "Small umlauts",
    "Big umlauts",
    "Spaces",
  ];

  let signs = "";
  qty.forEach((q, index) => {
    if (q > 0) {
      signs =
        signs +
        `<li class="opc6">${q} <span class="opc6">${label[index]}</span></li>`;
    }
  });

  const html = `<div class="w100 my10 fl status status-${status}">${displayDuration}</div>
<div class="w70 fl"><ul class="signs">${signs}</ul></div>
<div class="w30 fl sc3">In order to crack your entered password, a hacker needs ${range}<sup class="opc100">${val.length}</sup> attempts with a brute force attack.</div>`;

  const htmlStart = `<h2>Welcome to the password crack checker</h2>
  <p>insert a password above and check how long it would take a hacker to crack it. In this way you can check how secure your chosen password is  </p>
  <hr><h3>Our tip for a secure password</h3>
  <p>Always use at least twelve characters. They should have at least one uppercase letter, one lowercase letter and special characters and for even more security, you should also use numbers.</p>
  <p>Never use the same password twice. And use a password manager or write your passwords encrypted for you on a piece of paper that only you can decrypt</p>
  `;
  if (input.value.length > 0) {
    output.innerHTML = html;
  } else {
    output.innerHTML = htmlStart;
  }
}


// Crack Duration
const crackDuration = (range, length) => {
  let ctime = Math.round(range ** length / 2_147_483_600);
  let steps = [12, 30, 24, 60, 60];
  let dimensions = ["Years", "Months", "Hours", "Minutes", "Seconds"];
  let dimension = null;
  let status = 4;

  for (let i = 0; i < 5; i++) {
    const sum = steps.reduce((a, b) => a * b);
    if (ctime > sum) {
      ctime = Math.round(ctime / sum);
      dimension = dimensions[i];
      status = i;
      break;
    } else {
      steps.shift();
    }
  }
  return { time: ctime, dimension: dimension, status: status };
};

// Stringcheck
const stringCheck = (myString) => {
  const typs = [
    `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
    `abcdefghijklmnopqrstuvwxyz`,
    `0123456789`,
    `ß!"§$%&/()=?*#+-:.;,<>_@°^`,
    `äöü`,
    `ÄÖÜ`,
    ` `,
  ];

  const countStrings = [0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < myString.length; i++) {
    for (let j = 0; j < typs.length; j++) {
      if (typs[j].includes(myString[i])) {
        countStrings[j]++;
      }
    }
  }

  let range = 0;
  for (let i = 0; i < countStrings.length; i++) {
    if (countStrings[i] > 0) {
      range = range + typs[i].length;
    }
  }

  return { str: countStrings, range };
};

//UI
function menu() {
  const menuBTN = document.querySelector("#menu-btn");
  const activeClass = "nav-btn-active";
  menuBTN.addEventListener("click", toggelMenu);
  function toggelMenu() {
    menuBTN.classList.contains(activeClass)
      ? menuBTN.classList.remove("nav-btn-active")
      : menuBTN.classList.add("nav-btn-active");
  }
}

menu();