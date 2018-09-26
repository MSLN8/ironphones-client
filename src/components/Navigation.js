import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const { currentUser } = props;
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/phone-list">Our Phones</NavLink>
      {!currentUser && (
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </span>
      )}
    </nav>
  );
}

export default Navigation;
