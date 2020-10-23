import React from "react";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import Sidebar from "../../components/SideBar";

function Home(){
    return(
        <main className="Home">      
            <Nav />
            <Footer />
            <Sidebar />
        </main>               
    )
}

export default Home;