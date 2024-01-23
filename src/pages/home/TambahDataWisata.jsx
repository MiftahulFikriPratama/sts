import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import foto from "../../assets/Image23.png";

const axiosHandler = async (url, data) => await axios.post(url, data);

const TambahDataWisata = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const value = {
      nama_tempat: data.nama_tempat,
      deskripsi_singkat: data.deskripsi_singkat,
      foto: data.foto,
      cover: data.cover,
      alamat: data.alamat,
      link_maps: data.link_maps,
      deskripsi_panjang: data.deskripsi_panjang,
      harga: data.harga,
    };
  

    const statement = "http://localhost:7730/api/v1/TambahDataWisata";

    try {
      const response = await axiosHandler(statement, value);

      Swal.fire({
        icon: "success",
        title: "Data Berhasil dimasukan",
        text: response.data,
      });

      reset();
      navigate("/Destinasi");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      });
    }
  };
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
                <form
                  className="w-full font-body"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <label
                    htmlFor="nama_tempat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Nama Tempat
                  </label>
                  <input
                    type="text"
                    id="nama_tempat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                    {...register("nama_tempat", { required: "Nama Tempat wajib diisi" })}
                  />

                  <label
                    htmlFor="alamat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Alamat
                  </label>
                  <input
                  {...register("alamat", { required: "Nama Tempat wajib diisi" })}
                    type="text"
                    id="alamat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="link_maps"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Link Maps
                  </label>
                  <input
                  {...register("link_maps", { required: "Nama Tempat wajib diisi" })}
                    type="text"
                    id="link_maps"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="deskripsi_singkat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Keterangan Singkat
                  </label>
                  <input
                  {...register("deskripsi_singkat", { required: "Nama Tempat wajib diisi" })}
                    type="text"
                    id="deskripsi_singkat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="deskripsi_panjang"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Deskripsi Wisata
                  </label>
                  <textarea
                  {...register("deskripsi_panjang", { required: "Nama Tempat wajib diisi" })}
                    id="deskripsi_panjang"
                    className="w-full h-32 py-1 px-3  mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />

                <label
                    htmlFor="harga"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Harga
                  </label>
                  <textarea
                  {...register("harga", { required: "Nama Tempat wajib diisi" })}
                    id="harga"
                    className="w-full h-32 py-1 px-3  mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />

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
                  <div className="flex gap-2">
                  <label
                    for="foto"
                    className="relative hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body mt-3 py-1 px-5 text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                    multiple
                    {...register("foto", { required: "Nama Tempat wajib diisi" })}
                      type="file"
                      id="foto"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                  <label
                    for="cover"
                    className="relative hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body mt-3 py-1 px-5 text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File  Cover</span>
                    <input
                    multiple
                    {...register("cover", { required: "Nama Tempat wajib diisi" })}
                      type="file"
                      id="cover"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                  </div>
                  
                  <div className="float-right">
                    <a
                      className=" flex mt-5 -ml-32 absolute rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body  "
                      href=""
                    >
                      <button type="submit">Simpan Data</button>
                    </a>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
};

export default TambahDataWisata;
