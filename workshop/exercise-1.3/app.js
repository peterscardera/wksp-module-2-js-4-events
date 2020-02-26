// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.


let body = document.querySelector("body");
body.style.height = "100vh"
body.style.background = "lightgrey"

///RANDOM NUMBER MAX 5 and cant start at 0 
let time = document.getElementById("timer")
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
    document.getElementById("timer").innerText = countDownStart
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



/// at the you lose stage it should remain you lose not be able to change