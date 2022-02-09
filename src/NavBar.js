import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <button className="button">Home</button>
        </NavLink>
        <NavLink to="/reviews">
          <button className="button">Reviews</button>
        </NavLink>
        <NavLink to="/books">
          <button className="button">Books</button>
        </NavLink>
        <NavLink to="/formpage">
          <button className="button">Add New Books</button>
        </NavLink>
      </div>
    </>
  );
}
export default NavBar;
