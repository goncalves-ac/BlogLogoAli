import React from 'react'
import './Card.css'

const Card = ({imagem, titulo, descricao, autor}) => {
    return(
        <div className="card">
            <img className="imagem" src={imagem} />
            <span className="titulo" ><b>{titulo}</b></span>
            <span className="descricao" >{descricao}</span>
            <span className="autor"><i>{autor}</i></span>
        </div>
    )
}

export default Card