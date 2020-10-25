import React from "react";
import './SideBar.css';

const Sidebar = (props) => {
    const data = props.data;

    return (
        <nav className="sidebar">
            <h2>Postagens</h2>
            <ul className="posts-list">
                <ul className="month-list">
                    <p>Outubro</p>
                    { 
                        data.map((destino) => {
                            return <li>{destino.titulo}</li>;
                        })
                    }
                </ul>
            </ul>
        </nav>
    );
};

export default Sidebar;