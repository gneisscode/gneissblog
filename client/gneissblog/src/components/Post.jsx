import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className="post__wrapper">
      <div className="post__container">
        <div className="left">
          <img src="assets/ramen.png" alt="" className="post__img" />
        </div>
        <div className="right">
          <div className="post__date">
            <p>March 23</p>
            <p> &#x2022;</p>
            <p>2 min</p>
          </div>
          <div className="post__content">
            <h1>Do Not Leave Tokyo Before Eating This Ramen</h1>
            <p className="post__text">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>
            <hr />
            <p className="comments">24 Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post