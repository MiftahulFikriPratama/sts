import React from "react";
import JOGJA from "../assets/image/jogja.png";
import PERTAMA from "../assets/image/malioboro.png";
import KEDUA from "../assets/image/candiprambanan.png";
import KETIGA from "../assets/image/keratonjogja.png";
import PANTAI from "../assets/image/pantai.png";
import SAWAH from "../assets/image/TepiSawahCoffeeEatery.png";
import Navbar1 from "./Navbar1";
import { Footer } from "./Footer";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <div className="relative bg-[#FAFAFA] pb-10">
        <div className="relative">
          <img
            src={JOGJA}
            alt="Parangtritis"
            className="max-w-full max-h-full"
          />
          <div className="absolute flex w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pl-10 pb-32">
            <h1 className="absolute text-5xl font-body leading-relaxed pl-10 font-bold italic text-white">
              Bingung Mau Pergi Kemana? <br />
              DestinAsyik Solusi Nya!
            </h1>
          </div>
          <div className="absolute bottom-0 right-0">
            <p className="font-body text-2xl font-bold italic pr-5 pb-5 text-white">
              Easy Way To Find And Go
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="font-body text-3xl text-center pt-5 font-bold italic">
            Rekomendasi Bulan Ini
          </h1>
        </div>
        <div className="flex justify-center gap-24 mt-5">
          <div className="w-80 h-96  relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={PERTAMA}
              className="rounded-lg  absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">Malioboro</h1>
              <p className="text-base font-body">
                Jalan ikonik di Yogyakarta, pusat perbelanjaan dan hiburan malam
                dengan suasana khas, pedagang kaki lima, dan lampu neon yang
                menarik.
              </p>
            </div>
            <a
              href="#"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={KEDUA}
              className="rounded-lg absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">Candi Prambanan</h1>
              <p className="text-base font-body">
                Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief
                ukiran menciptakan potret budaya Indonesia yang memukau.
              </p>
            </div>
            <a
              href="#"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative  bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={KETIGA}
              className="rounded-lg absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">
                Kraton Yogyakarta
              </h1>
              <p className="text-base font-body">
                Keelokan arsitektur Jawa, kehijauan taman, dan pesona sejarah
                yang terpancar. Suasana hangat dan detail artistik yang memikat
                perhatian.
              </p>
            </div>
            <a
              href="#"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
        </div>
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
          <div className="w-3/5 mt-5 flex h-60 pr-5 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
            <img src={PANTAI} alt="Foto" className="w-1/2 h-auto p-5" />
            <div className="justify-between">
              <h1 className="font-body text-2xl font-bold py-5">
                Pantai Parangtritis
              </h1>
              <p className="text-base  font-body">
                Keindahan pasir putih, ombak menarik, dan nuansa mistis.
                Aktivitas seru dan budaya bersatu dalam destinasi singkat.
              </p>
              <a href="">
                <button className="w-full p-1 mt-10 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]">
                  Lebih Lanjut
                </button>
              </a>
            </div>
          </div>
          <div className="w-3/5 mt-5 flex h-60 pr-5 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
            <img src={KEDUA} alt="Foto" className="w-1/2 h-auto p-5" />
            <div className="justify-between">
              <h1 className="font-body text-2xl font-bold py-5">
                Candi Prambanan
              </h1>
              <p className="text-base  font-body">
                Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief
                ukiran menciptakan potret budaya Indonesia yang memukau.
              </p>
              <a href="">
                <button className="w-full p-1 mt-10 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]">
                  Lebih Lanjut
                </button>
              </a>
            </div>
          </div>
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
  );
};

export default Home;
