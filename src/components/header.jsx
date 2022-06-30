import React from 'react'
import logo from "../assets/img/icono-libro.png"
function Header() {
  return (
    <div className='containerPrincipal'>
        <div className="logoLibro">
            <img src={logo} alt="logo" />
        </div>
        <div className='textoHeader'>
            <h1>Home</h1>
            
        </div>
        

    </div>
  )
}

export default Header