import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "../src/style";
import Hello from "../src";

function App() {
  return (
    <div className="design-area">
      <Hello />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
