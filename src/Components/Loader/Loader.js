import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <svg className="spinner-svg spinner-header" viewBox="0 0 50 50">
      <circle className="svg-spinner-background" cx="25" cy="25" r="20" />
      <circle className="svg-spinner-spin" cx="25" cy="25" r="20"></circle>
    </svg>
  );
};

export default Loader;
