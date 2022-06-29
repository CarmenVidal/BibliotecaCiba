import React from 'react'
import Header from '../components/Header'
import Book from '../components/Book'


function Books() {
  return (
    <>
    
      <Header/>
      <div className='bookList'>
          <Book/>
          <Book/>
          <Book/>
          <Book/>
          <Book/> 
          <Book/>
          <Book/>
          <Book/>
     </div>
    </>
  )
}

export default Books