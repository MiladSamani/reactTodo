import React from "react";

export default function BackDrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}
