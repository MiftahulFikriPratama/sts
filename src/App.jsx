import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About  from "./Components/About";
import Kontak from "./Components/Kontak";
import FAQ from "./Components/FAQ";
import Login from './Components/Login';
import Daftar from './Components/Daftar';
import Notfound from './Components/Notfound';
import { Footer } from './Components/Footer';


const App = () => {
  return (
    <div>
      <Footer/>
      <Router>
        <Routes>
          <Route path="/.." element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path='/footer' element={<Footer />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

