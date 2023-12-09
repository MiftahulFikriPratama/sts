import React from "react";
import foto from "../assets/image/Image23.png";

const TambahDataWisata = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-4/5 mt-10">
        <div className="bg-white pb-12 flex flex-col rounded-md shadow-lg w-full mb-5">
            <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
              Form Tambah Paket Wisata
            </h2>
            <div className="px-10">
              <div className="w-full mt-5 flex flex-col items-center">
                <form className="w-full font-body">
                  <label
                    htmlFor="Nama Paket"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Nama Paket
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Nama Paket"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Lama Kegiatan
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <label
                    htmlFor="Deskripsi Wisata"
                    className="block text-base font-medium text-black mb-1">
                    Deskripsi Wisata
                  </label>
                  <textarea
                    id="Deskripsi"
                    className="w-full h-32 py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />
                   <label
                    htmlFor=" Rangkaian Kegiatan"
                    className="block text-base font-medium text-black mb-1" >
                    Rangkaian Kegiatan
                  </label>
                  <textarea
                    id="Rangkaian"
                    className="w-full h-32 py-1  mb-3 rounded-md px-3 border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />
                   <label
                    htmlFor="Fasilitas"
                    className="block text-base font-medium text-black mb-1" >
                    Fasilitas
                  </label>
                  <textarea
                    id="Fasilitas"
                    className="w-full h-32 py-1  mb-3 rounded-md px-3 border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />
                   <label
                    htmlFor="Biaya"
                    className="block text-base font-medium text-black mb-1" >
                    Biaya
                  </label>
                  <textarea
                    id="Biaya"
                    className="w-full h-32 py-1  mb-3 rounded-md px-3 border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />
                  <div className="float-right" >
                    <a className=" flex mt-10 -ml-32  rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body  " href="">
                      <button>Simpan Data</button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>

        <div className="mt-10 w-64 ml-5 h-80 rounded-md shadow-lg bg-white">
          <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
            Foto Cover
          </h2>
          <div>
            <div className="bg-[#3c87ca] font-body m-2 text-white p-2 pl-4 rounded-md">
              <p>Format</p>
              <p>.png .jpg .jpeg</p>
            </div>
            <div className="flex justify-center">
              <div className="border border-dashed border-black w-20 rounded-md px-2 py-1 m-4">
                <img src={foto} alt="" />
                <p className="text-center">foto 3</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
              <label
                    for="fileInput"
                    className="relative hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body mt-3 py-1 px-5 text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                      type="file"
                      id="fileInput"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahDataWisata;
