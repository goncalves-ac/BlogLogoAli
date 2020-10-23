import React from "react";
import Nav from '../../components/Nav'
import Sidebar from "../../components/SideBar";

function Home(){
    return(
        <main className="Home">      
            <Nav />
            <Sidebar />
        </main>               
    )
}

export default Home;