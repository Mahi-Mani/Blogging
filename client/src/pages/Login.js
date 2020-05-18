import React, { useRef } from "react";
import API from "../utils/API";
import Home from "./Home";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Inside login button");
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(loginData);
        API.login(loginData).then(result => {
            if(!result.data) {
                console.log("Please signup");
            } else if(result.data === "Incorrect password") {
                console.log("Incorrect password");
            } else {
                console.log(result);
                localStorage.setItem("user", emailRef.current.value);
                window.location.href = "/home";
            }
        }).catch(err => {
            console.log(err.message);
            if(err.message === "Request failed with status code 422") {
                console.log("please signup");
            }
        })
    }

    return (
        <div>
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
        </div>
    )
}

export default Login;