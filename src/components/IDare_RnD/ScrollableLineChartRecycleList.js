import React from "react";

export default function ScrollableLineChartRecycleList({ serial }) {
  const spanDesign = {
    fontSize: '12px'
  }
  return (
    <div className="ListItem">
      {/* Image number: {no} &emsp;
      <img src={url} alt={alt} /> */}
      <span style={spanDesign}>{serial}</span>
    </div>
  );
}