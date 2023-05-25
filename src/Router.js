import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';            
import About from './pages/About';    
import Detail from './pages/Detail';    
import Hello from './pages/Hello';    

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
