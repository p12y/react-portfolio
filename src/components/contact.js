import React from 'react';
import Header from './header';
const Contact = () => {
  return (
    <div className="container contact">
      <Header title="Let's talk" />
      <p className="text-center lead mono">Questions? Email me at <span className="pink-underline">ptylde@gmail.com</span></p>
    </div>
  );
}

export default Contact;