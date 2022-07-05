import React, { useState }  from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
import BooksData from '../assets/data/booksData.json'
import {services} from '../services/services'


function Books() {
 
const [data, setData] = useState([]);

  const api=services();
  api.getBooks().then((resp)=>{
    setData(resp.data)
  })

  //console.log(data);



  return (
    <>
    <Header/>
    <div className='bookList'>

    {
        data.map((book,index)=>(
          <Book book={book}key={index}/>
        ))
      }
    
      {/* {
        BooksData.BooksData.map((book,index)=>(
          <Book book={book}key={index}/>
        ))
      }  */}
      
        
       
    </div>
    </>
  )
}

export default Books