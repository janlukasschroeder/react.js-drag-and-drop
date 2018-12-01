import React from "react";

class App extends React.Component {
  initialState = {
    elementsA: ["PE Ratio", "Rev. Growth", "Employees", "Price", "COGS"],
    elementsB: [],
    dragSource: null,
    dragTarget: null
  };
  constructor(props) {
    super(props);
    this.init();
    this.state = this.initialState;
    this.onDrop = this.onDrop.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragExit = this.onDragExit.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.isDragSource = this.isDragSource.bind(this);
    this.isValidDragTarget = this.isValidDragTarget.bind(this);
    this.isDragTarget = this.isDragTarget.bind(this);
    this.moveElement = this.moveElement.bind(this);
  }

  init() {
    require("./DragAndDrop.css");
  }

  onDrop(e) {
    if (this.isValidDragTarget(this.state.dragTarget)) {
      e.preventDefault();
      const elementId = e.dataTransfer.getData("text/plain");
      this.moveElement(elementId);
    }
  }

  moveElement(id) {
    const sourceElements = this.state[this.state.dragSource].filter(
      e => e !== id
    );
    this.setState(state => ({
      [this.state.dragTarget]: [...state[this.state.dragTarget], id],
      [this.state.dragSource]: sourceElements,
      dragSource: null,
      dragTarget: null
    }));
  }

  onDragStart(source) {
    console.log("onDragStart " + source);
    this.setState({ dragSource: source });
  }

  onDragEnter(e, id) {
    console.log(e.target.id);
    console.log("onDragEnter - " + id + " " + new Date());
    // if (this.isValidDragTarget(id)) {
    // e.preventDefault();
    if (this.isValidDragTarget(id)) {
      console.log("set target: " + id);
      this.setState({ dragTarget: id });
    }
    // }
  }

  onDragOver(e, id) {
    if (this.isDragTarget(id)) {
      e.preventDefault(); // activate drop zone
    }
  }

  onDragLeave(e, id) {
    console.log("onDragLeave " + e.target.id);
    // if (this.isDragSource(id)) {
    //   return this.setState({ dragSource: null });
    // }
    // if (this.isValidDragTarget(id)) {
    if (id === this.state.dragTarget) {
      this.setState({ dragTarget: null });
    }

    // }
  }

  onDragExit() {
    // this.setState({ dragTarget: null });
  }

  onDragEnd() {
    this.setState({ dragSource: null, dragTarget: null });
  }

  isValidDragTarget(id) {
    return (
      // id === this.state.dragTarget &&
      id !== this.state.dragSource
    );
  }

  isDragTarget(id) {
    return id === this.state.dragTarget && this.state.dragTarget !== null;
  }

  isDragSource(id) {
    return id === this.state.dragSource;
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div style={{ display: "inline-block" }}>
            <DragAndDrop
              elements={this.state.elementsA}
              id={"elementsA"}
              onDrop={this.onDrop}
              onDragStart={this.onDragStart}
              onDragEnter={this.onDragEnter}
              onDragOver={this.onDragOver}
              onDragLeave={this.onDragLeave}
              onDragExit={this.onDragExit}
              onDragEnd={this.onDragEnd}
              // isValidDragTarget={this.isValidDragTarget}
              isDragTarget={this.isDragTarget}
              isDragSource={this.isDragSource}
            />
            <DragAndDrop
              elements={this.state.elementsB}
              id={"elementsB"}
              onDrop={this.onDrop}
              onDragStart={this.onDragStart}
              onDragEnter={this.onDragEnter}
              onDragOver={this.onDragOver}
              onDragLeave={this.onDragLeave}
              onDragExit={this.onDragExit}
              onDragEnd={this.onDragEnd}
              // isValidDragTarget={this.isValidDragTarget}
              isDragTarget={this.isDragTarget}
              isDragSource={this.isDragSource}
            />
          </div>
          <div>
            <pre>{JSON.stringify(this.state, null, 1)}</pre>
          </div>
        </div>
      </>
    );
  }
}

class DragAndDrop extends React.Component {
  constructor(props) {
    console.log("Creating component " + props.id);
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }

  onDragOver(e) {
    this.props.onDragOver(e, this.props.id);
    // const { id, isDragSource, isDragTarget } = this.props;
    // if (isDragSource(id) !== isDragTarget(id)) {
    //   e.preventDefault(); // used to indicate drop zone
    // }
  }

  onDragEnter(e) {
    this.props.onDragEnter(e, this.props.id);
    // console.log("Entering " + this.props.id);
    // const { id, isDragSource, isDragTarget } = this.props;
    // if (isDragSource(id) !== isDragTarget(id)) {
    //   e.preventDefault(); // used to indicate drop zone
    // }
  }

  onDragLeave(e) {
    // console.log("Exiting");
    if (e.target.id === this.props.id) {
      this.props.onDragLeave(e, this.props.id);
    }
  }

  onDragExit(e) {
    // console.log("Exiting");
    // this.props.onDragExit(this.props.id);
  }

  onDragStart(e) {
    // console.log("Drag start at " + this.props.id);
    this.props.onDragStart(this.props.id);
  }

  onDragEnd(e) {
    // console.log("Drag end " + this.props.id);
    this.props.onDragEnd();
  }

  onDrop(e) {
    // console.log("Dropped in " + this.props.id);
    // const data = e.dataTransfer.getData("text/plain");
    // e.target.appendChild(document.getElementById(data));
    // if (this.props.dragTarget !== this.props.id) {
    //   e.preventDefault();
    //   this.props.onDrop(e);
    // }
    this.props.onDrop(e);
  }

  render() {
    const focused = this.props.isDragTarget(this.props.id) ? "drag-enter" : "";
    return (
      <div
        id={this.props.id}
        key={this.props.id}
        className={"drag-and-drop-wrapper " + focused}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragEnter={this.onDragEnter}
        onDragLeave={e => this.onDragLeave(e)}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
      >
        {this.props.elements.map(e => (
          <DragAndDropElement key={e} element={e} />
        ))}
      </div>
    );
  }
}

const DragAndDropElement = ({ element }) => {
  const onDragStart = e => {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dropEffect = "move";
  };
  return (
    <div
      key={element}
      id={element}
      className={"row"}
      draggable={true}
      onDragStart={onDragStart}
      // onDragEnter={e => e.stopPropagation()}
      // onDragOver={e => e.stopPropagation()}
      // onDragEnd={onDragEnd}
    >
      <Drag /> {element}
    </div>
  );
};

const Drag = () => {
  return <div className={"drag"}>||| </div>;
};

const Box = elements => {
  return <div className={"drag-and-drop-wrapper"}>...</div>;
};

export default App;
