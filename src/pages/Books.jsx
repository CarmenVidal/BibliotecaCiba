import React, { useEffect, useState }  from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
//import {services} from '../services/services'


function Books() {
 
const [booksData, setBooksData] = useState([]);
//const api=services();

    useEffect(() => {
      fetch("https://sheetlabs.com/MELQ/catalog")
      .then(response => response.json())
       .then(data => setBooksData(data))
    },[])
    
  
    
    return (
    <>
    <Header/>
    <div className='bookList'> 
    {
         
      }
      

    
      {
        booksData.map((book,index)=>(
          <Book book={book}key={index}/>
        ))
     }
      
        
       
    </div>
    </>
  )
}

export default Books