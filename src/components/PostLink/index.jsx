import React from "react";
import {Link} from 'react-router-dom';
import './PostLink.css'

const PostLink = ({titulo, url}) => {
    return (
        <li><Link to={url}>${titulo}</Link></li> 
    );
}

export default PostLink;