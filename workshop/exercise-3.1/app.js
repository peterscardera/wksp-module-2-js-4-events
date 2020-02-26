
function colorChanger(event) {
    const eachButton =  event.target.id;
    const b = document.getElementById(eachButton)
    b.style.background = "green"
}




//for loop to loop and create 20 button starting at 1
for(let i = 1;i <= 20;i++) {

const buttonCreator = document.createElement("button");
document.getElementById("first").appendChild(buttonCreator);
//a bit of css
buttonCreator.style.width = "100px";
buttonCreator.style.height = "100px";
buttonCreator.style.margin = "10px"
buttonCreator.style.background = "red"

//an id associated to its number
buttonCreator.innerHTML = i
buttonCreator.id = `button${i}`

//we need an event listener to fire off a function outside of this one
buttonCreator.addEventListener("click",colorChanger)


}