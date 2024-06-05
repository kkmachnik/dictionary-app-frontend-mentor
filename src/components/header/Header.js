import React from 'react';
import logoIcon from '../../assets/images/logo.svg';
import moonIcon from '../../assets/images/icon-moon.svg';
import './header.css';

function Header() {
    return (
    <div className='header-container'>
         <img src={logoIcon} alt='logo icon'/>
         <div className='options-container'>
            <select className='select'>
                 <option>Sans Serif</option>
                 <option>Serif</option>
                 <option>Mono</option>
            </select>
            <div className='dark-mode'>
                <div className="toggle-container">
                    <label for="check" className="toggle">
                    <input type="checkbox" id="check"/>
                        <span className='slider'></span>
                    </label>
                </div>
                <img alt="moon icon" src={moonIcon}/>
            </div>
         </div>
    </div>
    )
};


export default Header;