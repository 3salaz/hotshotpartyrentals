import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Gallery, Packages, Faq}  from './pages'



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      <Footer/>
    </>
  )

};

export default App;
