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
        <div
            style={{
                backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className="jumbotron row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <h1 class="display-4 text-light">CREATE ACCOUNT</h1>
                <form>
                    <div className="form-group">
                        <label for="firstname" className="text-light">Firstname</label>
                        <input type="firstname" className="form-control" id="firstname" aria-describedby="emailHelp"
                            placeholder="Enter firstname" ref={firstnameRef}></input>
                    </div>
                    <div className="form-group">
                        <label for="lastname" className="text-light">lastname</label>
                        <input type="lastname" className="form-control" id="lastname" aria-describedby="emailHelp"
                            placeholder="Enter lastname" ref={lastnameRef}></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="text-light">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" ref={emailRef}></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="text-light">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            placeholder="Password" ref={passwordRef}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <h3 className="text-light">Already an user? Click here !<a href="/login">Login</a></h3>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default Signup;