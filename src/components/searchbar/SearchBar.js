import React, { useState } from 'react';
import './searchbar.css';
import searchIcon from '../../assets/images/icon-search.svg';

function SearchBar({darkMode, handleWordSearch, inputValue, handleInputChange}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`search-container ${darkMode ? 'dark-mode-active' : ''} ${isFocused ? 'focused' : ''}`}>
                <form className='form-container' onSubmit={handleWordSearch}>
                    <input
                    className={`searchbar`}
                    placeholder='Search for any word...'
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    />
                    <button type="submit" className='search-button'>
                    <img src={searchIcon} alt='search icon' className='button' />
                    </button>
                </form>
        </div>
    )
};


export default SearchBar;