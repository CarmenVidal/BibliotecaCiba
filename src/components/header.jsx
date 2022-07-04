import React from 'react'
import logo from "../assets/img/icono-libro.png"
function Header() {
  return (
    <div className='containerPrincipal'>
        <div className="logoLibro">
            <img src={logo} alt="logo" />
        </div>
        <div className='textoHeader'>
            <button className='link'>HOME</button>
            <button className='link'>CREATE</button>
            <button className='link'>REGISTRATION</button>
        </div>
        

    </div>
  )
}

export default Header