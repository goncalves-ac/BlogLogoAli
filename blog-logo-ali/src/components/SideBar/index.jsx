import React from "react";
import {Link} from 'react-router-dom';
import './SideBar.css'

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="posts-list">
                <li>Viagem para Paris</li>
            </ul>
        </nav>
    );
}

export default Sidebar;