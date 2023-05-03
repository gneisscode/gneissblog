import React from 'react'
import Post from './Post'
import './posts.css'

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