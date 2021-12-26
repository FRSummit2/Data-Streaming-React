import React from "react";

export default function ImageRow({ no, url, alt }) {
  const spanDesign = {
    fontSize: '12px'
  }
  return (
    <div className="ListItem">
      {/* Image number: {no} &emsp;
      <img src={url} alt={alt} /> */}
      <span style={spanDesign}>{no} {alt}</span>
    </div>
  );
}