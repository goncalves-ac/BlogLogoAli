import React from 'react'
import './card.css'

const Card = (data) => {
    return(
        <div className="card">
            <img className="imagem" src={data.imagem} alt={data.titulo} />
            <span className="titulo" ><b>{data.titulo}</b></span>
            <span className="descricao" >{data.descricao}</span>
            <span className="autor">Autor(a): <i>{data.autor}</i></span>
        </div>
    )
}

export default Card