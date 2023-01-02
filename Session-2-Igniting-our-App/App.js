import React from "react";
import ReactDOM  from "react-dom/client";

console.log("APP JS")

/***
 * 
 * HMR - Hot Module Reaload  
 * 
 * 
 */

const element = React.createElement(
    "div",
    { style: { color: "red" } },
    "I am Div 1"
  );
  const element1 = React.createElement(
    "div",
    { id: "element1", style: { color: "blue" } },
    "I am Div 2"
  );
  const container = React.createElement("div", {}, [element, element1]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
  /** 
    ** Below is plain JS
    const element = document.createElement('h1');
    element.textContent="I am vanilla JavaScript :D";
    const root = document.getElementById('root');
    root.appendChild(element) */
  /* let obj = {
    fname: "Tania",
    lname: "Mollah",
    m: function () {
      console.log("1 ", this);
      function foo() {
        console.log("2 ", this);
      }
      foo();
    },
    n: () => {
      console.log("3 ", this);
      let foo = () => {
        console.log("4 ", this);
      };
      foo();
    },
  };
  obj.m();
  obj.n();
  */