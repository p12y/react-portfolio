import React from 'react';
import Header from './header';
import Ionicon from 'react-ionicons';

const Contact = () => {
  return (
    <div id="contact" className="container contact">
      <Header title="Let's talk" />
      <p className="text-center lead mono">Questions? Email me at <span className="pink-underline"><a href="mailto:ptylde@gmail.com?Subject=Hello" target="_top">ptylde@gmail.com</a></span></p>
        <p className="text-center small-text mono">Or find me on social media</p>     
        <p className="text-center"><div className="media-icons"><a href="https://github.com/p12y" target="_blank"><Ionicon icon="ion-social-octocat" fontSize="50px" color="black"/></a>
        <a href="https://www.instagram.com/petetyldesley/" target="_blank"><Ionicon icon="ion-social-instagram" fontSize="50px" color="black"/></a>
        </div></p>
    </div>
  );
}

export default Contact;

