const balloon = document.getElementById("balloon");

let balloonSize = 40;
balloon.style.fontSize =`${balloonSize}px`
const MIN_SIZE = 6;
const MAX_SIZE = 100;
const INCREMNT = 2;
const MAX_EXPLOSION_SIZE = 400;



function handleKeydown(event) { 
    if (event.key == "ArrowUp") {
        balloonSize += INCREMNT;
        balloon.style.fontSize = `${balloonSize}px`
        if(balloonSize > MAX_SIZE) {
            document.removeEventListener("keydown", handleKeydown);
            balloon.innerText = "💥";
            const explosion = setInterval(function(){
                balloonSize += 1;
                balloon.style.fontSize = `${balloonSize}px`
                if (balloonSize > MAX_EXPLOSION_SIZE) {
                    clearInterval(explosion);
                    balloon.style.opacity = 0;
                }
            },20); //we have to set a limit now or it will continue
        }
        
    }else if (event.key === "ArrowDown") {
        if(balloonSize > MIN_SIZE) {
            balloonSize -= INCREMNT;
            balloon.style.fontSize = `${balloonSize}px` //telling the dom to reflec this!!!
       
        }

    }
}



//we need an event listener that listens for a "keydown" 
//if "arrrow up" 
    //ballo bigger 
        //if ballow is bigger than X
            //remove the event listener
            //then remove the balloon and add baloon explosion
            // explosion grows inrementally
                    //if explosion size is y
                    //  stop growing
                    //fadout (so that the explosion pic comes in)
//if arrow down"
    //balloon smaller
    //if balloon iz z in size
    

    document.addEventListener("keydown" ,handleKeydown);