//App.js

/*
JSX
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h2", {id: "red-heading"}, "I am Abhishek."); //react.createElement is a normal JS object
ReactDOM.render(heading1, document.getElementById("root")); //We are passing JS object. Render is taking the object and converting to html code.

JSX
Create a div
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child1", key: "child1" },
        [React.createElement("h1", { key: "h1-1" }, "I am an h1 tag."),
        React.createElement("h2", { key: "h2-1" }, "I am an h2 tag."),]),
    //If we want a sibling called h2 tag, we need to make it as an array and becomes array of children
    React.createElement("div", { id: "child2", key: "child2" },
        [React.createElement("h1", { key: "h2-1" }, "I am an h1 tag."),
        React.createElement("h2", { key: "h2-2" }, "I am an h2 tag."),])
    ]
);
console.log(parent); //returns an object. THis is an react element
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent); //We are passing JS object. Render is taking the object and converting to html code.
*/

/*
REACT:
import React from "react";
import ReactDOM from "react-dom/client";

React.createElement => ReactElement-JS Object =>HTMLElement(render)

React.createElement: Creates an object. When we render this element onto the DOM, it becomes HTML element
const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🚀");
console.log(heading);

JSX is not part of React. We can write React without jsx also, but jsx akes our lives easy.
JSX is not HTML in JavaScript. JSX is HTML like syntax
JSX (Babel converts JSX to React.createElement) => transpiled to React.createElement => ReactElement-JS object => HTMLElement(render)
const heading = (
    <h1 id="heading" tabIndex="5">
        Welcome to Namaste React 😄
    </h1>
); 
This is not pure JS. JS engine cannot read this code. Parcel is doing the job behind the scenes. Even before this code goes to the browser, it is transpiled before it goes to JS engine and then JS engine receives the code that browsers understand
JSX (transpiled before it reaches to JS) - PARCEL - Babel(JS Compiler)
console.log(heading)

If I have to render inside root, since we are dealing with browsers, we should use ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDOM takes this object and pushes it to browser. Meaning, it will replace whatever is inside root from .html file to what is written in App.js. 
To render on HTML
root.render(heading);
*/

