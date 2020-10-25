import React from "react";
import { Link } from 'react-router-dom';
import './SideBar.css'

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <h2>POSTAGENS</h2>
            <ul className="posts-list">
                <ul className="month-list">
                    <div className="mes"><p>Outubro</p></div>

                    <li>Viagem para Paris</li>
                    <li>Viagem para Roma</li>
                    <li>Viagem para NY</li>
                    <li>Viagem para Orlando</li>
                    <li>Rio de Janeiro</li>
                    <li>Viagem para Praia de Iracema</li>
                </ul>
            </ul>
        </nav>
    );
}

export default Sidebar;