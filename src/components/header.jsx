import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/icono-libro.png"
function Header() {
  return (
    <div className='containerPrincipal'>
        <div className="logoLibro">
            <img src={logo} alt="logo" />
        </div>
        <div className='textoHeader'>
          <Link to= '/'> <button className='link'>HOME</button></Link>
          <Link to= '/'>  <button className='link'>CREATE</button></Link>
          <Link to= '/'>  <button className='link'>REGISTRATION</button></Link>
        </div>
        

    </div>
  )
}

export default Header