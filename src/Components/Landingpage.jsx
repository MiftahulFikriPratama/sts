import React from 'react'
import "./Style/Home.css"
import LOGO from "../assets/image/logo.png"
import JOGJA from "../assets/image/jogja.png"
import PERTAMA from "../assets/image/malioboro.png"
import KEDUA from "../assets/image/candiprambanan.png"
import KETIGA from "../assets/image/keratonjogja.png"
import PANTAI from "../assets/image/pantai.png"
import SAWAH from "../assets/image/TepiSawahCoffeeEatery.png"
import Navbar from './Navbar'
import { Footer } from './Footer'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";


const Home = () => {
  return (
    <>
    <Navbar/>
    {/* section1  */}

   

{/* section2  */}

<section>
<img src={JOGJA} alt="Jogja Image" className="background-image" />
<div className="teks">
  <div className="teks1">
    <h1 className='font-body'>Bingung Mau Pergi Kemana?</h1>
    <p className='font-body'>DestinAsyik Solusi Nya!</p>
    <p className="teks2 font-body">Easy Way To Find And Go</p>
  </div>
</div>
</section>

{/* section3  */}

<section>
  <div className="teks3">
  <h1 className='font-body'>Rekomendasi Bulan Ini</h1>
  </div>
  <div className="container">
      <div className="box shadow-md hover:border-2 hover:border-[#3c87ca]">
        <h1 className="judulbox font-body">Malioboro</h1>
        <img src={PERTAMA} alt="Gambar 1" />
        <p className="teksbox font-body">Jalan ikonik di Yogyakarta, pusat perbelanjaan dan hiburan malam dengan suasana khas, pedagang kaki lima, dan lampu neon yang menarik.</p>
        <a href="#" className="text-3xl float-right pr-5 pb-2 hover:text-[#3c87ca] "><BsArrowRightCircleFill/></a>
      </div>
      
      <div className="box shadow-md hover:border-2 hover:border-[#3c87ca]">
      <h1 className="judulbox font-body">Candi Prambanan</h1>
        <img src={KEDUA} alt="Gambar 2" />
        <p className="teksbox font-body">Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief ukiran menciptakan potret budaya Indonesia yang memukau.</p>
        <a href="/detailwisata2" className="text-3xl float-right  pr-5 pb-2 hover:text-[#3c87ca]"><BsArrowRightCircleFill/></a>
      </div>

      <div className="box shadow-md hover:border-2 hover:border-[#3c87ca]">
      <h1 className="judulbox font-body">Keraton Jogja</h1>
        <img src={KETIGA} alt="Gambar 3" />
        <p className="teksbox font-body">Keelokan arsitektur Jawa, kehijauan taman, dan pesona sejarah yang terpancar. Suasana hangat dan detail artistik yang memikat perhatian.</p>
        <a href="/detailwisata3" className="text-3xl float-right pr-5 pb-2 hover:text-[#3c87ca]"><BsArrowRightCircleFill/></a>
      </div>
    </div>
</section>

{/* section4  */}

<section>
<button className="combined-button">
    <div className="additional-box">-</div>
    <a href="/Nonwisata"></a><span id="non-wisata">Non-Wisata</span>
    <p className="batas">|</p>
    <span id="wisata">Wisata</span>
</button>

<div className="search flex">
      <input className='pl-5 border shadow-md border-slate-300 rounded-2xl text-md placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500' type="text" placeholder="Search..." />
      <a className='absolute text-2xl p-1.5 ml-56 hover:text-[#3c87ca]' href="#"><IoSearch/></a>
    </div>
</section>

{/* section5  */}

<section>
<div className="custom-box">
      <img src={PANTAI} alt="Foto" className="foto" />
      <div className="content">
        <p className="teks-kanan">
        <h1 className='font-body'>Pantai Parangtritis</h1>
        </p>
        <p className="teks-kanan-deskripsi font-body">
        Keindahan pasir putih, ombak menarik, dan nuansa mistis. Aktivitas seru dan budaya bersatu dalam destinasi singkat.
        <br /><br /></p>
        <a href="/detailwisata1"><button className="button font-body">Lebih Lanjut</button></a>
      </div>
    </div>

    <div className="custom-box">
      <img src={KEDUA} alt="Foto" className="foto" />
      <div className="content">
        <p className="teks-kanan">
        <h1 className='font-body'>Candi Prambanan</h1>
        </p>
        <p className="teks-kanan-deskripsi font-body">
        Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief ukiran menciptakan potret budaya Indonesia yang memukau.
        </p>
        <a href="/detailwisata2"><button className="button font-body">Lebih Lanjut</button></a>
      </div>
    </div>

    <div className="custom-box">
      <img src={SAWAH} alt="Foto" className="foto" />
      <div className="content">
        <p className="teks-kanan">
        <h1 className='font-body'>Tepi Sawah Coffee Eatery</h1>
        </p>
        <p className="teks-kanan-deskripsi font-body">
        Kafe ini tepat berada di tepi sawah. Dengan bangunan utama berbentuk joglo, kafe ini mengusung konsep tradisional Jawa.
        </p>
        <a href="/detailwisata4"><button className="button font-body">Lebih Lanjut</button></a>
      </div>
    </div>
    <div className='mt-10'>

</div>
</section>
    <Footer/>

    </>
  )
}

export default Home