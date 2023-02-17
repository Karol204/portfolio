import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <h1>Hello there</h1>

      <div className="desc_container">
        <p>If you willing to contact me send me a message through:</p>
        <p>Email: krogalski204@gmail.com</p>
        <p>
          Or{' '}
          <a href="https://www.linkedin.com/in/karol-rogalski/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
