import React from "react";
// import "./Dropdown.css";

function App() {
  require("./Dropdown.css");
  return (
    <div className="wrapper">
      <DragAndDrop />
    </div>
  );
}

const Dropdown = () => {
  return "";
};

const DragAndDrop = () => {
  const elements = ["PE Ratio", "Rev. Growth", "Employees"];
  const children = elements.map(DragAndDropElement);
  return <div className={"drag-and-drop-wrapper"}>{children}</div>;
};

const DragAndDropElement = element => {
  return (
    <div
      className={"row"}
      draggable={true}
      onDragStart={() => console.log("Start dragging " + element)}
      // onDragOver={e => console.log("Over " + element)}
      onDragEnter={e => console.log("Sees me " + element)}
      onDragLeave={e => console.log("Left me..." + element)}
    >
      <Drag /> {element}
    </div>
  );
};

const Drag = () => {
  return <div className={"drag"}>||| </div>;
};

export default App;
