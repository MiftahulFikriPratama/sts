import React from 'react'
import corney from "../assets/corney.png"
import oppio from "../assets/oppio.png"
import epic from "../assets/epic.png"
import Navbar from './Navbar'
import SAWAH from "../assets/image/TepiSawahCoffeeEatery.png";
import { Footer } from "./Footer";
import { IoSearch } from "react-icons/io5";

const Nonwisata = () => {
  return (
   
      <>
      <Navbar/>
        <div className='relative bg-[#FAFAFA] pb-10'>
        <div className="flex">
          <div class="flex font-body ml-28 mt-10 font-bold mb-10 ">
            <a href="">
              <button class="px-4 py-1 shadow-lg rounded-s-full bg-[#3c87ca] text-white">
                {" "}
                -{" "}
              </button>
            </a>
            <a href="">
              <button class="px-4 py-1 shadow-lg border-r-2 border-black hover:bg-[#3c87ca] hover:text-white bg-white text-black">
                Wisata
              </button>
            </a>
            <a href="">
              <button class="px-4 py-1  shadow-lg rounded-e-full bg-white hover:bg-[#3c87ca] hover:text-white text-black">
                Non-Wisata
              </button>
            </a>
          </div>
          <div className=" mt-10 flex right-0 mr-24 absolute rounded-2xl border-2 ">
            <input
              className="pl-5 p-1 w-64  shadow-md outline-[#3c87ca]  rounded-2xl text-md placeholder-slate-400"
              type="text"
              placeholder="Search..."
            />
            <a
              className="absolute text-2xl pt-1 ml-56 hover:text-[#3c87ca]"
              href="#"
            >
              <IoSearch />
            </a>
          </div>
        </div>
        <div className="">
        <div className="w-3/5 mt-5  flex h-60 pr-5 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
            <img src={SAWAH} alt="Foto" className="w-1/2 h-auto p-5" />
            <div className="justify-between">
              <h1 className="font-body text-2xl font-bold py-5">
                Tepi Sawah Coffee Eatery
              </h1>
              <p className="text-base  font-body">
                Kafe ini tepat berada di tepi sawah. Dengan bangunan utama
                berbentuk joglo, kafe ini mengusung konsep tradisional Jawa.
              </p>
              <a href="/DetailWisata4">
                <button className="w-full p-1 mt-10 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]">
                  Lebih Lanjut
                </button>
              </a>
            </div>
          </div>
          <div className="w-3/5 mt-5 flex h-60 pr-5 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
            <img src={oppio} alt="Foto" className="w-1/2 h-auto p-5" />
            <div className="justify-between">
              <h1 className="font-body text-2xl font-bold py-5">
              Oppio Coffee Milk
              </h1>
              <p className="text-base  font-body">
              Memiliki konsep suasana alam, cafe ini memberikan kamu kesempatan untuk memanjakan mata dengan melihat hamparan sawah hijau di sekelilingnya. 
              </p>
              <a href="/DetailWisata5">
                <button className="w-full p-1 mt-10 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]">
                  Lebih Lanjut
                </button>
              </a>
            </div>
          </div>
          <div className="w-3/5 mt-5 flex h-60 pr-5 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
            <img src={epic} alt="Foto" className="w-1/2 h-auto p-5" />
            <div className="justify-between">
              <h1 className="font-body text-2xl font-bold py-5">
              Epic Coffee
              </h1>
              <p className="text-base  font-body">
              Epic Coffee hadir dengan konsep bangunan industrial dan classic.
               Bangunan yang terbuka, dan dirancang 
               sedemikian rupa sehingga tampak luas.
              </p>
              <a href="/DetailWisata6">
                <button className="w-full p-1 mt-10 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]">
                  Lebih Lanjut
                </button>
              </a>
            </div>
          </div>
          <div className="w-3/5 mt-5 flex h-60 pr-5 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
            <img src={corney} alt="Foto" className="w-1/2 h-auto p-5" />
            <div className="justify-between">
              <h1 className="font-body text-2xl font-bold py-5">
              Carney Co
              </h1>
              <p className="text-base  font-body">
              Cafe Carney Co memiliki arsitektur yang dominan warna putih dengan aksen warna pinus yang indah serta bangunan berbentuk piramida 
              </p>
              <a href="">
                <button className="w-full p-1 mt-10 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]">
                  Lebih Lanjut
                </button>
              </a>
            </div>
          </div>
          
        </div>
        </div>
        <Footer/>
      </>
 
  )
}

export default Nonwisata