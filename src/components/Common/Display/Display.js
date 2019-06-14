import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ displayValue }) => (
  <div className="display-container">
    <p className="display-value">{displayValue}</p>
  </div>
);

Display.prototype = { displayValue: PropTypes.string.isRequired };

export default Display;
