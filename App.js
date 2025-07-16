        //JSX
       import React from "react";
        import ReactDOM from "react-dom";
        const heading1 = React.createElement("h2", {id: "red-heading"}, "I am Abhishek."); //react.createElement is a normal JS object
        const root1 = ReactDOM.createRoot(document.getElementById("root"));
        ReactDOM.render(heading1, document.getElementById("root")); //We are passing JS object. Render is taking the object and converting to html code.
        
        //JSX
        //Create a div
        const parent = React.createElement(
                "div",
                {id: "parent"}, 
                [React.createElement("div", {id: "child1"}, 
                    [React.createElement("h1", {}, "I am an h1 tag."), 
                    React.createElement("h2", {}, "I am an h2 tag."), ]), 
                //If we want a sibling called h2 tag, we need to make it as an array and becomes array of children
                React.createElement("div", {id: "child2"}, 
                    [React.createElement("h1", {}, "I am an h1 tag."), 
                    React.createElement("h2", {}, "I am an h2 tag."), ])
                ]
            );
        console.log(parent); //returns an object. THis is an react element
        root1.render(parent); //We are passing JS object. Render is taking the object and converting to html code.