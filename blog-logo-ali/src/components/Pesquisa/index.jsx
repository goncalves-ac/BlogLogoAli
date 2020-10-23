import React from 'react';
import './Pesquisa.css'

const Pesquisa = () => {

    return (
        <section className="container-pesquisa">
            <input className="Pesquisa" type="text" value="" placeholder="Pesquisa" />
            <button className="btn">Pesquisar</button>
        </section>
    );
}

export default Pesquisa;