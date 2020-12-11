import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

let itvrl;
const App = () => {
  const [timer, setTimer] = useState(0);
  const keyListner = (e) => {
    if(e.keyCode === 13) {
      if(itvrl) {
        clearInterval(itvrl);
      }
      const givenValue = e.target.value;
      let currValue = 0;
      if(!isNaN(givenValue)) {
       currValue = Math.floor(e.target.value) < 0 ? 0 : Math.floor(e.target.value);
      }
      itvrl = setInterval(() =>{
        setTimer(currValue);
        if(currValue === 0) {
          clearInterval(itvrl);
        }
        currValue -= 1;
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