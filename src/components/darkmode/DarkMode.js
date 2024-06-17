import React from 'react';
import moonIcon from '../../assets/images/icon-moon.svg';
import './darkmode.css';

function DarkMode({ darkMode, handleSetDarkMode }) {
  

  return (
    <div className='dark-mode'>
      <div className={`toggle-container ${darkMode ? 'dark-mode-active' : ''}`}>
        <input 
          type="checkbox" 
          id="check" 
          checked={darkMode} 
          onChange={handleSetDarkMode} 
        />
        <label htmlFor="check" className="toggle-button"></label>
      </div>
      <img 
        alt="moon icon" 
        src={moonIcon} 
        className={`moon-icon ${darkMode ? 'moon-icon-checked' : ''}`} 
      />
    </div>
  );
}

export default DarkMode;