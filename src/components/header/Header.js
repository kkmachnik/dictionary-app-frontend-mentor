import React from 'react';
import logoIcon from '../../assets/images/logo.svg';
import FontSelector from '../fontselector/FontSelector.js';
import DarkMode from '../darkmode/DarkMode.js'
import './header.css';

function Header({currentFont, handleSetFont, handleSetDarkMode, handleShowOptions, showOptions, darkMode}) {

    return (
    <div className={`header-container ${darkMode ? 'dark-mode-active' : ''}`}  >
         <img src={logoIcon} alt='logo icon'/>
         <div className='options-container'>
            <FontSelector
                    currentFont={currentFont}
                    showOptions={showOptions}
                    handleShowOptions={handleShowOptions}
                    darkMode={darkMode}
                    setFont={handleSetFont}
                />
            <span className='vertical-line'></span>
            <DarkMode  handleSetDarkMode={handleSetDarkMode} darkMode={darkMode}/>
         </div>
    </div>
    )
};


export default Header;