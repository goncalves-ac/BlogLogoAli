import React from 'react';
import './nav.css';
import Logo from '../../image/logo.png';

function Nav () {

    return (
        <nav className="Menu">
            <ul>
                <li><a className='Link-css' to="/" >Home</a></li>
                <li><img src={Logo} /></li>
            </ul>
        </nav>
    );

}

export default Nav;