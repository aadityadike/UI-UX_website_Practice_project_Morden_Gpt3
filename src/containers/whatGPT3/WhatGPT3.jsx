import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatGpt3 section_margin" id="whGpt3">
      <div className="gpt3_whatGpt3-feature">
        <Feature
          Title={"What is GPT-3"}
          Text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>
      <div className="gpt3_whatGpt3-heading">
        <h1 className="gradient_text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3_whatGpt3-container">
        <Feature
          Title={"Chatbots"}
          Text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          }
        />
        <Feature
          Title={"Knowledgeable"}
          Text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
          }
        />
        <Feature
          Title={"Education"}
          Text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
