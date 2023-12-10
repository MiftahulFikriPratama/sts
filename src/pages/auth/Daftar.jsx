import React from "react";
import element1 from "../../assets/Layer1.svg";
import element2 from "../../assets/Layer2.svg";
import logo from "../../assets/Logo.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const axiosHandler = async (url, data) => await axios.post(url, data);

const Daftar = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isRegister, setRegister] = React.useState(false);

  const formHandle = () => {
    setRegister((prev) => !prev);
  };

  const onSubmit = async (data) => {
    const value = {
      email: data.email,
      nama: data.nama,
      password: data.password,
      no_hp: data.no_hp,
    };

    const statement = `http://localhost:7730/api/v1/${isRegister ? "Daftar" : "login"}`;

    try {
      const response = await axiosHandler(statement, value);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: response.data,
      });
      reset(); // Reset form setelah berhasil
      formHandle();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      });
    }
  };

  return (
    <div className="flex items-center justify-center relative bg-white">
      <img className="w-1/3 absolute top-0 right-0" src={element1} alt="" />
      <img className="absolute w-28 top-2 left-5" src={logo} alt="" />
      <img className="w-1/3 absolute bottom-0 right-0" src={element2} alt="" />

      <div className="flex gap-x-64 items-center">
        <div className="w-96">
          <h1 className="text-[#3c87ca] mt-32 font-body text-center font-bold text-3xl">
            Daftar Sekarang
          </h1>
          <p className="text-black font-body text-center font-normal">
            Masukkan data di bawah untuk daftar DestinAsyik
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                name="nama"
                placeholder="Masukkan Nama"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
                {...register("nama", { required: "Nama wajib diisi" })}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="no_hp"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Nomor Handphone
              </label>
              <input
                type="text"
                id="no_hp"
                name="no_hp"
                placeholder="Masukkan Nomor"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
                {...register("no_hp", { required: "Nomor Handphone wajib diisi" })}
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
                name="email"
                placeholder="Masukkan email"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
                {...register("email", { required: "Email wajib diisi" })}
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
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
                {...register("password", { required: "Password wajib diisi" })}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 font-body my-3 bg-[#3c87ca] text-white font-semibold rounded-full hover:bg-sky-800"
            >
              Daftar
            </button>
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
