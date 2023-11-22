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
    <h1>Bingung Mau Pergi Kemana?</h1>
    <p>DestinAsyik Solusi Nya!</p>
    <p className="teks2">Easy Way To Find And Go</p>
  </div>
</div>
</section>

{/* section3  */}

<section>
  <div className="teks3">
  <h1>Rekomendasi Bulan Ini</h1>
  </div>
  <div className="container">
      <div className="box">
        <h1 className="judulbox">Malioboro</h1>
        <img src={PERTAMA} alt="Gambar 1" />
        <p className="teksbox">Jalan ikonik di Yogyakarta, pusat perbelanjaan dan hiburan malam dengan suasana khas, pedagang kaki lima, dan lampu neon yang menarik.</p>
        <a href="#" className="arrow-icon">&#10148;</a>
      </div>
      
      <div className="box">
      <h1 className="judulbox">Candi Prambanan</h1>
        <img src={KEDUA} alt="Gambar 2" />
        <p className="teksbox">Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief ukiran menciptakan potret budaya Indonesia yang memukau.</p>
        <a href="#" className="arrow-icon">&#10148;</a>
      </div>

      <div className="box">
      <h1 className="judulbox">Keraton Jogja</h1>
        <img src={KETIGA} alt="Gambar 3" />
        <p className="teksbox">Keelokan arsitektur Jawa, kehijauan taman, dan pesona sejarah yang terpancar. Suasana hangat dan detail artistik yang memikat perhatian.</p>
        <a href="#" className="arrow-icon">&#10148;</a>
      </div>
    </div>
</section>

{/* section4  */}

<section>
<button className="combined-button">
    <div className="additional-box">-</div>
    <span id="non-wisata">Non-Wisata</span>
    <p className="batas">|</p>
    <span id="wisata">Wisata</span>
</button>

<div className="search">
      <input type="text" placeholder="    Search..." />
    </div>
</section>

{/* section5  */}

<section>
<div className="custom-box">
      <img src={PANTAI} alt="Foto" className="foto" />
      <div className="content">
        <p className="teks-kanan">
        <h1>Pantai Parangtritis</h1>
        </p>
        <p className="teks-kanan-deskripsi">
        Keindahan pasir putih, ombak menarik, dan nuansa mistis. Aktivitas seru dan budaya bersatu dalam destinasi singkat.
        </p>
        <button className="button">Lebih Lanjut</button>
      </div>
    </div>

    <div className="custom-box">
      <img src={KEDUA} alt="Foto" className="foto" />
      <div className="content">
        <p className="teks-kanan">
        <h1>Candi Prambanan</h1>
        </p>
        <p className="teks-kanan-deskripsi">
        Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief ukiran menciptakan potret budaya Indonesia yang memukau.
        </p>
        <button className="button">Lebih Lanjut</button>
      </div>
    </div>

    <div className="custom-box">
      <img src={SAWAH} alt="Foto" className="foto" />
      <div className="content">
        <p className="teks-kanan">
        <h1>Tepi Sawah Coffee Eatery</h1>
        </p>
        <p className="teks-kanan-deskripsi">
        Kafe ini tepat berada di tepi sawah. Dengan bangunan utama berbentuk joglo, kafe ini mengusung konsep tradisional Jawa.
        </p>
        <button className="button">Lebih Lanjut</button>
      </div>
    </div>
</section>


    </>
  )
}

export default Home