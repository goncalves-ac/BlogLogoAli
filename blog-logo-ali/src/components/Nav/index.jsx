import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../../image/logo.png";
import Pesquisa from "../Pesquisa";

function Nav({ filterData }) {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <img className="logo" src={Logo} />
        </li>
        <Pesquisa filterData={filterData} />
        <li>
          <Link className="Link-css" to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
