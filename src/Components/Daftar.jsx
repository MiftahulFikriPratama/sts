import React from "react";
import element1 from "../assets/Layer1.svg";
import element2 from "../assets/Layer2.svg";
import logo from "../assets/Logo.png";

const Daftar = () => {
  return (
    <div className="flex items-center justify-center relative bg-white">
      <img className="w-1/3 absolute top-0 right-0" src={element1} alt="" />
      <img className="absolute w-28 top-2 left-5" src={logo} alt="" />
      <img className="w-1/3 absolute bottom-0 right-0" src={element2} alt="" />

      <div className="flex gap-x-64 items-center">
        <div className="w-96 ">
          <h1 className="text-[#3c87ca] mt-32 font-body text-center font-bold text-3xl">
            Daftar Sekarang
          </h1>
          <p className="text-black font-body text-center font-normal">
            Masukkan data di bawah untuk daftar DestinAsyik
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan Nama"
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Usernama
              </label>
              <input
                type="text"
                id="usernama"
                placeholder="Masukkan Username"
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="handphone"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Nomor Handphone
              </label>
              <input
                type="text"
                id="handphone"
                placeholder="Masukkan Nomor"
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email"
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-body font-normal text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
              />
            </div>
            <a href="Landingpage">
            <button
              type="button"
              className="w-full p-3 font-body my-3 bg-[#3c87ca] text-white font-semibold rounded-full hover:bg-sky-800"
            >
              Daftar
            </button>
            </a>
            <p className="font-body text-black text-center pt-3 mb-16">
              Sudah punya akun?
              <a href="/Login" className="text-[#3c87ca]">
                {" "}
                Masuk sekarang
              </a>
            </p>
          </form>
        </div>
        <div>
          <h1 className="text-[#3c87ca] font-body text-center font-bold text-5xl">
            Siap Menjelajah? <br />
          </h1>
          <p className="text-black font-body text-center font-semibold text-lg">
            <br />
            Bingung Mau Pergi Kemana? <br /> DestinAsyik Solusinya!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
