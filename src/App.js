import Header from './components/header/Header.js';
import SearchBar from './components/searchbar/SearchBar.js';
import WordCard from './components/wordcard/WordCard.js'
import React from 'react';
import './app.css';


function App() {
  return (
    <div className='app-container'>
      <Header />
      <SearchBar />
      <WordCard /> 
    </div>
  );
}

export default App;
