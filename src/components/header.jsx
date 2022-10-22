import React from 'react'
import logo from '../assets/img/icono-libro.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='containerPrincipal'>
        <div className="logoLibro">
            <img src={logo} alt="logo" />
        </div>
        <nav className='textoHeader'>
       <ul>
         <li class="var-menu-btn">
           <Link to='/bookspage'className="nav-link">Home</Link>
         </li>
         <li className="var-menu-btn">
           <Link to='/newBook' className="nav-link" >Create</Link>
         </li>
        <li class="dropdown">
          <span>Registration</span>
        <div class="dropdown-content">
           <p>Sign In</p>
           <p>LogIn</p>
        </div>
        </li>
      </ul>
      </nav>
     </div>   

    
    )
}
 
export default Header


{/* < Link to = "/"><button className='link'>HOME</button></Link>
           < Link to = "/form"><button className='link'>CREATE</button></Link>
           < Link to = "/"><button className='link'>REGISTRATION</button></Link> */}
       