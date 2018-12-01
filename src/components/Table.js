import React from "react";
// import "./Table.css";

function Table() {
  require("./Table.css");
  return (
    <div className="wrapper">
      <div className={"row header"}>
        <div className={"cell"}>Header A</div>
        <div className={"cell"}>HeaderA</div>
        <div className={"cell"}>HeaderA</div>
        <div className={"cell"}>HeaderA</div>
        <div className={"cell"}>HeaderA</div>
      </div>

      <div className={"row"}>
        <div className={"cell"}>A</div>
        <div className={"cell"}>A</div>
        <div className={"cell"}>A</div>
        <div className={"cell"}>A</div>
        <div className={"cell"}>A</div>
      </div>
    </div>
  );
}

export default Table;
