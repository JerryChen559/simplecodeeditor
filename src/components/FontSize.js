import React from "react";

const FontSize = props => {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.fontSize(+e.target.value)}
      disabled={props.allowEdit === "false"}
    >
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="18">18</option>
    </select>
  );
};

export default FontSize;
