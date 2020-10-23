import React, { useState } from 'react';
import './Pesquisa.css'

const Pesquisa = () => {

    const [ pesquisa, setPesquisa ] = useState("");

    const imprimirPesquisa = () => {
        console.log(Pesquisa)
    }

    return (
        <section className="container-pesquisa">
            <input className="Pesquisa" type="text" value={pesquisa} onChange={(event) => setPesquisa(event.target.value)} placeholder="Pesquisa" />
            <button className="btn">Pesquisar</button>
        </section>
    );
}

export default Pesquisa;