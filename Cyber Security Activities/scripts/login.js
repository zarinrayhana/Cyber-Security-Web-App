var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    //login button
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        //log in as MinnieMax?
        if(document.getElementById("loginUsername").value === "MinnieMax" && document.getElementById("loginPassword").value === "Sammy2002"){
            console.log("logged in as MinnieMax");
            if(localStorage.getItem('malEmail1') != 'true'){
                window.location.href = 'malEmail1.html', true;
                //goto malEmail1
            } else {
                window.location.href = 'smFeed2.html', true;
                //goto smFeed2
            }
        }
        //log in as CPUBFF?
        if(document.getElementById("loginUsername").value === "CPUBFF" && document.getElementById("loginPassword").value === "2004Mackay"){
            console.log("logged in as CPUBFF");
            if(localStorage.getItem('malEmail2') != 'true'){
                //goto malEmail2
                window.location.href = 'malEmail2.html', true;
                console.log("goto malEmail2")
            } else {
                //goto smFeed End
                window.location.href = 'smFeed End.html', true;
                console.log("goto smfeed End")
            }
        }
        //log in as BonusChallanger?
        if(document.getElementById("loginUsername").value === "BonusChallanger" && document.getElementById("loginPassword").value === "binaryfirewallbugfloppydisc"){
            console.log("logged in as BonusChallanger");
            //goto smFeed End Bonus
            window.location.href = 'smFeed End Bonus.html', true;
        }
        //log in as User created user
        if(document.getElementById("loginUsername").value === localStorage.getItem('username') && document.getElementById("loginPassword").value === localStorage.getItem('password')){
            console.log("logged in as user created user");
            localStorage.setItem('malEmail1', 'fasle');
            localStorage.setItem('malEmail2', 'flase');
            //goto smFeed1
            window.location.href = 'smFeed1.html', true;

        }
        //if login failed
        setFormMessage(loginForm, "error", "Invalid username and/or passowrd.");

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //username isn't long enough
            if(e.target.id === "signupUsername" && e.target.value.length < 6){
                setInputError(inputElement, "Username must be at least 6 characters.");
            }
            //username is already taken
            if(e.target.id === "signupUsername" && (e.target.value === "MinnieMax" || 
            e.target.value === "CPUBFF" || e.target.value === "SuperJames32" ||
            e.target.value === "bitflipper" || e.target.value === "SystemAdmin" ||
            e.target.value === "BonusChallanger")){
                setInputError(inputElement, "Username already taken.");
            }
            //email regex
            if(e.target.id === "signupEmail" && !e.target.value.match(emailformat)){
                setInputError(inputElement, "Invalid email address.");
            }
            //password confirm
            if(e.target.id === "signupPasswordConfirm" && document.getElementById("signupPassword").value != document.getElementById("signupPasswordConfirm").value){
                setInputError(inputElement, "Password doesn't match.");
            }

        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

    });

    //signup button
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        if(document.getElementById("signupUsername").value.length > 5
        && document.getElementById("signupEmail").value.match(emailformat)
        && document.getElementById("signupPassword").value == document.getElementById("signupPasswordConfirm").value){
            console.log("Valid signup");
            //save user created username and password
            localStorage.setItem('username', document.getElementById("signupUsername").value);
            localStorage.setItem('password', document.getElementById("signupPassword").value);
            //save malEmail progress as undone
            localStorage.setItem('malEmail1', 'false');
            localStorage.setItem('malEmail1', 'flase');
            //goto smFeed1
            window.location.href = 'smFeed1.html', true;
        } else {
            console.log("Invalid signup");
        }

    });

    

});

//crack code, thanks Zarin
const input = document.querySelector("#signupPassword");
const output = document.querySelector(".output");

input.addEventListener("input", crackcheck);
document.addEventListener("DOMContentLoaded", crackcheck);

function crackcheck() {
    const val = input.value;
    const str = stringCheck(val);
    const qty = str.str;
    const range = str.range;

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

    const html = `<h3>How long to crack your password?</h3>
    <div class="w100 my10 fl status status-${status}">${displayDuration}</div>
  <div class="w70 fl"><ul class="signs">${signs}</ul></div>
  <div class="w30 fl sc3">In order to crack your entered password, a hacker needs ${range}<sup class="opc100">${val.length}</sup> attempts with a brute force attack.</div>
  <hr><h3>Our tips for a secure password</h3>
  <p>Always use at least twelve characters. They should have at least one uppercase letter, one lowercase letter and special characters and for even more security, you should also use numbers.</p>
  <p>Never use the same password twice. And use a password manager or write your passwords encrypted for you on a piece of paper that only you can decrypt</p>`;

    const htmlStart = ` `;
    
    if (input.value.length > 0) {
        output.innerHTML = html;
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