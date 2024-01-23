import React, {useState, useEffect} from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import { ImBin2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import axios from 'axios';

const DataPenggunaWisata = () => {
   const [users, setUser] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    const getUsers = async () => {
      const response = await axios.get("http://localhost:7730/api/v1/TampilUsers");
      setUser(response.data);
    };
     
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
            <th className="py-2 px-4 ">Alamat Email</th>
            <th className="py-2 px-4 ">No HP</th>
            <th className="py-2 px-4 ">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-y  text-center">{index + 1}</td>
              <td className="py-2 px-4 border-y">{user.nama}</td>
              <td className="py-2 px-4 border-y">{user.email}</td>
              <td className="py-2 px-4 border-y">{user.no_hp}</td>
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