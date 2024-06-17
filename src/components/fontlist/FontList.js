import React from 'react';
import './fontlist.css';

function FontList({darkMode, setFont}) {
    const fonts = ['Sans Serif', 'Serif', 'Mono'];

    return (
    <div className={`font-selection ${darkMode ? 'dark-mode-active' : ''}`} >  
            <ul>
                {fonts.map((font, index) => (
                    <li key={index} onClick={() => setFont(font)}>
                    {font}
                </li>
                ))}
            </ul>
    </div>
    )
};

export default FontList;