import React from "react";
// import { NavLink } from "react-router-dom";
import web from "./bg.png"
import Common from "./Common";

const Homepage = () => {
    return (
        <>
       <Common name="Grow Your Business With" btname="About Us" btnlink="/about" img={web} />
       </>
    )
}
export default Homepage;

