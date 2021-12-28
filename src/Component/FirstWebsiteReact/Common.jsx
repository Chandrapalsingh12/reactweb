import React from "react";
import { NavLink } from "react-router-dom";
import web from "./bg.png"

const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container nva_bg">
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                            <h1>{props.name} <strong className="brand">TheUntited</strong></h1>
                            <h2 className="my-3">We are the team of talented developer making Websites And Mobile Application</h2>
                            <div className="mt-3">
                                <NavLink to={props.btnlink} className="btn btn-primary btn-lg active btn-change">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img img-left">
                            <img src={web} className="img-fluid animated" alt="BGIMG" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            
        </>
    )
}
export default Common;