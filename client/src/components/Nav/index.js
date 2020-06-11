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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {loggedEmail ?
        <div>
          <h2>
            Welcome {loggedEmail} !
      </h2>
          <button type="submit" className="btn btn-primary float-right" onClick={handleLogout}>Logout</button>
        </div>
        :
        <h2>
          Your personal CMS!
      </h2>
      }
      {/* Display this if the current state is loading */}
      {/* <a className="navbar-brand ml-auto">
          Loading...
        </a> */}
    </nav>
  );
};

export default Nav;
