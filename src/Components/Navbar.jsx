import React from 'react'
import logo from "../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
    <nav  className= 'h-20 flex bg-white shadow-[0px_4px_4px_#3a86d4]' >
        <div className='flex pl-10 items-center'>
          <img className='w-20 h-20 ' src={logo} alt="" />
        </div>
        <div className= 'flex flex-grow  justify-end items-center  gap-6  pr-10 '>
        <a className='font-body text-black hover:text-[#3c87ca]' href='/'>Beranda</a>
        <a className='font-body text-black hover:text-[#3c87ca]' href='/kontak'>Kontak</a>
        <a className='font-body text-black hover:text-[#3c87ca]' href='/about'>Tentang Kami</a>
        <a className='font-body text-black hover:text-[#3c87ca]' href='/FAQ'>FAQ</a>
        <a className='font-body text-black hover:text-[#3c87ca]' href='/Pemandu'>Pemandu Wisata</a>
        <a className='text-4xl hover:text-[#3c87ca]' href="/profil"><FaRegUserCircle/> </a>
        </div>
    </nav>
    </>
  )
}

export default Navbar