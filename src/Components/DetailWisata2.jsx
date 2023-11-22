import React from "react";
import foto from "../assets/Prambanan.png";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Carousel1 from "./Carousel1";
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
            Candi Prambanan
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
              Candi Prambanan
            </h1>
            <p className="font-body text-sm text-justify">
            Adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 masehi. Candi ini dipersembahkan untuk Trimurti, tiga dewa utama Hindu yaitu Brahma sebagai dewa pencipta, Wishnu sebagai dewa pemelihara, dan Siwa sebagai dewa pemusnah. Berdasarkan prasati Siwagrha nama asli kompleks candi ini adalah Siwagrha (bahsa Sansekerta yang bermakna ‘Rumah Siwa’), dan memang di garbagriha (ruang utama) candi ini bersemayam arca Siwa Mahadewa setinggi tiga meter yang menujukkan bahwa di candi ini dewa Siwa lebih diutamakan.
            </p>
            <p className="font-body text-sm text-justify my-5">
            Kompleks candi ini terletak di kecamatan Prambana Desa Bokoharjo, Sleman, Daerah Istimewa Yogyakarta dan kecamatan Prambanan, Klaten, Jawa Tengah kurang lebih 17 kilometer timur laut Yogyakarta, 50 kilometer barat daya Surakarta dan 120 kilometer selatan Semaranag, persis di perbatasan antara provinsi Jawa Tengah dan Daerah Istimewa Yogyakarta. Letaknya sangat unik, Candi Prambanan terletak di wilayah administrasi desa Bokoharjo, Prambanan, Sleman, sedangkan pintu masuk kompleks Candi Prambanan terletak di wilayah adminstrasi desa Tlogo, Prambanan, Klaten Jawa Tengah.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3559836812096!2d110.488892473725!3d-7.752015276861816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sCandi%20Prambanan!5e0!3m2!1sid!2sid!4v1700650422215!5m2!1sid!2sid" 
                frameborder="0"
              ></iframe>
              <div className="w-1/3">
                <h1 className="font-body">Alamat</h1>
                <p className="font-body text-sm">
                Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571
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
                  Tiket Masuk Warga Negara Indonesia
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    <li>Usia 10 Tahun Keatas Rp10.000</li>
                    <li>Usia 3 - 10 Tahun Rp25.000</li>
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  Tiket Masuk Warga Negara Asing
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    <li>Usia 10 Tahun Keatas Rp375.000</li>
                    <li>Usia 3 - 10 Tahun Rp225.000</li>
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
                <Carousel1 />
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
