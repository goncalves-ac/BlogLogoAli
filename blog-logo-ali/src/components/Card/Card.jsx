import React from 'react'
import './Card.css'

const Card = ({imagem, titulo, descricao, autor}) => {
    return(
        <div className="card">
            <img className="imagem" src={imagem} />
            <span className="titulo" >{titulo}</span>
            <span className="descricao" >{descricao}</span>
            <span className="autor">{autor}</span>
        </div>
    )
}

export default Card