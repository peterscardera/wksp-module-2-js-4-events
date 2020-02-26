// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let fullPage = document.querySelector("body");

fullPage.style.height = "100vh";

let screen = document.getElementById("main");

function clickerHandler() {
    screen.innerHTML = "YOU CLICKED"
};


fullPage.addEventListener("click", clickerHandler )
