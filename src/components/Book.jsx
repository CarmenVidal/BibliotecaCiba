import React from 'react'
import star from '../assets/img/icono-estrella.png'
import editar from '../assets/img/icono-editar.png'
import basura from '../assets/img/icono-basura.png'
import corazon from '../assets/img/icono-corazon.png'
import ojo from '../assets/img/icono-ojo.png'
function Book(props) {
  const{data}=props
  console.log(props)
  return (
  <>
  {
   data.map((book) =>{
    return <div className='containerBook'>
    <div className='containerImagen'>
          <img className='imagen' src="https://tse2.explicit.bing.net/th?id=OIP.Dwqy4HA5fQ9XD7J4tBq_7QHaJD&pid=Api&P=0&w=160&h=196" alt="imagen-libro" />
    </div>
  <div className='iconos'>
      <div className='containerIcono1'>
          <div className='emoji'>
            <img className='icono-estrella' src={star} alt= "star Icon" />
          </div>

          <div className='corazon'>
            <img className='icono-corazon' src={corazon}alt="icono-corazon" />

          </div>
          <div className='estrella'>
             <img className='icono-estrella' src={star} alt= "icono-estrella" />
          </div>
              
          <div className='ojo'>
              <img className='icono-ojo' src={ojo} alt="icono-ojo" />
           </div>
  
      </div>
     <div className='containerIcono2'>
   
        <div className='editar'>
            <img className='icono-editar' src={editar} alt='icono-editar' />
        </div>
        <div className='basura'>
            <img className='icono-basura' src={basura} alt='icono-basura'/>
       </div>
    
    </div>
  </div>
   

   

    <div className='containerTexto'>
      <p>titulo del libro</p>
      <p>autor</p> 
      <p>año</p>
    </div>


</div>
   
   })
  }
    

  </>
    
  ) 
}

export default Book