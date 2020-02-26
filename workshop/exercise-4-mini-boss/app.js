//Game global variables
let status = "gameOff";
let secs = 5;
let buttonCounter = []; //amount of buttons generated outside the functions scope
let buttonsClicked = [];
console.log(buttonCounter)
console.log(buttonsClicked)


//countdown
function countDown() {
  secs--;
  if ( secs === 0 ) {
    clearInterval(interval2);
  } if( buttonsClicked.length !== buttonCounter && secs < 1 ) {
    let lose = document.getElementById('start');
    lose.innerHTML = "Try Again!";
    lose.style.color = "Red";
    lose.style.fontSize = "2rem";

  }
  startButton.innerHTML = `${secs}`
}

//create buttons (no less than 1)
function buttonCreator() {
let randomAmt = Math.floor(Math.random() * 7) + 1;
 buttonCounter.push(`${randomAmt}`); //**PUSHING OUT THE NUMBER OF RANDOM BUTTONS GENERATED OUT OF THIS FUNCTION TO A GLOBAL VARIABLE */


for(let i = 0; i < randomAmt; i++) {
    let b = document.createElement("button");
    document.getElementById("first").appendChild(b);
    b.innerHTML = i;
    b.id = `${i}`;
    b.addEventListener("click", colorChangerAndButtonCount)

    //random position on screen
    b.style.position = "absolute";
    b.style.left = `${Math.floor(Math.random()* 372)}px`;
    b.style.top = `${Math.floor(Math.random()* 351)}px`;
    }
}
//handler used to fire off 2 functions. first to change color sencond to record how many clicked
function colorChangerAndButtonCount (event) {
  colorChanger(event);
  stats();

}

//button color change on click toggling a class
function colorChanger(event) {
let button = event.target.id;
let colorB = document.getElementById(button);
colorB.classList.toggle("clickedColor"); //game buttons
}

//start button and main handler
let startButton = document.createElement("button")
let start = document.getElementById("start");
start.appendChild(startButton)
startButton.id = "startButton";
startButton.innerHTML = "START";
startButton.style.width = "200px";
startButton.addEventListener("click",gameHandler)

//the main handler that will decide what to fire off once start is clicked
function gameHandler(){
  if(status == "gameOff") {
      interval = setTimeout(buttonCreator,1000) //assigning it to a variable so i could clear the interval
      interval2 = setInterval(countDown,1000);
      startButton.classList.toggle('clickedStart')
      status = "gameOn"
  } else {
      clearTimeout(interval)
      clearInterval(interval2)
      status = "gameOff"
  }
}
//function used to push into array declared on top. To record the buttons clicked
function stats() {
  buttonsClicked.push(1)
  if (buttonsClicked.length == buttonCounter && secs > 0) { //CANNOT BE STRICT EQUAL AS LENGTH ISNT AN ARRAY
    clearInterval(interval2);
    let win = document.getElementById('start');
    win.innerHTML = "YOU WIN!";
    win.style.color = "green";
    win.style.fontSize = "2rem";
    
  } 
}