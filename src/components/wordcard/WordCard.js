import React from "react"; 
import WordDisplay from './worddisplay/WordDisplay.js';
import WordDefinitions from './worddefinitions/WordDefinitions.js';
import './wordcard.css'

function WordCard({darkMode}) {
    return (
        <div className={`word-container ${darkMode ? 'dark-mode-active' : ''}`}  >
            <h1>i am word card</h1>
            <WordDisplay />
            <WordDefinitions />
        </div>
    )
};

export default WordCard;