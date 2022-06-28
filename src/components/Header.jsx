import React from 'react'
import logo from "../assets/img/imglibro.png"
function Header() {
  return (
    <div className='containerPrincipal'>
        <div className="logoLibro">
            <img src={logo} alt="logo" />
        </div>
        <div className='texto'>
            <h1>Home</h1>
        </div>
        

    </div>
  )
}

export default Header