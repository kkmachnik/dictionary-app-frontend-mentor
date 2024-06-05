import React from "react"; 
import WordDisplay from './WordDisplay.js';
import WordDefinitions from './WordDefinitions.js';
import './wordcard.css'

function WordCard() {
    return (
        <div className="word-container">
            <h1>i am word card</h1>
            <WordDisplay />
            <WordDefinitions />
        </div>
    )
};

export default WordCard;