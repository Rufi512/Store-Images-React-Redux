import React from "react";
import {setScroll} from './SomethingFunctions'
const Bar = () => {
 
  function borderBar(e) {
    const line = document.querySelector("#line");
    const container = document.querySelector(".container-sections");

    line.style.left = e.offsetLeft + "px";
    line.style.width = e.offsetWidth + "px";
   
    if (e.innerHTML === "Explore") {
      container.style.transform = "translateX(0%)";
       setScroll(0)
    } else {
      container.style.transform = "translateX(-100%)";
       setScroll(1)
    }
  }

  return (
    <div className="header">
      <h1>Pic Store</h1>
      <div>
        <nav>
          <ul>
            <li
              onClick={(e) => {
                borderBar(e.target);
              }}
            >
              Explore
            </li>
            <li
              onClick={(e) => {
                borderBar(e.target);
              }}
            >
              Favorites
            </li>
            <div id="line"></div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Bar;

