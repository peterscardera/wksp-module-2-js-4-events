// *sorry in advance I couldnt make it pretty this took me a full day to do and wanted to move on

//CSS style without stylesheet for practice
let body = document.querySelector("body");
body.style.height = "100vh"
body.style.background = "lightgrey"
let clockSection = document.querySelector("#main");
clockSection.style.height = "100px"
clockSection.style.padding = "50px 0px 20px 0px" // didnt want to flex 
let time = document.querySelector("#timenow");
time.style.height = "100px";
time.style.color = "#8B7D6B";
time.style.fontSize = "3rem"
time.style.textAlign = "center";
time.style.border = "thick solid grey"


//Retriving time from built in Date function. new is used before the constructor function
let getTime = function dateGetter() {
   let today = new Date() 
//    console.log(today)
   let hours = today.getHours()
   let minutes = today.getMinutes();
   let divTime = document.querySelector("#timenow");
   divTime.innerText = `${hours}:${minutes}`
}
setInterval(getTime,1000) //if we dont put everysecond it will continuously retieve the time

//------------------------------------------PART-TWO--START/STOP---------------------------------------//
let centerPartTwo = document.getElementById("two");
centerPartTwo.style.textAlign = "center"
centerPartTwo.style.margin = "50px"
centerPartTwo.style.padding = "50px 0 50px 0"
centerPartTwo.style.background ="grey"
centerPartTwo.style.borderRadius ="50%"

let secs = 0;
let mins = 0;
let hours = 0;

//the key on displaying the 0 before *****
let seconds = 0; 
let minutes= 0;
let fullHours =0;

//status of the stopwatch

let status = "stopped";


function getSeconds() { //calling this once per sconde
    secs++;

    if(secs / 60 === 1) {
        secs = 0;
        mins += 1;
    }
    if(mins / 60 === 1) {
        mins = 0;
        hours++;
    }
    if(secs < 10) {
        seconds = "0" + secs.toString()
    } else {
        seconds = secs;
    }
    if (mins < 10) {
        minutes = "0" + mins.toString()
    } else {
        minutes = mins;
    }
    if (hours < 10) {
        fullHours = "0" + hours.toString()
    } else {
        fullHours = hours;
    }
    let stopWatch = document.getElementById("start");
    stopWatch.innerHTML = `${fullHours}:${minutes}:${seconds}`;
 }

//start button
let firstClick = document.getElementById("stopwatch");
firstClick.addEventListener("click", starterStopper)

function starterStopper() {

    if(status == "stopped") {

        interval = setInterval(getSeconds)
        document.getElementById("stopwatch").innerHTML = "Stop!"
        status = "started"
        centerPartTwo.style.background ="green" 

    } else { //else if the stopwatch is starteted
        clearInterval(interval);
        document.getElementById("stopwatch").innerHTML = "Start!"
        status = "stopped"
        centerPartTwo.style.background ="red" 
    }
    
}

let resetB = document.getElementById("reset");
resetB.addEventListener("click", clearStopWatch)

function clearStopWatch() {
window.clearInterval(interval);
secs = 0;
mins = 0;
hours= 0;
document.getElementById("start").innerHTML = "00:00:00"
document.getElementById("stopwatch").innerHTML = "Start!"
}


//--------- part 3 -------- 

//button listener will fire off function
let startButton2 = document.querySelector("#second");
startButton2.addEventListener("click",inter)

//get the data input in the text field

function inter() { //handler
   let num = document.getElementById("inputed").value
    let displayed = document.getElementById("set")
    displayed.innerHTML = `${num}`;
    setInterval(usersCountDown,10000)
}


  let count = document.getElementById("set").value 
        console.log(count)
        
    function usersCountdown() {
       
        if(count > 0) {
            count--
        }else {
        clearInterval(usersCountdown)
        }

    }


