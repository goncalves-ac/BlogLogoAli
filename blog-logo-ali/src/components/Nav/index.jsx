import React from 'react';
import './nav.css';
import Logo from '../../image/logo.png';
import Pesquisa from '../Pesquisa'

function Nav () {

    return (
        <nav className="Menu">
            <ul>
                <li><img className='logo' src={Logo} /></li>
                <Pesquisa />
                <li><a className='Link-css' to="/" >Home</a></li>
            </ul>
        </nav>
    );

}

export default Nav;