import React from "react";
import { useState } from "react";

const Contactpage = () => {
    const [user, setUser] = useState({
        Fname: "",
        Email: "",
        Phone: "",
        Message: "",

    });

    const userValues = (e) => {
        const { name, value } = e.target;
        setUser((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })

    }

    const submitPage = (e) => {
        e.preventDefault();
        alert(`My Name is ${user.Fname} and my email id is ${user.Email} and Mobile Number is ${user.Phone} & My Message is ${user.Message}...`)
        setUser({
            Fname: "",
            Email: "",
            Phone: "",
            Message: "",
        })

    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container nva_bg">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div className="form-group m-4">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Full Name" required onChange={userValues} value={user.Fname} name="Fname" />
                            </div>
                            <div className="form-group m-4">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required onChange={userValues} value={user.Email} name="Email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group m-4">
                                <label htmlFor="exampleInputEmail1">Phone</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number" required onChange={userValues} value={user.Phone} name="Phone" />
                            </div>
                            <div className="form-group m-4">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={userValues} value={user.Message} name="Message"></textarea>
                            </div>
                            <button type="submit" onClick={submitPage} className="btn btn-primary m-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contactpage;