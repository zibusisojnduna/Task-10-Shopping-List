import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout(){
    return(
        <section>
          <Nav/>
           <Outlet/>
          <Footer/>  
        </section>
        
            
    )
}
export default Layout