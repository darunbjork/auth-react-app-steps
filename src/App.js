import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Ccomponents/Navbar';
import Home from './Ccomponents/Home';
import Signup from './Ccomponents/Signup';
import Login from './Ccomponents/Login';
function App () {

  const [isAuthenticated, setIsAuthenticated ] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  }
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} logout={logout}/>
      <Routes>
        <Route path={"/"} element={isAuthenticated ? < Home/> : <Navigate to={"/login"} replace/>}/>
        <Route path={"/signup"} element={isAuthenticated ? <navigate to={"/"} replace /> : <Signup />}/>
        <Route path={"/login"} element={ isAuthenticated ? <naviagte to={"/"} replace/> : < Login login={login}/>}/>
      </Routes>
    </Router>
  )
};

export default App;