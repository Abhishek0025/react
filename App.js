import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = (
//   <h1 className="head" tabIndex="5">
//     Welcome to the web app with React.js 🚀
//   </h1>
// );
// console.log(heading);

// React Component
/*
    Types:
    1. Class Based Component: OLD way
    2. Functional Component: NEW way
*/

// Functional Component: Returns a piece of jsx. (A JS function that returns a react element)
const Title = () => {
    return (
      <div id="container">
        <h1 className="heading">Welcome to the web app with React.js 🚀</h1>
      </div>
    );
}

// Render title component inside heading component
// You can use normal functions and arrow functions as well

/*
    If you have curly braces inside a component, we can evaluate any expression.
    If you want to add react element inside the functional component, enclose the element with the {} braces. Prevents cross-site scripting by sanitising it
    We can also call functional component like {Title()} inside another component
    We can put component inside an element also
*/
const HeadingComponent = () => {
    return (
      <div id="container">
        <Title />
        {Title()}
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
      </div>
    );
};


// Component composition is the classic example for the above code which is adding Title component inside another component
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); This is the way to render react element, for functional components, it is done differently
root.render(<HeadingComponent />); // Render a functional component
