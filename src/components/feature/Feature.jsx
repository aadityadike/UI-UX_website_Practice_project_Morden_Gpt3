import React from "react";
import "./feature.css";

const Feature = ({ Title, Text }) => {
  return (
    <div className="gpt3_features-container_feature">
      <div className="gpt3_features-container_feature-title">
        <div />
        <h1>{Title}</h1>
      </div>
      <div className="gpt3_features-container-text">
        <p>{Text} </p>
      </div>
    </div>
  );
};

export default Feature;
