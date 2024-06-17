import React from 'react';
import playIcon from '../../../assets/images/icon-play.svg';
import './worddisplay.css';


function WordDisplay() {
    return (
    <>
    <div className='worddisplay-container'>
        <div className='word-header'>
            <h2>WORD</h2>
            <p className='fonetic'>/FONETIC WRITING/</p>
        </div>
        <button className='play-button'>
            <img src={playIcon}  alt="Play icon" className='play-icon' />
        </button>
        </div>
    </>
    )
};


export default WordDisplay;