import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import data from "../../data.json";
import Sidebar from "../../components/SideBar";

import Card from "../../components/Card";

import "./Home.css";

function Home() {
  const [posts, setPosts] = useState(data);

  const filterData = (filter = "") => {
    const filteredData = data.filter((post) =>
      post.titulo.toLowerCase().includes(filter.toLowerCase())
    );

    setPosts(filteredData);
  };

  return (
    <main className="Home">
      <Nav filterData={filterData} />

      <section className="cards-container">
        {posts.length !== 0 ? (
          posts.map((prop) => {
            return (
              <Card
                key={prop.id}
                imagem={prop.imagem}
                titulo={prop.titulo}
                descricao={prop.descricao}
                autor={prop.autor}
              />
            );
          })
        ) : (
          <b>Nenhum post encontrado!</b>
        )}
      </section>

      <Sidebar data={data} />
      <Footer />
    </main>
  );
}

export default Home;
