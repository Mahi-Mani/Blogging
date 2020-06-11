import React from "react";
import API from "../../utils/API";

const Nav = () => {
  const loggedEmail = localStorage.getItem("user");

  const handleLogout = (event) => {
    event.preventDefault();
    // API.logout().then(res => {
    //   if(res) {
    localStorage.clear();
    window.location.href = "/";
    //   }
    // })
  }

  if (loggedEmail) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Welcome {loggedEmail} !</a>
        <form class="form-inline">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>
        </form>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a class="navbar-brand"><h2>
          Your personal CMS!
        </h2></a>
      </nav>
    );
  }

};

export default Nav;
