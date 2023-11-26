import React from 'react'
import "./Style/NonWisata.css"
import corney from "../assets/corney.png"
import Tepi from "../assets/tepisawah.png"
import oppio from "../assets/oppio.png"
import epic from "../assets/epic.png"
import Navbar from './Navbar'


const Nonwisata = () => {
  return (
   
      <>
          
          <section>
          

              <div className="custom-box">
                <img src={Tepi} alt="Foto" className="foto" />
                <div className="content">
                  <p className="teks-kanan">
                  <h1 className='text-3xl font-body'>Tepi Sawah Coffee Eatery</h1>
                  </p>
                  <p className="teks-kanan-deskripsi text-base font-body">
                  Sesuai namanya, kafe ini tepat berada di tepi sawah. Dengan bangunan utama berbentuk joglo, kafe ini mengusung konsep tradisional Jawa.
                  Tepi Sawah juga menyediakan outdoor yang pastinya seru saat dipakai untuk berkumpul dengan keluarga maupun teman. Paling pas, datang ke kafe ini saat sore hari sembari menikmati sunset.
                  </p>
                  <a href="/DetailWisata4"><button className="button mt-11 font-body">Lebih Lanjut</button></a>
                </div>
              </div>

              <div className="custom-box">
                <img src={oppio} alt="Foto" className="foto" />
                <div className="content">
                  <p className="teks-kanan">
                  <h1 className='text-3xl font-body'>Oppio Coffee Milk</h1>
                  </p>
                  <p className="teks-kanan-deskripsi text-base font-body">
                  Cafe hits Jogja selanjutnya ada Oppio Coffee Milk. 
                  Memiliki konsep suasana alam, cafe ini memberikan kamu kesempatan untuk memanjakan mata dengan melihat hamparan sawah hijau di sekelilingnya. Ada lapangan basket dan beberapa anjing kecil yang bisa menjadi pelepas penatmu juga loh. Dijamin suasana kafe di sini bisa buat kamu betah berlama-lama!
                  </p>
                  <a href="/DetailWisata5"><button className="button mt-11 font-body">Lebih Lanjut</button></a>
                </div>
              </div>

              <div className="custom-box">
                <img src={epic} alt="Foto" className="foto" />
                <div className="content">
                  <p className="teks-kanan">
                  <h1 className='text-3xl font-body'>Epic Coffee</h1>
                  </p>
                  <p className="teks-kanan-deskripsi text-base font-body">
                  Epic Coffee hadir dengan konsep bangunan industrial dan classic. Bangunan yang terbuka, dengan penataan ruangan yang dirancang sedemikian rupa sehingga tampak luas dan lapang. Selain itu, chef dan barista Epic Coffee semuanya profesional. Jadi, kamu akan nyaman nongkrong di sini sambil menikmati hidangan lezatnya.
                  </p>
                  <a href="/DetailWisata6"><button className="button mt-11 font-body">Lebih Lanjut</button></a>
                </div>
              </div>
              <div className="custom-box">
                <img src={corney} alt="Foto" className="foto" />
                <div className="content">
                  <p className="teks-kanan">
                  <h1 className='text-3xl font-body'>Carney Co</h1>
                  </p>
                  <p className="teks-kanan-deskripsi text-base font-body">
                  Cafe Carney Co memiliki arsitektur yang dominan warna putih dengan aksen warna pirus yang indah. Uniknya, Cafe Carney Co memiliki bangunan berbentuk piramida dengan rangka warna merah jambu dan panel kaca.
                  Area sekitar bangunan ini biasa digunakan untuk acara live music atau sebagai wedding venue. Bagian indoor-nya menyediakan tempat untuk bersantai seperti area bean bag, sofa, dan tempat duduk lainnya.
                  </p>
                  <button className="button mt-5 font-body">Lebih Lanjut</button>
                </div>
              </div>
          </section>

      </>
 
  )
}

export default Nonwisata