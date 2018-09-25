import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
    </nav>
  );
}

export default Navigation;
