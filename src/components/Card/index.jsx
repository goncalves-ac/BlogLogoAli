import React from 'react'
import './card.css'

const Card = (data) => {
    return(
        <div className="card">
            <img id="imagem" src={data.imagem} alt={data.titulo} />
            <span id="titulo" ><b>{data.titulo}</b></span>
            <span id="descricao" >{data.descricao}</span>
            <span id="autor">Autor(a): <i>{data.autor}</i></span>
        </div>
    )
}

export default Card