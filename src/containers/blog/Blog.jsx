import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-content_container">
        <div className="gpt3_blog-content-box1">
          <Article
            image={blog01}
            date={"20 june 2023"}
            text={"GPT-3 and Open  AI is the future. Let us explore how it is?"}
          />
        </div>
        <div className="gpt3_blog-content-box2">
          <Article
            image={blog02}
            date={"2 march 2023"}
            text={"GPT-3 and Open  AI is the future. Let us explore how it is?"}
          />
          <Article
            image={blog03}
            date={"21 may 2023"}
            text={"GPT-3 and Open  AI is the future. Let us explore how it is?"}
          />
          <Article
            image={blog04}
            date={"13 january 2023"}
            text={"GPT-3 and Open  AI is the future. Let us explore how it is?"}
          />
          <Article
            image={blog05}
            date={"25 september 2023"}
            text={"GPT-3 and Open  AI is the future. Let us explore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
