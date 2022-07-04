import React  from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
import BooksData from '../assets/data/booksData.json'


function Books() {
 
  return (
    <>
    <Header/>
    <div className='bookList'>
      {
        BooksData.BooksData.map((book,index)=>(
          <Book book={book}key={index}/>
        ))
      }
      
        
       
    </div>
    </>
  )
}

export default Books