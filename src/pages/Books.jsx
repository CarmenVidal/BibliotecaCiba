import React from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
import BooksData from '../assets/data/booksData'

function Books() {
  console.log(BooksData)
  return (
    <>
    <Header/>
    <div className='bookList'>
        <Book 
        BooksData={BooksData}/>
        <Book/>
        <Book/>
        
        <Book/>
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