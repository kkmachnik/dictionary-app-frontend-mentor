import React from 'react';
import './footer.css';

function Footer({darkMode}) {

  return (
   
   <div className={`footer-container ${darkMode ? 'dark-mode-active' : ''}`}>
        <span className={`horizontal-line ${darkMode ? 'hl-dark-mode-active' : ''}`}></span>
        <p>Challenge by <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Coded by Karolina Machnik.</p>
   </div>
  );
}

export default Footer;