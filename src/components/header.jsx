import React from 'react'
import logo from "../assets/img/icono-libro.png"
function Header() {
  return (
    <div className='containerPrincipal'>
        <div className="logoLibro">
            <img src={logo} alt="logo" />
        </div>
        <div className='textoHeader'>
            <h1>HOME</h1>
            <h2>CREATE</h2>
            <h3>REeGISTRATION</h3>
        </div>
        

    </div>
  )
}

export default Header