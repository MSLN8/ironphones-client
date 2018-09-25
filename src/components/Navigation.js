import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/phone-list">Our Phones</NavLink>
    </nav>
  );
}

export default Navigation;
