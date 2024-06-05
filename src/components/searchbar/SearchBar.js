import React from 'react';
import './searchbar.css';
import searchIcon from '../../assets/images/icon-search.svg';

function SearchBar() {
    return (
    <div className='div-container'>
        <form className='search-container'>
            <input className='searchbar' placeholder='Search for any word...' type='text'></input>
            <button type="submit" className='button'>
                <img src={searchIcon}  alt='search icon' className='button'/>
            </button>
        </form>
    </div>  
    )
};


export default SearchBar;