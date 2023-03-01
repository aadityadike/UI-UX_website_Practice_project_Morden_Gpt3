import React from "react";
import "./article.css";

const Article = ({ image, date, text }) => {
  return (
    <div className="gpt3_article">
      <div className="gpt3_article-image_container">
        <img src={image} alt="image" />
      </div>
      <div className="gpt3_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
