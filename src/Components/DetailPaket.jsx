import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';

const DetailPaket = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-[#FAFAFA] h-auto w-full pb-10">
        <div className='relative w-full h-72 pt-16 bg-[#77ABDA]'>
          <h1 className='text-white font-body text-3xl font-bold text-center'>Paket Wisata Escape Paradise One</h1>
        </div>
        <div className='relative bg-white pb-10 h-auto w-4/5 rounded-md shadow-lg -mt-40 z-10'>
        <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Destinasi Wisata</h1>
            <div className='text-base font-body pt-3 pl-20'>
            <li>Malioboro</li>
            <li>Candi Prambanan</li>
            <li>Keraton Yogyakarta</li>
            <li>Taman Sari</li>
            <li>Pusat Oleh Oleh</li>
            </div>
            <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Rangkaian Kegiatan</h1>
            <div className='text-base font-body pt-3 pl-20'>
            <li>06.00 – 07.00 Penjemputan wisatawan</li>
            <li>07.00 – 08.00 Perjalanan Malioboro</li>
            <li>08.00 – 10.00 Tour dan sesi foto – foto di spot yang ada di Malioboro</li>
            <li>10.00 – 11.00 Perjalanan menuju Candi Prambanan</li>
            <li>11.00 – 13.00 Tour di Candi Prambanan</li>
            <li>13.00 – 14.00 Perjalanan menuju Keraton Yogyakarta</li>
            <li>14.00 – 16.00 Tour di Keraton Yogyakarta</li>
            <li>16.00 – 17.00 Perjalanan menuju Taman Sari</li>
            <li>19.00 – 20.00 Berbelanja di pusat oleh oleh</li>
            <li>20.00 Pengantaran wisatawan ke Hotel/Bandara/Stasiun</li>
            </div>
            <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Fasilitas</h1>
            <div className='text-base font-body pt-3 pl-20'>
            <li>Penjemputan di Bandara / Stasiun / Hotel</li>
            <li>Mobil yang Nyaman dan Full Musik</li>
            <li>Pengemudi / Pemandu wisata</li>
            <li>Tiket Masuk Wisata</li>
            <li>Air Mineral</li>
            </div>
            <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Biaya</h1>
            <div className='text-base font-body pt-3 pl-20 mb-10'>
            <li>Peserta Tour 02 – 03 Pax : Rp400.000 / Orang</li>
            <li>Peserta Tour 04 – 06 Pax : Rp.350.000 / Orang</li>
            <li>Peserta Tour 07 – 11 Pax : Rp.300.000 / Orang</li>
            </div>
            <a className='bg-[#3c87ca] py-2 px-8 rounded-md text-white font-body float-right mr-10 hover:bg-[#2A5E8D] ' href="/Pemesanan"><button>Pesan Sekarang</button></a>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default DetailPaket;
