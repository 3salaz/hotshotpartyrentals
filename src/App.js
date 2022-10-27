import React from "react";
import { Navbar, Main, Gallery, Packages, Faq, Footer }  from './layout'
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      <Footer/>
    </div>
  )

};

export default App;
