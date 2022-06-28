import React from 'react'

function Book() {
  return (
  <>
    <div className='containerBook'>
        <div className='containerImagen'>
            <img className='imagen' src="https://tse2.explicit.bing.net/th?id=OIP.Dwqy4HA5fQ9XD7J4tBq_7QHaJD&pid=Api&P=0&w=160&h=196" alt="imagen-libro" />
        </div>
        <div className='containerTexto'>
          <p>titulo del libro</p>
          <p>autor</p> 
          <p>año</p>
        </div>

    </div>

  </>
    
  )
}

export default Book