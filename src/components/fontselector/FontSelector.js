import React from 'react';
import dropdownIcon from '../../assets/images/icon-arrow-down.svg';
import FontList from '../fontlist/FontList.js'
import './fontselector.css';

function FontSelector({currentFont, setFont, showOptions, handleShowOptions, darkMode}) {
    
    return (
    <div className={`font-choice-container ${darkMode ? 'dark-mode-active' : ''}`} > 
            <button onClick={handleShowOptions} className='theme-mode'>    
                <p className={`font-choice ${darkMode ? 'dark-mode-active' : ''}`}>{currentFont}</p>
                <img src={dropdownIcon}  alt='dropdown icon' className='button'/>
            </button>
            <div>
                {showOptions ? <FontList darkMode={darkMode} setFont={setFont}/> : null}
            </div>
    </div>
    )
};

export default FontSelector;