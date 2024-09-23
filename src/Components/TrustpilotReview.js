// TrustpilotReview.js
import React from "react";
import "./Trustpilot.css";

const TrustpilotReview = () => {
  return (
    <div id="trustpilotButton" className="trustpilot-container">
      <a
        href="https://www.trustpilot.com/review/coralacademy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="trustpilot-button"
      >
        <p>Review us on</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Trustpilot_Logo_%282022%29.svg"
          alt="Trustpilot"
          className="trustpilot-logo"
        />
      </a>
    </div>
  );
};

export default TrustpilotReview;
