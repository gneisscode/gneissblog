import React from 'react'
import './contactForm.css'

const ContactForm = () => {
  return (
    <div className='contact__wrapper'>
      <h1>Drop Me a Line, Let Me Know What You Think</h1>
      <div className="name">
        <div className="detail__wrapper">
          <div className="label">First Name</div>
          <input type="text" />
        </div>

        <div className="detail__wrapper">
          <div className="label">Last Name</div>
          <input type="text" />
        </div>
      </div>
      <div className="detail__wrapper">
        <div className="label">Email *</div>
        <input type="email" />
      </div>
      <div className="detail__wrapper">
        <div className="label">Message</div>
        <textarea rows="6" ></textarea>
      </div>
      <button className='contact__btn'>Submit</button>
    </div>
  );
}

export default ContactForm