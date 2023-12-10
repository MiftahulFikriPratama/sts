import React from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";

const DataPenggunaWisata = () => {
    const data = [
        { id: 1, Nama: 'Muftahul Fikri Pratama', Username: 'Fikri', JenisKelamin: 'Laki Laki', Email: 'miftahul@gmail.com', NoHP: '081261011991' },
        { id: 2, Nama: 'Febriandi', Username: 'Febriyandy', JenisKelamin: 'Laki Laki', Email: 'febri@gmail.com', NoHP: '085162598308' },
        { id: 3, Nama: 'Nabiil', Username: 'NabiilRafiq', JenisKelamin: 'Laki Laki', Email: 'nabil@gmai.com', NoHP: '0812827559958' },
        { id: 4, Nama: 'Selvi Debi Anita', Username: 'Selvi D', JenisKelamin: 'Perempuan', Email: 'selvi@gmail.com', NoHP: '082341935137' },
        { id: 5, Nama: 'Zelviannisa', Username: 'Ica Zelvi', JenisKelamin: 'Perempuan', Email: 'zelviannisa@gmail.com', NoHP: '083161362944' },
        { id: 6, Nama: 'Dimas', Username: 'Dimas', JenisKelamin: 'Laki Laki', Email: 'dimas@gmail.com', NoHP: '083809704076' },
      ];

      
  return (
    <>
    <NavbarAdmin/>
    <div className='ml-60 px-5 h-auto bg-[#FAFAFA] pb-10'>
        <h1 className='text-2xl font-body font-bold pt-5'>Data Pengguna</h1>
        <div className="container font-body mt-10  mx-auto bg-white p-10 rounded-md shadow-lg">
      <div className='flex justify-between mb-5'>
        <div className='flex justify-center  items-center gap-1'>
          <p>Show</p>
          <input className='border-2 border-[#3c87ca] pl-2 w-16 rounded-md'  type="number" />
          <p>entries</p>
        </div>
        <div className='gap-1'>
          <label htmlFor="">Search:</label>
          <input className='border-2 border-[#3c87ca] outline-none pl-2 w-44 rounded-md' type="text" />
        </div>
      </div>
    <div className="container mx-auto">
      <table className="min-w-full bg-white ">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4  text-center">No</th>
            <th className="py-2 px-4 ">Nama</th>
            <th className="py-2 px-4 ">Username</th>
            <th className="py-2 px-4 ">Jenis Kelamin</th>
            <th className="py-2 px-4 ">Alamat Email</th>
            <th className="py-2 px-4 ">No HP</th>
            <th className="py-2 px-4 ">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-y  text-center">{row.id}</td>
              <td className="py-2 px-4 border-y">{row.Nama}</td>
              <td className="py-2 px-4 border-y">{row.Username}</td>
              <td className="py-2 px-4 border-y">{row.JenisKelamin}</td>
              <td className="py-2 px-4 border-y">{row.Email}</td>
              <td className="py-2 px-4 border-y">{row.NoHP}</td>
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
    </div>
    </div>
    </>
  )
}

export default DataPenggunaWisata