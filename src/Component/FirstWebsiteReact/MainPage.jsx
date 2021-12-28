import React from "react";
import './style.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Home";
import Aboutpage from "./About";
import Servicepage from "./Service";
import Contactpage from "./Contact";
import Footer from "./Footer";


const WebPage = ()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<Aboutpage />} />
            <Route exact path="/service" element={<Servicepage />} />
            <Route exact path="/contact" element={<Contactpage />} />
        </Routes>
        <Footer />
        </>
    )
}
export default WebPage;