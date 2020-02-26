
function colorChanger(event) {
    const but = event.target.id;
    // console.log(but)
    const togColor = document.getElementById(but);
    togColor.classList.toggle("green");
}



for(let i = 1; i <= 20; i++){
    const buttons = document.createElement("button");
    
    buttons.innerHTML = i
    buttons.id = `button N${i}`;
    //RANDOM POSITION ON SCREEN
    buttons.style.position = "absolute"
    buttons.style.left = `${Math.random() * 67}vw`;
    buttons.style.top = `${Math.random() * 83}vh`;
    buttons.style.margin = "120px"

    document.getElementById("first").appendChild(buttons);
    buttons.addEventListener("click",colorChanger);
}

const body = document.querySelector('body');
body.style.height = "100vh";
body.style.width = "100vw";

const containerOfButtons = document.querySelector('div');
containerOfButtons.style.height = "80%"
containerOfButtons.style.width = "80%"