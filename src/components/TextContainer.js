import React, { Component } from "react";

export class TextContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  updateText(val) {
    this.setState({ text: val });
  }

  render() {
    return (
      <div className="textContainer">
        <textarea
          // passing props to in-line styling
          style={{
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize,
            color: this.props.fontColor
          }}
          onChange={e => this.updateText(e.target.value)}
          placeholder="Type something!"
          value={this.state.text}
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}

export default TextContainer;
