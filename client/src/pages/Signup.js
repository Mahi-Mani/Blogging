import React, { useRef } from "react";
import API from "../utils/API";

function Signup() {
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userDetails = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        API.createUser(userDetails).then(results => {
            if (results.data) {
                console.log(results.data);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="firstname">Firstname</label>
                    <input type="firstname" className="form-control" id="firstname" aria-describedby="emailHelp"
                        placeholder="Enter firstname" ref={firstnameRef}></input>
                </div>
                <div className="form-group">
                    <label for="lastname">lastname</label>
                    <input type="lastname" className="form-control" id="lastname" aria-describedby="emailHelp"
                        placeholder="Enter lastname" ref={lastnameRef}></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" ref={emailRef}></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        placeholder="Password" ref={passwordRef}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <h3>Already an user? Click here to login <a href="/login">Login</a></h3>
            </form>
        </div>
    )
}

export default Signup;