import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>Tampilan home</h1>
        <h2>
            <Link to="/about">Klik untuk ke halaman about</Link>
        </h2>
    </div>
  )
}

export default Home