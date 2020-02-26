//Global Variables
let playerOnePoints = [];
let playerTwoPoints = [];

let body = document.querySelector("body");

let restart = document.createElement("button")
restart.innerHTML = "Play Again!";
restart.id = "simpleRefresh";
restart.addEventListener('click',()=>{
    window.location.reload();
})


// let prize = new Image(130,100);
// prize.src = "./imgs/prize.gif";

//injecting the start
let divContainer = document.querySelector("#container");
let start = document.createElement("button")
start.innerHTML = "Start Game!";
start.id = "startButton";
// start.classList.add("pressedEffect");
divContainer.appendChild(start);

//injecting the instructions button
instructions = document.createElement("button");
instructions.innerHTML = "Instructions";
instructions.id = "instructionButton";
// instructions.classList.add("pressedEffect");
divContainer.appendChild(instructions);

//creating a main listener to practice switch case allthough no need for here (1 listener 2 buttons)
divContainer.addEventListener("click",buttonHandler);

//main handler
function buttonHandler(event) {
    let buttonId = event.target.id;
    let individualButton = document.getElementById(buttonId);

    
    switch(buttonId) {
        case "startButton":
            individualButton.style.boxShadow = "none";
            individualButton.style.marginBottom= "50px";
            starter();
            setTimeout(function() {
                divContainer.style.display = "none";
            },1000)
            break;
        case "instructionButton":
            individualButton.style.boxShadow = "none";
            individualButton.style.marginTop = "52px";
            let whatToDo = document.createElement("p");
            whatToDo.id = "instructionStyle"
            whatToDo.innerHTML = "Two players wait for a signal to start after a random delay. Once the start signal, first person to press their key wins. If a player presses before the signal appears, they lose. Player one presses the Q key and player 2 presses the p key";
            divContainer.appendChild(whatToDo)
            //remove the particular listener once press or it repeats populating the instructions
            // this.removeEventListener("click",buttonHandler);
            break;
    }
}

//this F will make both players appear and start the internal random counter
function starter() {

//player 2: Sonic
let player2Div = document.querySelector("#player2");
let player2Img = new Image(130,160);
player2Img.src = "./imgs/p2.gif";
player2Div.appendChild(player2Img);

// player 1: curby
let player1Div = document.querySelector("#player1");
let player1Img = new Image(130,160);
player1Img.src = "./imgs/p1.gif"
player1Div.appendChild(player1Img);


//random number to start counting down (between 3ms - 5ms)
let randomNumber = Math.floor(Math.random() * 2213 ) + 3000;
//setTimout will fire the readyGo Function after the random amt of ms set above
setTimeout(readyGo,randomNumber)
}

//Signal to get GO
function readyGo() {
    console.log("go!")
    //container div holding the signal img. I created it here so i could then destroy it and re-call this function
    let goDiv = document.createElement("div");
    body.appendChild(goDiv);
    goDiv.id = "go"
    let goImg = new Image(140,140);
    goImg.src = "./imgs/signal.png";
    goDiv.appendChild(goImg);

//signal sound
    const sound = new Audio("./sounds/signal.mp3")
    sound.play()

//styling + random location
    let randomX = `${Math.floor(Math.random() * 24  ) + (Math.floor(Math.random() * 36))}%`;
    let randomY = `${Math.floor(Math.random() * 16 ) + (Math.floor(Math.random() * 21))}%`;

    goImg.style.position = "absolute";
    goImg.style.top = `${randomY}`;
    goImg.style.left = `${randomX}`;

    //create an eventLister only once they appear
    eventCreator()

}
//This will get fired off to record keys of Q & P but only AFTER the Signal appears on the screen
function eventCreator() {
    
window.addEventListener("keydown",whoWins)

    function whoWins(event){

        if(event.code === "KeyQ" && playerOnePoints.length <= 2 ){
            playerOnePoints.push(1);

            addPlayerOnePoint(); //add the prize function
            removeEventListener("keydown",whoWins); //remove it oe you could continue pressing before restart of round
            let goDiv = document.querySelector("#go");
            goDiv.parentNode.removeChild(goDiv)    //remove the signal
            setTimeout(readyGo,5000); // re-launching the round (max 3)

        }else if(event.code === "KeyP" && playerTwoPoints.length <= 2)  {
            playerTwoPoints.push(1);
            addPlayerTwoPoint(); //add the prize function
            removeEventListener("keydown",whoWins); //remove it oe you could continue pressing before restart of round
            let goDiv = document.querySelector("#go");
            goDiv.parentNode.removeChild(goDiv)    //remove the signal
            setTimeout(readyGo,5000); // re-launching the round (max 3)
    }
 }
}


function addPlayerOnePoint() {
    if(playerOnePoints.length === 1) {
        let prize = new Image(130,100);
        prize.src = "./imgs/prize.gif";
        curbyPoint = document.querySelector("#player1Point1");
        curbyPoint.appendChild(prize);
    }else if(playerOnePoints.length === 2) {
        let prize2 = new Image(130,100);
        prize2.src = "./imgs/prize.gif";
        curbyPoint2 = document.querySelector("#player1Point2");
        curbyPoint2.appendChild(prize2);
    }else if(playerOnePoints.length === 3) {
        let prize3 = new Image(130,100);
        prize3.src = "./imgs/prize.gif";
        curbyPoint3 = document.querySelector("#player1Point3");
        curbyPoint3.appendChild(prize3);
        endGameHandler();
    }
}

// THIS PART I COULD HAVE DONE BETTER...
function addPlayerTwoPoint() {
    if(playerTwoPoints.length === 1) {
        let prize = new Image(130,100);
        prize.src = "./imgs/prize.gif";
        curbyPoint = document.querySelector("#player2Point1");
        curbyPoint.appendChild(prize);
    }else if(playerTwoPoints.length === 2) {
        let prize2 = new Image(130,100);
        prize2.src = "./imgs/prize.gif";
        curbyPoint2 = document.querySelector("#player2Point2");
        curbyPoint2.appendChild(prize2);
    }else if(playerTwoPoints.length === 3) {
        let prize3 = new Image(130,100);
        prize3.src = "./imgs/prize.gif";
        curbyPoint3 = document.querySelector("#player2Point3");
        curbyPoint3.appendChild(prize3);
        endGameHandler();
    }
}


//end of game gandler
function endGameHandler() {
    if(playerOnePoints.length === 3) {
//player 1 wins message
        let div = document.createElement("div");
        div.id = "oneWins"
        div.innerText = "Player 1 Wins!";
        body.appendChild(div);
        body.appendChild(restart);


    }else if(playerTwoPoints.length === 3){
//player 2 wins message
        let div2 = document.createElement("div");
        div2.id = "twoWins"
        div2.innerText = "Player 2 Wins!";
        body.appendChild(div2);
        body.appendChild(restart);
    }
}








console.log(playerTwoPoints);
console.log(playerOnePoints);