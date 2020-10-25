import React from "react"
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="Footer">
            <p>Siga a gente nas redes sociais:</p>
            <div className="footer_social">
                <a href="https://www.facebook.com">
                    <FaFacebook size="40" color="#3b5998" />
                </a>
                <a href="https://www.twitter.com">
                    <FaTwitter size="40" color="#1da1f2" />
                </a>
                <a href="https://www.youtube.com">
                    <FaYoutube size="40" color="#f00f" />
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram size="40" color="#000" />
                </a>
            </div>
            <p>Digital House / Santander - Todos os direitos reservados - Logo Ali 2020</p>

        </footer >)
};


export default Footer;