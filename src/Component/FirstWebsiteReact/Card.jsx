import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../Images/1.jpg"

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto mt-5">
                <div className="card">
                    <img className="card-img-top" src={props.imgsrc} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="#" className="btn btn-primary  btn-change">Go somewhere</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Card;