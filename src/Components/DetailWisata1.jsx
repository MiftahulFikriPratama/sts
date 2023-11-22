import React from "react";
import foto from "../assets/Parangtritis.png";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Carousel from "./Carousel";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStar} from "react-icons/fa6";
import Navbar from "./Navbar";
import { Footer } from "./Footer";



const DetailWisata = () => {
  return (
    <>
    <Navbar/>
    <div className="relative bg-[#FAFAFA]">
      <div className="relative">
        <img src={foto} alt="Parangtritis" className="max-w-full max-h-full" />
        <div className="absolute flex gap-16 left-0 bottom-0 text-white pl-10 pb-10">
          <h1 className="text-4xl font-bold tracking-wide">
            Pantai Parangtritis
          </h1>
        </div>
        <div className="flex gap-4 right-0 bottom-0 pr-10 pb-5 absolute text-white">
          <a className="text-4xl hover:text-[#3c87ca] " href="/">
            <FaInstagram />
          </a>
          <a className="text-4xl botton-0 right-0 hover:text-red-600" href="/">
            <MdOutlineFavoriteBorder />
          </a>
        </div>
      </div>
      <div className="flex  items-center justify-center">
        <div className="w-4/5 pb-24 relative   text-body text-lg font-semibold mt-10 pt-5 px-10 h-auto rounded-2xl ">
          <div className=" w-full  pb-3 gap-5 flex border-b-2 border-black">
            <a
              className="hover:text-white hover:bg-[#3c87ca] px-3  py-1 rounded-md after:border-b-[#122a3f] "
              href="#detail"
            >
              Detail
            </a>
            <a
              className="hover:text-white hover:bg-[#3c87ca] px-3 py-1 rounded-md focus:border-b-[#122a3f]"
              href="#lokasi"
            >
              Lokasi
            </a>
            <a
              className="hover:text-white hover:bg-[#3c87ca] px-3 py-1 rounded-md focus:border-b-[#122a3f]"
              href="#harga"
            >
              Harga
            </a>
            <a
              className="hover:text-white hover:bg-[#3c87ca] px-3 py-1 rounded-md focus:border-b-[#122a3f]"
              href="#foto"
            >
              Foto
            </a>
            <a
              className="hover:text-white hover:bg-[#3c87ca] px-3 py-1 rounded-md focus:border-b-[#122a3f]"
              href="#review"
            >
              Review
            </a>
          </div>
          <div className="">
            <h1
              id="detail"
              className=" text-[#3c87ca] text-2xl font-body my-2 font-bold"
            >
              Pantai Parangtritis
            </h1>
            <p className="font-body text-sm text-justify">
              Pantai Parangtritis adalah destinasi pantai yang menakjubkan di
              Yogyakarta, Indonesia. Pantai ini terkenal karena keindahan
              alamnya yang memukau, dengan garis pantai yang panjang, pasir
              putih lembut, dan ombak yang memikat. Suasana Pantai Parangtritis
              juga dipenuhi mitos dan kepercayaan lokal, menambahkan nuansa
              mistis yang menarik bagi pengunjung.
            </p>
            <p className="font-body text-sm text-justify my-5">
              Selain panorama alamnya yang menakjubkan, Pantai Parangtritis
              menawarkan berbagai aktivitas menarik, seperti naik delman di
              sepanjang pantai, menikmati permainan layang-layang, atau
              menyaksikan pesona sunset yang spektakuler. Pengunjung juga dapat
              menjelajahi gua-gua kecil di sekitar pantai yang diyakini memiliki
              nilai sejarah dan keindahan alam tersendiri.
            </p>
            <p className="font-body text-sm text-justify">
              Pantai Parangtritis juga dikenal sebagai tempat ritual keagamaan,
              terutama saat malam Jumat Kliwon menurut penanggalan Jawa.
              Ritual-ritual tersebut menciptakan suasana unik dan menarik bagi
              wisatawan yang tertarik dengan budaya lokal. Dengan kombinasi
              keindahan alam, keunikan budaya, dan beragam aktivitas yang
              ditawarkan, Pantai Parangtritis menjadi destinasi yang menarik
              perhatian bagi para pengunjung yang mencari pengalaman yang tak
              terlupakan di Yogyakarta.
            </p>
          </div>
          <div className="">
            <h1
              id="lokasi"
              className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
            >
              Lokasi
            </h1>
            <div className="flex gap-10">
              <iframe
                className="w-3/5 h-72 border-2 p-2 rounded-md border-[#3c87ca]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.973391826612!2d110.31847157748834!3d-8.02537792430924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b00975eac533d%3A0x351bfe1453e22e36!2sPantai%20Parangtritis!5e0!3m2!1sid!2sid!4v1700497493325!5m2!1sid!2sid"
                frameborder="0"
              ></iframe>
              <div className="w-1/3">
                <h1 className="font-body">Alamat</h1>
                <p className="font-body text-sm">
                  Jl. Pantai Parangkusumo, Pantai, Parangtritis, Kretek, Bantul,
                  Daerah Istimewa Yogyakarta, Indonesia, 55772
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h1
              id="harga"
              className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
            >
              Harga
            </h1>
            <table className="mt-5 font-body text-base ">
              <thead>
                <tr>
                  <th className=" p-2 bg-[#c8e2f8]">Keterangan</th>
                  <th className="p-2 pl-10 pr-3 bg-[#c8e2f8]">Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Tiket Masuk Pantai
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp10.000
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Parkir Roda Dua
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp3.000
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Parkir Roda Empat
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp10.000
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Fasilitas Andong
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp30.000
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Fasilitas Sandboarding
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp70.000
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Penyewaan Motor ATV Kecil
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp50.000/30 Menit
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                    Penyewaan Motor ATV Kecil
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    Rp100.000/30 Menit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <h1
              id="foto"
              className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
            >
              Foto
            </h1>
            <div className="justify-center items-center flex">
              <div className="w-2/3">
               <Carousel/>
              </div>
            </div>
          </div>
          <div className="mt-10">
          <h1
              id="review"
              className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
            >
              Review
            </h1>
            <div className="flex overflow-x-auto space-x-4 p-4 ">
            <div className="w-1/3 h-44  bg-white rounded-lg shadow-md ">
                <div className="flex">
                  <a className="text-4xl p-4" href="/"><FaRegUserCircle/></a>
                  <p className="text-md font-body pt-5">Miftahul Fikri</p>
                </div>
                <div className="flex pl-4 text-yellow-500">
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                </div>
                <p className="text-xs font-body pt-2 px-4">Tempat yang sangat menarik untuk dikunjungi, lokasi yang strategis dan juga pemandangan yang indah cocok untuk liburan dengan teman maupun keluarga.</p>
            </div>
            <div className="w-1/3 h-44 bg-white rounded-lg shadow-md ">
                <div className="flex ">
                  <a className="text-4xl p-4" href="/"><FaRegUserCircle/></a>
                  <p className="text-md font-body pt-5">Selvi </p>
                </div>
                <div className="flex pl-4 text-yellow-500">
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                </div>
                <p className="text-xs font-body pt-2 px-4">Tempat yang sangat menarik untuk dikunjungi, lokasi yang strategis dan juga pemandangan yang indah cocok untuk liburan dengan teman maupun keluarga.</p>
            </div>
            <div className="w-1/3 h-44 bg-white rounded-lg shadow-md">
                <div className="flex">
                  <a className="text-4xl p-4" href="/"><FaRegUserCircle/></a>
                  <p className="text-md font-body pt-5">Dimas</p>
                </div>
                <div className="flex pl-4 text-yellow-500">
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                </div>
                <p className="text-xs font-body pt-2 px-4">Tempat yang sangat menarik untuk dikunjungi, lokasi yang strategis dan juga pemandangan yang indah cocok untuk liburan dengan teman maupun keluarga.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DetailWisata;
