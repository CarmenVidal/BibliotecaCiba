import React from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
   
     <Header/>
    <div className='containerHome'>
        <h1>Bienvenidas a la Libreria de La Ciba</h1>
        <p>si quieres usar la aplicacion presiona el boton que tienes debajo</p>
       <Link to ='/books'><button className='start'>start</button></Link>      
    </div>
    </>
  )
}

export default Home

