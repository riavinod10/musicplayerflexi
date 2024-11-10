jsx
// src/components/Grid.js
import React from "react";
import { Link } from "react-router-dom";

const Grid = () => {
  return (
    <div className="grid-container">
      {Array.from({ length: 9 }, (_, index) => {
        const item = index + 1;
        return (
          <Link to={`/page${item}`} className="grid-item" key={item}>
            <img src={`./icon${item}.png`} alt={`Icon ${item}`} /> Item {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Grid;
