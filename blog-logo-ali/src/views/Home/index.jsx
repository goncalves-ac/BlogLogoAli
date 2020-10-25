import React from "react";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import data from '../../data.json'
import Sidebar from "../../components/SideBar";
import Card from "../../components/Card"

import './Home.css'
//
function Home(){
    console.log(data)
    return(
        <main className="Home">      
            <Nav />

            <section className="cards-container">
                {data.map((props)=>{
                return <Card 
                        key={props.id}
                        imagem={props.imagem}
                        titulo={props.titulo}
                        descricao={props.descricao}
                        autor={props.autor}
                    />
                })}
            </section>

            <Sidebar data={data}/>
            <Footer/>
        </main>               
    )
}

export default Home;