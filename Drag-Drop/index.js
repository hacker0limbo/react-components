import React from "react";
import ReactDOM from "react-dom";
import Draggable from "./Draggable";

import "./styles.css";

const App = () => {
  return (
    <div>
      <h1>Draggable Example</h1>
      <Draggable
        onDragStart={() => console.log("start")}
        onDrag={(e) => console.log(e, "dragging")}
        onDragEnd={() => console.log("end")}
      >
        <div className="circle">脱</div>
      </Draggable>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
