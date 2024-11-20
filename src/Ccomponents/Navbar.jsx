import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = ({isAuthenticated, logout}) => {

   const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };
  return (
    <nav>
      {isAuthenticated ? 
      <>
        <Link to={"/"}>Home</Link>
        <button onClick={handleLogout}>Logout</button>
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