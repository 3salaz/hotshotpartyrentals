import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, About, Packages, Faq}  from './pages'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      <Footer/>
    </div>
  )

};

export default App;
