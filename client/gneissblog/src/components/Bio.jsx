import React from 'react'
import './bio.css'

const Bio = () => {
  return (
    <div className="bio__wrapper">
      <div className="about__container">
        <h1>ABOUT ME</h1>
        <div className="top">
          <img src="assets/pic.jpg" alt="" className="about__img" />
        </div>
        <div className="bottom">
          <div className="about__content">
            <p className="about__text">
              I’m a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="more">Read More...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio