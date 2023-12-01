import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from './Components/Navbar2';
import Navbar1 from './Components/Navbar1';
import About  from "./Components/About";
import Kontak from "./Components/Kontak";
import FAQ from "./Components/FAQ";
import Login from './Components/Login';
import Daftar from './Components/Daftar';
import Notfound from './Components/Notfound';
import { Footer } from './Components/Footer';
import DetailWisata1 from './Components/DetailWisata1';
import DetailWisata2 from './Components/DetailWisata2';
import DetailWisata3 from './Components/DetailWisata3';
import DetailWisata4 from './Components/DetailWisata4';
import DetailWisata5 from './Components/DetailWisata5';
import DetailWisata6 from './Components/DetailWisata6';
import Carousel from './Components/Carousel';
import Home from './Components/Home';
import Landingpage from './Components/Landingpage'
import NonWisata from './Components/NonWisata';
import Profil from './Components/Profil';
import Like from './Components/Like';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/DetailWisata1' element={<DetailWisata1/>} />
          <Route path='/DetailWisata2' element={<DetailWisata2/>} />
          <Route path='/DetailWisata3' element={<DetailWisata3/>} />
          <Route path='/DetailWisata4' element={<DetailWisata4/>} />
          <Route path='/DetailWisata5' element={<DetailWisata5/>} />
          <Route path='/DetailWisata6' element={<DetailWisata6/>} />
          <Route path="*" element={<Notfound />} />
          <Route path='/carousel' element={<Carousel/>} />
          <Route path='/landingpage' element={<Landingpage/>} />
          <Route path='/Nonwisata' element={<NonWisata />} />
          <Route path='/Navbar2' element={<Navbar2 />} />
          <Route path='/Navbar1' element={<Navbar1 />} />
          <Route path='/Profil' element={<Profil/>} />
          <Route path='/Like' element={<Like/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

