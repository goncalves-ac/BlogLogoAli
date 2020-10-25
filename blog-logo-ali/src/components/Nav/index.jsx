import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from '../../image/logo.png';
import Pesquisa from '../Pesquisa'

function Nav () {

    return (
        <nav className="Menu">
            <ul>
                <li><img className='logo' src={Logo} /></li>
                <Pesquisa />
                <div>
                    <li><Link className='Link-css' to="/" >Home</Link></li>
                    <li><Link className='Link-css' to="/" >Destinos</Link></li>
                    <li><Link className='Link-css' to="/" >Quem somos</Link></li>
                    <li><Link className='Link-css' to="/" >Contato</Link></li>
                </div>
                
            </ul>
        </nav>
    );

}

export default Nav;