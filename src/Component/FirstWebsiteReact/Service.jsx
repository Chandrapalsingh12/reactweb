import React from "react";
// import web from "../Images/1.jpg"
import Card from "./Card";
import ServiceData from "./ServiceApi";

const Servicepage = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Service</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {ServiceData.map((val,ind)=>{
                                return <Card
                                key = {ind}
                                imgsrc = {val.image}
                                title  ={val.title} 
                                desc = {val.desc}
                                />

                            })}
                            

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Servicepage;