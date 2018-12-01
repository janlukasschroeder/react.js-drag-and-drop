import React from "react";
// import "./FullscreenScroll.css";

function FullscreenScroll() {
  require("./FullscreenScroll.css");
  return (
    <div className="screen">
      <div className="page">
        <Page />
      </div>
    </div>
  );
}

const Page = () => {
  const children = [];
  for (let i = 0; i < 100; i++) {
    children.push(<div key={i}>{i}</div>);
  }
  return children;
};

export default FullscreenScroll;
