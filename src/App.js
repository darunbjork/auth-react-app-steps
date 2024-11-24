import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Ccomponents/Navbar';
import Home from './Ccomponents/Home';
import Signup from './Ccomponents/Signup';
import Login from './Ccomponents/Login';
import { useContext } from "react";
import AuthProvider  from "./AuthContext";
import './Ccomponents/Profile';
import Profile from "./Ccomponents/Profile";
function App () {

 const { isAuthenticated} = useContext(AuthProvider);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={isAuthenticated ? < Home/> : <Navigate to={"/login"} replace/>}/>
        <Route path="/profile" element={isAuthenticated ? < Profile /> : <navigate to={"/login"} replace/>}/>
        <Route path={"/signup"} element={isAuthenticated ? <navigate to={"/"} replace /> : <Signup />}/>
        <Route path={"/login"} element={ isAuthenticated ? <naviagte to={"/"} replace/> : < Login />}/>
      </Routes>
    </Router>
  )
};

export default App;