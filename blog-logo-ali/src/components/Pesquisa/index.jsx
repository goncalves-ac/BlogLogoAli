import React, { useState } from "react";
import "./Pesquisa.css";

const Pesquisa = ({ filterData }) => {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <section className="container-pesquisa">
      <input
        className="Pesquisa"
        type="text"
        value={pesquisa}
        onChange={(event) => setPesquisa(event.target.value)}
        placeholder="Pesquisa"
      />
      <button className="btn" onClick={() => filterData(pesquisa)}>
        Buscar
      </button>
    </section>
  );
};

export default Pesquisa;
