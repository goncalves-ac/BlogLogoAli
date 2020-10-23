import React from "react";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import data from '../../data.json'
import Sidebar from "../../components/SideBar";
import Card from "../../components/Card"

import './Home.css'

function Home(){
    return(
        <main className="Home">      
            <Nav />

            <section className="cards-container">
                {data.map((prop)=>{
                return <Card 
                        imagem={prop.imagem}
                        titulo={prop.titulo}
                        descricao={prop.descricao}
                        autor={prop.autor}
                    />
                })}
            </section>

            <Footer />
            <Sidebar />
        </main>               
    )
}

export default Home;