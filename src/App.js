import React, { useState } from 'react';
import Header from './components/header/Header.js';
import SearchBar from './components/searchbar/SearchBar.js';
import WordCard from './components/wordcard/WordCard.js';
import Footer from './components/footer/Footer.js';
import './app.css';


function App() {
  const [currentFont, setCurrentFont] = useState('Sans Serif');
  const [darkMode, setDarkMode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [word, setWord] = useState('');


  function handleSetFont(font) {
    setCurrentFont(font)

  };

  function handleSetDarkMode() {
    setDarkMode(!darkMode);
  };

  function handleShowOptions() {
    setShowOptions(!showOptions)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleWordSearch = (e) => {
    e.preventDefault();
    setWord(inputValue);
    // Add any additional search logic here, such as an API call
  };
  return (
    <div className={`app-container ${darkMode ? 'dark-mode-active' : ''} ${(currentFont ==='Serif') ? 'lora-font-theme' : ' '} ${(currentFont ==='Mono') ? 'inconsolata-font-theme' : ' '}  ${(currentFont ==='Lora') ? 'lora-font-theme' : ' '}  `}  >
      <Header   currentFont={currentFont}
                handleSetFont={handleSetFont}
                handleSetDarkMode={handleSetDarkMode}
                darkMode={darkMode}
                showOptions={showOptions}
                handleShowOptions={handleShowOptions} />
      <SearchBar darkMode={darkMode} handleWordSearch={handleWordSearch} handleInputChange={handleInputChange} inputValue={inputValue}/>
      <WordCard darkMode={darkMode} /> 
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
