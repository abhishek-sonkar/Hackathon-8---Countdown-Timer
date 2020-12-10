import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const keyListner = (e) => {
    if(e.keyCode === 13) {
      let currValue = e.target.value;
      const inter = setInterval(() =>{
        currValue -= 1;
        if(currValue === 0) {
          clearInterval(inter);
        }
        setTimer(currValue); 
      }, 1000);
    }
  }
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={ keyListner } />
        </h1>
      </div>
      <div id="current-time">{ timer }</div>
    </div>
  )
}


export default App;