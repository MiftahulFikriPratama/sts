import React, { useState } from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import TambahDataPaketWisata from './TambahDataPaketWisata'; // Ganti dengan nama file yang benar

const DataPaketWisata = () => {
  const [isTambahDataVisible, setIsTambahDataVisible] = useState(false);

  const data = [
    { id: 1, namaPaketwisata: 'Escape Paradise One', rentangHarga: 'Rp.400.000/Pax', lamaKegiatan: '1 Hari' },
    { id: 2, namaPaketwisata: 'Escape Paradise Two', rentangHarga: 'Rp.420.000/Pax', lamaKegiatan: '1 Hari' },
    { id: 3, namaPaketwisata: 'Escape Paradise Three', rentangHarga: 'Rp.450.000/Pax', lamaKegiatan: '1 Hari' },
    { id: 4, namaPaketwisata: 'Delight Tour  One', rentangHarga: 'Rp.700.000/Pax', lamaKegiatan: '2 Hari' },
    { id: 5, namaPaketwisata: 'Delight Tour  Two', rentangHarga: 'Rp.720.000/Pax', lamaKegiatan: '2 Hari' },
    { id: 6, namaPaketwisata: 'Delight Tour  Three', rentangHarga: 'Rp.750.000/Pax', lamaKegiatan: '2 Hari' },
    { id: 7, namaPaketwisata: 'Tranquility Tour  One', rentangHarga: 'Rp.1.000.000/Pax', lamaKegiatan: '3 Hari' },
    { id: 8, namaPaketwisata: 'Tranquility Tour   Two', rentangHarga: 'Rp.1.020.000/Pax', lamaKegiatan: '3 Hari' },
    { id: 9, namaPaketwisata: 'Tranquility Tour   Three', rentangHarga: 'Rp.1.050.000/Pax', lamaKegiatan: '3 Hari' },
  ];

  const handleTambahDataClick = () => {
    setIsTambahDataVisible(true);
  };

  return (
    <>
      <NavbarAdmin />
      <div className='ml-60 px-5 h-auto bg-[#FAFAFA] pb-10'>
        <h1 className='text-2xl font-body font-bold pt-5'>Data Paket Wisata</h1>
        <div className="flex -mt-5 right-0 mr-10 absolute rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body">
          <button onClick={handleTambahDataClick}>
            Tambah Data
          </button>
        </div>

        {isTambahDataVisible ? (
          <TambahDataPaketWisata setIsTambahDataVisible={setIsTambahDataVisible} />
        ) : (
          <div className="container font-body mt-10 mx-auto bg-white p-10 rounded-md shadow-lg">
            <div className='flex justify-between mb-5'>
              <div className='flex justify-center  items-center gap-1'>
                <p>Show</p>
                <input className='border-2 border-[#3c87ca] pl-2 w-16 rounded-md' type="number" />
                <p>entries</p>
              </div>
              <div className='gap-1'>
                <label htmlFor="">Search:</label>
                <input className='border-2 border-[#3c87ca] outline-none pl-2 w-44 rounded-md' type="text" />
              </div>
            </div>
            <table className="min-w-full bg-white ">
              <thead>
                <tr className="text-left">
                  <th className="py-2 px-4  text-center">No</th>
                  <th className="py-2 px-4 ">Nama Paket Wisata</th>
                  <th className="py-2 px-4 ">Rentang Harga</th>
                  <th className="py-2 px-4 ">Lama Kegiatan</th>
                  <th className="py-2 px-4 ">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="py-2 px-4 border-y text-center">{row.id}</td>
                    <td className="py-2 px-4 border-y">{row.namaPaketwisata}</td>
                    <td className="py-2 px-4 border-y">{row.rentangHarga}</td>
                    <td className="py-2 px-4 border-y">{row.lamaKegiatan}</td>
                    <td className="py-2 px-4 border-y">
                      <div className='flex'>
                        <button className="bg-blue-500 text-white px-2 py-2 rounded-full ml-2"><MdEdit /></button>
                        <button className="bg-red-500 text-white px-2 py-2 rounded-full ml-2"><ImBin2 /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default DataPaketWisata;
