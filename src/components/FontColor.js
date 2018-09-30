import React from "react";

const FontColor = props => {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.fontColor(e.target.value)}
      disabled={props.allowEdit === "false"}
    >
      <option value="black">Black</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
  );
};

export default FontColor;
