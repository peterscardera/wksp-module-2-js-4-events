# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

#### User Interface Events

- `load`
- `unload`
- `error`
- `resize`
- `scroll`

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus`
- `blur`
- `focusin` (_new; not supported by Firefox_)
- `focusout` (_new; same as blur; not supported by Firefox_)

---

##### Mouse Events

- `click`
- `dblclick`
- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout`
- `mousemove`

---

##### Keyboard Events

- `input`
- `keydown`
- `keypress`
- `keyup`

---

### Form Events

- `submit`
- `change`
- `input`

---

### HTML5 Events

- `DOMContentLoaded`
- `hashchange`
- `beforeunload`

---

### CSS Events

- `transitionend`
- `animationstart`
- `animationend`

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example
const button = document.getElementbyId("btn")
button.addEventListener("click, function() {
    console.log("ouch");
})

//beter way to avoid repeating this for others (we add a handler)

const button = document.getElementBYId("btn");
function handleOuch = function() {
    console.log("ouch");
}

//add it
button.addEventListener("click, handleOuch);


//remove it
button.removeEventListener("click,handleOuch);

```


---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`
- `target`
- `stopPropagation()`

---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click `submit` in a Form

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target

- The  `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

Example of using capture phase:

var p - document.querySelector('#parent');
p.addEventListener("click, function() {
    console.log("parent click")
},true );  //we have to pass the true variable after the callback

var c = document.querySelector("#child");
c.addEeventlistener("click, function() {
    console.log("child clicked)
}, true) //we have to pass the true variable after the callback

//returns "parent clicked" "Child clickded"

If we didnt put the true it would bubble and we could get child clicked log first

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    
let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});

button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
});
```
---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

//extra notes
function pageLoadedHandler() {
    alert("im alive")
}
window.onload = pageLoadedHandler (notice we are not calling the function just assigning it)


(onload is triggered when the browser has fully loaded and displayed and built out the DOM)






---
