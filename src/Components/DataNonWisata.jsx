import React from 'react'
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";

const DataNonWisata = () => {
    const data = [
        { id: 1, namaDestinasi: 'Tepi Sawah', alamat: 'Jl. Sidomukti, Tiyosan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta', deskripsiSingkat: 'Sesuai namanya, kafe ini tepat berada di tepi sawah. Dengan bangunan utama berbentuk joglo, kafe ini mengusung konsep tradisional Jawa..', jamBuka: '13.00-22.00 WIB' },
        { id: 2, namaDestinasi: 'Oppio Coffee Milk', alamat: 'Jl. Nglengkong Besi No.11, Area Sawah, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta ', deskripsiSingkat: 'Cafe hits Jogja selanjutnya ada Oppio Coffee Milk. Memiliki konsep suasana alam, cafe ini memberikan kamu kesempatan untuk memanjakan mata dengan melihat hamparan sawah hijau di sekelilingnya', jamBuka: '14.00-22.00 WIB' },
        { id: 3, namaDestinasi: 'Epik Coffee', alamat: 'Jl. Palagan Tentara Pelajar No.29, Mudal, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta ', deskripsiSingkat: 'Ini perjalanan dari biji kopi sampai mencapai meja Anda, memberikan Anda dan menghibur pencerahan Indonesia Coffees.', jamBuka: '10.00-23.00 WIB' },
        { id: 4, namaDestinasi: 'Carney Co', alamat: 'Jl. Garuni II, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta', deskripsiSingkat: ' Coffee shop yang tengah naik daun di kalangan kaum muda Jogja! Jelajahi dunianya melalui media sosial, di mana foto-foto dan video memukau memancing rasa penasaran Anda terhadap keunikan cafe ini.', jamBuka: '10.00-00.00 WIB' },
        { id: 5, namaDestinasi: 'Silol Kopi & Eatery', alamat: 'Jl. Suroto, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta ', deskripsiSingkat: 'Silol Kopi & Eatery merupakan coffee shop yang memiliki suasana yang modern, yang merupakan tempat untuk menikmati berbagai jenis kopi', jamBuka: '00.01-00.00 WIB' },
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
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left">
            <th className="py-1 px-4 text-center">No</th>
            <th className="py-1 px-4 ">Nama Destinasi</th>
            <th className="py-1 px-4 ">Alamat</th>
            <th className="py-1 px-4 ">Deskripsi Singkat</th>
            <th className="py-1 px-4 ">Jam Buka</th>
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
              <td className="py-2 px-4 border-y">{row.jamBuka}</td>
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

export default DataNonWisata