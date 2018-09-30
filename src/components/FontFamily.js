import React from "react";

const FontFamily = props => {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.fontFamily(e.target.value)}
      disabled={props.allowEdit === "false"}
    >
      <option value="ariel">arial</option>
      <option value="monospace">monospace</option>
      <option value="courier">courier</option>
    </select>
  );
};
export default FontFamily;
