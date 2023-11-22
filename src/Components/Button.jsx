import React from 'react'
import logo from "../assets/Logo.png";


const Navbar = () => {
  return (
    <>
    <nav  className= 'h-20 flex bg-white shadow-[0px_4px_4px_#3a86d4]' >
        <div className='flex pl-10 items-center'>
          <img className='w-20 h-20 ' src={logo} alt="" />
        </div>
        <div className= 'flex flex-grow  justify-end items-center  gap-6  pr-10 '>
        <a className='font-body text-black hover:text-sky-500' href='/'>Beranda</a>
        <a className='font-body text-black hover:text-sky-500' href='/kontak'>Kontak</a>
        <a className='font-body text-black hover:text-sky-500' href='/about'>Tentang Kami</a>
        <a className='font-body text-black hover:text-sky-500' href='/FAQ'>FAQ</a>
        <button className=' font-body border-solid border-2 border-sky-500 px-4 rounded-2xl text-sky-500 font-bold hover:bg-sky-500 hover:text-white'><a href="/login">Masuk</a></button>
        </div>
    </nav>
    </>
  )
}

export default Navbar