import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
       <nav>
           <Link to="/">YouTube</Link>
           <Link to="/about">About</Link>
       </nav>
    )
}

export default Navbar
