import React from 'react'
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";


const DataWisata = () => {
    const data = [
        { id: 1, namaDestinasi: 'Malioboro', alamat: 'Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta', deskripsiSingkat: 'Jalan ikonik di Yogyakarta, pusat perbelanjaan dan hiburan malam dengan suasana khas, pedagang kaki lima, dan lampu neon yang menarik.' },
        { id: 2, namaDestinasi: 'Candi Prambanan', alamat: 'Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta', deskripsiSingkat: 'Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief ukiran menciptakan potret budaya Indonesia yang memukau.' },
        { id: 3, namaDestinasi: 'Keraton Yogyakarta', alamat: 'Jl. Rotowijayan Blok No. 1, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta', deskripsiSingkat: 'Keelokan arsitektur Jawa, kehijauan taman, dan pesona sejarah yang terpancar. Suasana hangat dan detail artistik yang memikat perhatian.' },
        { id: 4, namaDestinasi: 'Taman Sari', alamat: 'Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55133', deskripsiSingkat: 'Istana air yang memesona dengan arsitektur istimewa dan keindahan taman yang menakjubkan. Suasana magis dan penuh sejarah.' },
        { id: 5, namaDestinasi: 'Parangtritis', alamat: 'Jl. Pantai Parangkusumo, Pantai, Parangtritis, Kretek, Bantul, Daerah Istimewa Yogyakarta', deskripsiSingkat: 'Keindahan pasir putih, ombak menarik, dan nuansa mistis. Aktivitas seru dan budaya bersatu dalam destinasi singkat.' },
      ];

  return (
    <>
    
    <div className="container font-body  mx-auto bg-white p-10 rounded-md shadow-lg">
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
      <table className="min-w-full bg-white ">
        <thead>
          <tr className="text-left ">
            <th className="py-1 px-4 text-center ">No</th>
            <th className="py-1 px-4 ">Nama Destinasi</th>
            <th className="py-1 px-4 ">Alamat</th>
            <th className="py-1 px-4 ">Deskripsi Singkat</th>
            <th className="py-1 px-4 ">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-y text-center">{row.id}</td>
              <td className="py-2 px-4 border-y">{row.namaDestinasi}</td>
              <td className="py-2 px-4 border-y">{row.alamat}</td>
              <td className="py-2 px-4 border-y">{row.deskripsiSingkat}</td>
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
    </>
  )
}

export default DataWisata