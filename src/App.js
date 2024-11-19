import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Ccomponents/Navbar';
import Home from './Ccomponents/Home';
import Signup from './Ccomponents/Signup';
import Login from './Ccomponents/Login';
function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={< Home/>}/>
        <Route path={"/signup"} element={<Signup />}/>
        <Route path={"/login"} element={< Login />}/>
      </Routes>
    </Router>
  )
};

export default App;