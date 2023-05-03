import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured__wrapper">
      <div className="post">FEATURED POST</div>
      <div className="feat__container">
        <img src="assets/book.png" alt="" className="feat__img" />
        <div className="date">
          <p>March 23&nbsp; &nbsp; &#x2022;</p>
          <p>&nbsp; &nbsp; 2 min</p>
        </div>
        <div className="content">
          <h1>Back to Fiction: What I'm Reading This Summer</h1>
          <p className="feat__text">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
