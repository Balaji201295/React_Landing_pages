import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { Blog_1, Blog_2, Blog_3, Blog_4, Blog_5 } from "../../assets";
const Blog = () => (
  <article className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={Blog_1}
          date="January 12, 2021"
          title="GPT-3 and Open  AI is the future. Let us explore how it is?"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={Blog_2}
          date="March 18, 2021"
          title="GPT-3 and Open  AI is the future. Let us explore how it is?"
        />
        <Article
          imgUrl={Blog_3}
          date="May 23, 2021"
          title="GPT-3 and Open  AI is the future. Let us explore how it is?"
        />
        <Article
          imgUrl={Blog_4}
          date="August 07, 2021"
          title="GPT-3 and Open  AI is the future. Let us explore how it is?"
        />
        <Article
          imgUrl={Blog_5}
          date="October 11, 2021"
          title="GPT-3 and Open  AI is the future. Let us explore how it is?"
        />
      </div>
    </div>
  </article>
);
export default Blog;
