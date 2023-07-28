import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let greeting = "";
let time = new Date().getHours();
const cssStyle = {};

if (time >= 1 && time < 12) {
  greeting = " Good Morning ";
  cssStyle.color = "green";
} else if (time >= 12 && time < 17) {
  greeting = " Good Afternoon ";
  cssStyle.color = "orange";
}else if (time >= 17 && time < 19){
  greeting = 'Good Evening';
}else {
  greeting = " Good Night ";
  // cssStyle.color= 'black';
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="Greetings">
      <h1>
        <p>Hello Sir, <span style={cssStyle}>{greeting}</span></p>
      </h1>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
