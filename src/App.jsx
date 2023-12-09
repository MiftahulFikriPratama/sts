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
import PaketWisata from './Components/PaketWisata';
import DetailPaket from './Components/DetailPaket';
import Pemesanan from './Components/Pemesanan';
import Pembayaran from './Components/Pembayaran';
import Konfirmasi from './Components/Konfirmasi';
import Transaksi from './Components/Transaksi';
import DetailTransaksi from './Components/DetailTransaksi';
import NavbarAdmin from './Components/NavbarAdmin';
import DataNonWisata from './Components/DataNonWisata';
import DataWisata from './Components/DataWisata';
import DataPaketWisata from './Components/DataPaketWisata';
import DataPenggunaWisata from './Components/DataPenggunaWisata';
import DataTransaksi from './Components/DataTransaksi';
import Admin from './Components/Admin';
import Destinasi from './Components/Destinasi';
import TambahDataNonWisata from './Components/TambahDataNonWisata';
import TambahDataWisata from './Components/TambahDataWisata';
import TambahDataPaketWisata from './Components/TambahDataPaketWisata';
import DetailTransaksiAdmin from './Components/DetailTransaksiAdmin';


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
          <Route path='/PaketWisata' element={<PaketWisata/>}/>
          <Route path='/DetailPaket' element={<DetailPaket/>}/>
          <Route path='/Pemesanan' element={<Pemesanan/>} />
          <Route path='/Pembayaran' element={<Pembayaran/>}/>
          <Route path='/Konfirmasi' element={<Konfirmasi/>}/>
          <Route path='/Transaksi' element={<Transaksi/>} />
          <Route path='/DetailTransaksi' element={<DetailTransaksi/>} />
          <Route path='/Navbaradmin' element={<NavbarAdmin/>}/>
          <Route path='/DataNonWisata' element={<DataNonWisata/>}/>
          <Route path='/DataWisata' element={<DataWisata/>}/>
          <Route path='/DataPaketWisata' element={<DataPaketWisata/>}/>
          <Route path='/DataPenggunaWisata' element={<DataPenggunaWisata/>}/>
          <Route path='/DataTransaksi' element={<DataTransaksi/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/Destinasi' element={<Destinasi/>} />
          <Route path='/TambahDataNonWisata' element={<TambahDataNonWisata/>}/>
          <Route path='/TambahDataWisata' element={<TambahDataWisata/>}/>
          <Route path='/TambahDataPaketWisata' element={<TambahDataPaketWisata/>}/>
          <Route path='/DetailTransaksiAdmin' element={<DetailTransaksiAdmin/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App

