import React from 'react'
import Post from './Post'
import './Posts.css'

const Posts = () => {
  return (
    <div className="posts__wrapper">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts
