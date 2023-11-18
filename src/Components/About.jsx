import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>Tampilan About</h1>
        <h2>
            <Link to="/">Klik untuk ke halaman Home</Link>
        </h2>
    </div>
  )
}

export default About