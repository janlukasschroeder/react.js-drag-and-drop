import React from "react";

export default function Margin() {
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",
        position: "relative",
        // marginTop: "auto",
        border: "1px solid"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 50,
          right: 0,
          width: 150,
          height: 150,
          margin: "auto",
          border: "1px solid black"
        }}
      >
        Middle
      </div>
    </div>
  );
}
