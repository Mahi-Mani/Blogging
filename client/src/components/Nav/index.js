import React from "react";

const Nav = () => {
  const loggedEmail = localStorage.getItem("user");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {loggedEmail ?
        <h2>
          Welcome {loggedEmail} !
      </h2>
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
