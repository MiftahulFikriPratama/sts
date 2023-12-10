import React from "react";
import foto from "../../assets/Image23.png";

const TambahDataWisata = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-4/5 -mt-2">
          <div className="bg-white pb-24 flex flex-col rounded-md shadow-lg w-full mb-5">
            <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
              Form Tambah Data Wisata
            </h2>
            <div className="px-10">
              <div className="w-full mt-5 flex flex-col items-center">
                <form className="w-full font-body">
                  <label
                    htmlFor="Nama Tempat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Nama Tempat
                  </label>
                  <input
                    type="text"
                    id="nama"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Alamat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="alamat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Link Maps"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Link Maps
                  </label>
                  <input
                    type="tex"
                    id="linkmaps"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Keterangan Singkat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Keterangan Singkat
                  </label>
                  <input
                    type="text"
                    id="keterangan"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Deskripsi Wisata"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Deskripsi Wisata
                  </label>
                  <textarea
                    id="Deskripsi"
                    className="w-full h-32 py-1 px-3  mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />

                  <label className="block text-base font-medium text-black mb-1">
                    Harga
                  </label>
                  <table className="border border-black">
                    <thead className="bg-[#ECF3FB] ">
                      <tr>
                        <th className="py-2 px-4 border border-black w-56 ">
                          Keterangan
                        </th>
                        <th className="py-2 px-4 border border-black w-56 ">
                          Harga
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                        <td className=" border border-black">
                          <input
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <label className="block text-base mt-3 font-medium text-black mb-1">
                    Foto
                  </label>
                  <div className="flex">
                    <div className="border border-dashed border-black w-20 rounded-md px-2 py-1 mr-4 my-4">
                      <img src={foto} alt="" />
                      <p className="text-center">foto 1</p>
                    </div>
                    <div className="border border-dashed border-black w-20 rounded-md px-2 py-1 m-4">
                      <img src={foto} alt="" />
                      <p className="text-center">foto 2</p>
                    </div>
                    <div className="border border-dashed border-black w-20 rounded-md px-2 py-1 m-4">
                      <img src={foto} alt="" />
                      <p className="text-center">foto 3</p>
                    </div>
                    <div className="border border-dashed border-black w-20 rounded-md px-2 py-1 m-4">
                      <img src={foto} alt="" />
                      <p className="text-center">foto 4</p>
                    </div>
                  </div>
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
                  <div className="float-right" >
                    <a className=" flex mt-20 -ml-32 absolute rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body  " href="">
                      <button>Simpan Data</button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-2 w-64 ml-5 h-80 rounded-md shadow-lg bg-white">
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
