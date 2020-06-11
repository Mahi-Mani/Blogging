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
            <div className="form-group">
            <h1 class="display-4 text-light">LOGIN</h1>
                <label for="exampleInputEmail1"className="text-light">Email address</label>
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
        </div>
        <div className="col-md-2"></div>
        </div>
    )
}

export default Login;