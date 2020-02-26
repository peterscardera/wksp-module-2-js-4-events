// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

//"Anywhere on the screen"
let body = document.querySelector("body");
body.style.height = "100vh"
body.style.background = "lightgrey"

///RANDOM NUMBER MAX 5 and cant start at 0 
let time = document.getElementById("time")
const number = Math.floor(Math.random() * 5) + 1 // so that its never 0
time.innerText =  number //or `countdown${number}`

//TAKING THE RANDOM NUMBER AND COUNTING IT DOWN
let countDownStart = number;

let starter = setInterval(startF, 1000)

function startF() {
    // let countDownStart = number; cant be in the function
    countDownStart--
    if(countDownStart === 0) {
         let answer = document.querySelector("#result");
        answer.innerText = ("You lose") 
        clearInterval(starter);
    }
}

//Event Handler if click
function clickHandler() {
    clearInterval(starter);
    
    if(number >= 1) {
        let answer = document.querySelector("#result");
        answer.innerText = ("You Win")
    }
}

body.addEventListener("click",clickHandler);

