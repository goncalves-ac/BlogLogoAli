import React from 'react'
import './Card.css'

const Card = ({image, titulo, texto}) => {
    return(
        <div className="card">
            <img className="imagem" src={image} />
            <span className="titulo" >{titulo}</span>
            <span className="texto" >{texto}</span>
        </div>
    )
}

export default Card