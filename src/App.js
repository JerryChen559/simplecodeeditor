import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EditToggle from "./components/EditToggle";
import FontColor from "./components/FontColor";
import FontFamily from "./components/FontFamily";
import FontSize from "./components/FontSize";
import TextContainer from "./components/TextContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: "black",
      fontSize: "12",
      fontFamily: "monospace",
      allowEdit: true
    };

    this.toggleEditStatus = this.toggleEditStatus.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
  }

  // open/close access to edit components
  toggleEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  // methods to control font
  updateColor(val) {
    this.setState({ fontColor: val });
  }
  updateSize(val) {
    this.setState({ fontSize: val });
  }
  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  //maybe add one component at end, or replace on existing one.

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Code Editor</h1>
        </header>
        <div className="headerBar">
          {/* Render EditToggle */}
          <EditToggle update={this.toggleEditStatus} />
          {/* Render ColorChanger - SizeChanger - FamilyChanger*/}
          <FontColor
            allowEdit={this.state.allowEdit}
            fontColor={this.updateColor}
          />
          <FontFamily
            allowEdit={this.state.allowEdit}
            fontFamily={this.updateFamily}
          />
          <FontSize
            allowEdit={this.state.allowEdit}
            fontSize={this.updateSize}
          />
        </div>

        <div className="textArea">
          {/* Render TextContainer */}
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    );
  }
}

export default App;
