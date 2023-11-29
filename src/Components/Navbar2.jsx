import React from 'react';
import logo from "../assets/Logo.png";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";


const Navbar2 = () => {
  return (
    <>
      <div className='fixed  top-0 left-0 w-full h-20 flex bg-white z-[1000]'>
        <div className='w-60 h-screen bg-white'>
          <div className='pl-10 pt-1 items-center'>
            <img className='w-20 h-20' src={logo} alt="" />
          </div>
          <div className='w-full mt-10 flex flex-col items-center'>
            {/* Sidebar links */}
            <a href="#">
              <div className='w-52 mb-2 flex rounded-md shadow-md py-2 px-5 bg-[#b1dbff] hover:bg-[#3c87ca] hover:text-white'>
                <p className='flex gap-4 text-base font-body font-bold justify-center items-center'><FaRegUser />Profil</p>
              </div>
            </a>
            <a href="#">
              <div className='w-52 mb-2 flex rounded-md shadow-md py-2 px-5 bg-[#b1dbff] hover:bg-[#3c87ca] hover:text-white'>
                <p className='flex gap-4 text-base font-body font-bold justify-center items-center'><GrFavorite />Suka</p>
              </div>
            </a>
            <a href="#">
              <div className='w-52 mb-2 flex rounded-md shadow-md py-2 px-5 bg-[#b1dbff] hover:bg-[#3c87ca] hover:text-white'>
                <p className='flex gap-4 text-base font-body font-bold justify-center items-center'><FaRegStar />Ulasan</p>
              </div>
            </a>
            <a href="#">
              <div className='w-52 mb-2 flex rounded-md shadow-md py-2 px-5 bg-[#b1dbff] hover:bg-[#3c87ca] hover:text-white'>
                <p className='flex gap-4 text-base font-body font-bold justify-center items-center'><GrHistory />Riwayat</p>
              </div>
            </a>
            <a href="/">
              <div className='w-52 mt-48 flex rounded-md shadow-md py-2 px-5 bg-[#b1dbff] hover:bg-[#3c87ca] hover:text-white'>
                <p className='flex gap-4 text-base font-body font-bold justify-center items-center'><BiLogOut />Keluar</p>
              </div>
            </a>
          </div>
        </div>
        <div className='flex flex-grow justify-end items-center gap-6 pr-10'>
          <a className='font-body text-black hover:text-[#3c87ca]' href='/Landingpage'>Beranda</a>
          <a className='font-body text-black hover:text-[#3c87ca]' href='/kontak'>Kontak</a>
          <a className='font-body text-black hover:text-[#3c87ca]' href='/about'>Tentang Kami</a>
          <a className='font-body text-black hover:text-[#3c87ca]' href='/FAQ'>FAQ</a>
          <a className='font-body text-black hover:text-[#3c87ca]' href='/Pemandu'>Pemandu Wisata</a>
          <a className='text-4xl hover:text-[#3c87ca]' href="/profil"><FaRegUserCircle /> </a>
        </div>
      </div>

      
      <div className='ml-60 mt-20'>
        
      </div>
    </>
  );
}

export default Navbar2;
