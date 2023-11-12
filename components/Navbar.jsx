import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    
  return (
    <div>
        <nav class="navbar">
          <h2>
            <Link style={{ textDecoration: "none" }} href={"/"}>Picter</Link>
          </h2>
        <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link style={{ textDecoration: "none" }} href ="/">Home</Link></li>
                <li><Link style={{ textDecoration: "none" }} href ="/about">About</Link></li>
                <li><Link style={{ textDecoration: "none" }} href ="images/images">Images</Link></li>
                <li><Link style={{ textDecoration: "none" }} href ="/contact">Contact</Link></li>
                
            </ul>
        </div>
    </nav>
    
    </div>
  )
}

export default Navbar