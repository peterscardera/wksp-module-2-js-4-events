
function colorChanger(event) {
    const but = event.target.id
    // console.log(but) make sure we get the buttons id
    const newColor = document.getElementById(but) //NO NEED FOR QUOTES!!!!!!!!
    newColor.classList.toggle("green")
    
}

for(let i = 1; i <=20; i++){
    const buttons = document.createElement("button");
    document.getElementById("first").appendChild(buttons)
    buttons.innerText = i
    buttons.id = `button${i}`



    buttons.addEventListener("click",colorChanger)
}