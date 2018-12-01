import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table";
import Margin from "./components/Margin";
import FullscreenScroll from "./components/FullscreenScroll";
import Dropdown from "./components/Dropdown";
import DragAndDrop from "./components/DragAndDrop";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<DragAndDrop />, rootElement);
