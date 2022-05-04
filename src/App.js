import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
