import React, {useState} from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
import BooksData from '../assets/data/booksData'


function Books() {
  const [books,setBooks]= useState(BooksData);

  console.log('bo',books)
  return (
    <>
    <Header/>
    <div className='bookList'>
        <Book data={books}/>
        
       
    </div>
    </>
  )
}

export default Books