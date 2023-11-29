import React from 'react';
import Logo from "../assets/Logo.png";
import Navbar from './Navbar';
import { Footer } from './Footer';

const Kontak = () => {
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center h-screen bg-[#FAFAFA]'>
      <div className='w-4/5 h-4/5 flex bg-white rounded-xl shadow-lg'>
        <div className='w-1/2 relative'>
          <img className='w-56 mx-auto' src={Logo} alt="Logo" />
          <p className='text-center text-lg font-body mt-4 px-10'>
            Tempat terbaik untuk menemukan rekomendasi pariwisata dan tempat nongkrong! Jika Anda memiliki pertanyaan, masukan, atau ingin berkolaborasi, kami siap membantu.
          </p>
        </div>
        <div className='w-1/2 mt-10 flex flex-col  items-center'>
          <form className='w-4/5'>
            <input type="text" id='nama' placeholder='Nama' className='w-full py-1 px-3 mb-3 rounded-lg border-2 border-[#3c87ca] outline-none font-body' />
            <input type="email" id='email' placeholder='Email' className='w-full py-1 px-3 mb-3 rounded-lg border-2 border-[#3c87ca] outline-none font-body' />
            <input type="tel" id='telepon' placeholder='No Telepon' className='w-full py-1 px-3 mb-3 rounded-lg border-2 border-[#3c87ca] outline-none font-body' />
            <input type="text" id='perusahaan' placeholder='Perusahaan (Opsional)' className='w-full py-1 px-3 mb-3 rounded-lg border-2 border-[#3c87ca] outline-none font-body' />
            <textarea
              id='pesan'
              placeholder='Pesan'
              className='w-full h-32 py-1 px-3 mb-3 rounded-lg border-2 border-[#3c87ca] outline-none font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full'
            />
          </form>
          <div className="mt-2">
            <a href="">
              <button className='font-body py-1 px-7 rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca]'>Kirim</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Kontak;
