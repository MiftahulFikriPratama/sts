import React from 'react'
import element1 from '../assets/Layer1.png';
import element2 from '../assets/Layer2.png';
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png';
import { PiTiktokLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";


export const Footer = () => {
  return (
    <footer className='h-52 flex justify-center w-full bg-white relative bottom-0'>
        <img className='absolute w-1/4 bottom-0 right-0' src={element1} alt="" />
        <img className='absolute w-1/4 bottom-0 left-0' src={element2} alt="" />
        <img className=' absolute my-5 w-24 h-24' src={logo} alt="" />
        <p className='text-black font-semibold font-body items-center justify-center absolute mt-28'>© 2023 WebCrafters</p>
        <div className='flex flex-grow gap-2 text-xl justify-center mt-40 '>
          <a className='hover:text-[#3c87ca]' href="/"><FaInstagram /></a>
          <a className='hover:text-[#3c87ca]' href="/"><FiFacebook /></a>
          <a className='hover:text-[#3c87ca]' href="/"><RiTwitterXFill /></a>
          <a className='hover:text-[#3c87ca]' href="/"><PiTiktokLogo /></a>
        </div>
    </footer>
  )
}
