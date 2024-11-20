import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = ({isAuthenticated, logout}) => {
  return (
    <nav>
      {isAuthenticated ? 
      <>
        <Link to={"/"}>Home</Link>
        <button onClick={logout}>Logout</button>
      </> 
      :
      <>
       <Link to={"/signup"}>Signpp</Link>
      <Link to={"/login"}>Login</Link>
      </>
      }
    </nav>
  )
};

export default Navbar;