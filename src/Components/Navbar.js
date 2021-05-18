import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../Assets/youtube-50.png"
import About from "../Assets/info-2-50.png"

function Navbar() {
    return (
       <nav>
           <Link to="/"><img src={Logo}/></Link>
           <Link to="/about"><img src={About}/></Link>
       </nav>
    )
}

export default Navbar
