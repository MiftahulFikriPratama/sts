import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from '../Components/Navbar2'
import Navbar1 from '../Components/Navbar1';
import About  from "../pages/home/About";
import Kontak from "../pages/home/Kontak";
import Login from '../pages/auth/login';
import Daftar from '../pages/auth/Daftar';
import Notfound from '../pages/home/Notfound';
import { Footer } from '../Components/Footer';
import DetailWisata1 from '../pages/home/DetailWisata1';
import DetailWisata2 from '../Components/DetailWisata2';
import DetailWisata3 from '../Components/DetailWisata3';
import DetailWisata4 from '../Components/DetailWisata4';
import DetailWisata5 from '../Components/DetailWisata5';
import DetailWisata6 from '../Components/DetailWisata6';
import Carousel from '../Components/Carousel';
import Home from '../pages/home/Home';
import Landingpage from '../pages/home/Landingpage'
import NonWisata from '../pages/home/NonWisata';
import Profil from '../pages/home/Profil';
import Like from '../pages/home/Like';
import PaketWisata from '../pages/home/PaketWisata';
import DetailPaket from '../pages/home/DetailPaket';
import Pemesanan from '../pages/home/Pemesanan';
import Pembayaran from '../pages/home/Pembayaran';
import Konfirmasi from '../pages/home/Konfirmasi';
import Transaksi from '../pages/home/Transaksi';
import DetailTransaksi from '../pages/home/DetailTransaksi';
import NavbarAdmin from '../Components/NavbarAdmin';
import DataNonWisata from '../pages/home/DataNonWisata';
import DataWisata from '../pages/home/DataWisata';
import DataPaketWisata from '../pages/home/DataPaketWisata';
import DataPenggunaWisata from '../pages/home/DataPenggunaWisata';
import DataTransaksi from '../pages/home/DataTransaksi';
import Admin from '../pages/home/Admin';
import Destinasi from '../pages/home/Destinasi';
import TambahDataNonWisata from '../pages/home/TambahDataNonWisata';
import TambahDataWisata from '../pages/home/TambahDataWisata';
import TambahDataPaketWisata from '../pages/home/TambahDataPaketWisata';
import DetailTransaksiAdmin from '../pages/home/DetailTransaksiAdmin';

import PublicRoutes from './PublicRoutes';
import AuthRoutes from './AuthRoutes';

const Routing = () =>{
    const token = localStorage.getItem("Authorization");
    const isLoggin = token === null ? false :true;

    return(
        <Routes>
        <Route path='/'>
          <Route element={<PublicRoutes isLoggin={isLoggin} />}>
              <Route path="/login" element={<Login />} />
              <Route path="/Daftar" element={<Daftar />} />
              <Route path="/Home" element={<Home />} />
          </Route>
          <Route path='/' element={<AuthRoutes isLoggin={isLoggin} />}>
             
          </Route>
          <Route path='/landingpage' element={<Landingpage/>} />
              <Route path="/about" element={<About />} />
              <Route path="/kontak" element={<Kontak />} />
              <Route path='/footer' element={<Footer />} />
              <Route path='/DetailWisata1' element={<DetailWisata1/>} />
              <Route path='/DetailWisata2' element={<DetailWisata2/>} />
              <Route path='/DetailWisata3' element={<DetailWisata3/>} />
              <Route path='/DetailWisata4' element={<DetailWisata4/>} />
              <Route path='/DetailWisata5' element={<DetailWisata5/>} />
              <Route path='/DetailWisata6' element={<DetailWisata6/>} />
              <Route path="*" element={<Notfound />} />
              <Route path='/carousel' element={<Carousel/>} />
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
        </Route>
      </Routes>
    );



};

export default Routing