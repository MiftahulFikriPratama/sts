import React from 'react'
import Navbar2 from './Navbar2'
import foto from '../assets/profil.png';

const Profil = () => {
  return (
    <>
    <Navbar2/>
    <div className='ml-60 flex  justify-center h-auto bg-[#FAFAFA]'>
        <div className='w-4/5 h-auto mb-10 p-10 bg-white shadow-md mt-10 rounded-lg'>
            <h1 className='text-lg font-body font-bold'>Profil</h1>
            <p className='text-xl font-body font-bold'>Nabiil</p>
            <div className='w-full gap-5 flex rounded-md mt-5 p-5 h-auto bg-[#FAFAFA]'>
                <div className='w-1/4 h-64 p-5 rounded-md bg-white shadow-lg' >
                    <img src={foto} alt="" />
                    <label for="fileInput" className="relative hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body mt-3 py-1 px-5 text-black rounded-md inline-block">
                        <span>Pilih Gambar</span>
                    <input type="file" id="fileInput" className="custom-file-input absolute inset-0 opacity-0 cursor-pointer" />
                    </label>
                    
                </div>
                <div className='w-3/4 h-auto pt-5 pl-10 rounded-md bg-white shadow-lg' >
                    <p className='text-xl font-body font-bold text-[#3c87ca]'>Ubah Biodata Diri</p>
                    <div className='flex'>
                        <div className='text-base mr-24 font-body mt-5 leading-9'>
                            <p>Nama</p>
                            <p>Username</p>
                        </div>
                        <div className='text-base mr-5 font-body mt-5 leading-9'>
                            <p>Nabiil</p>
                            <p>Nabiilrafiq</p>
                        </div>
                        <div className='text-base flex flex-col text-[#3c87ca] font-body mt-5 leading-9'>
                            <a href="#" >Ubah</a>
                            <a href="#">Ubah Username</a>
                        </div>
                    </div>
                    <p className='text-xl mt-10 font-body font-bold text-[#3c87ca]'>Ubah Kontak</p>
                    <div className='flex'>
                        <div className='text-base mr-24 font-body mt-5 leading-9'>
                            <p>Email</p>
                            <p>Nomor HP</p>
                        </div>
                        <div className='text-base mr-5 font-body mt-5 leading-9'>
                            <p>nabiilrafiq@gmail.com</p>
                            <p>082156337843</p>
                        </div>
                        <div className='text-base flex flex-col text-[#3c87ca] font-body mt-5 leading-9'>
                            <a href="#">Ubah</a>
                            <a href="#">Ubah</a>
                        </div>
                    </div>
                    <a href="#" className='w-48 mb-10 float-right mr-10 relative text-center hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body mt-10 py-1  text-black rounded-md inline-block'><button>Ubah Kata Sandi</button></a>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Profil