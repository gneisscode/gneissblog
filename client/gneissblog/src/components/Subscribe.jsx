import React from 'react'
import './subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe__wrapper">
      <p>Never Miss a New Post.</p>
      <div className="sub__form">
        <div className='input__box'>
            <div>Enter your email *</div>
          <input type="text" className="sub__input" />
        </div>
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe