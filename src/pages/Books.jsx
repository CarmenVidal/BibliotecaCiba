import React, { useEffect, useState }  from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
//import './App.css';
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
export default Books;

// function bookImage() {
//   
// let [bookImage, setbookImage] = useState(null)

//   // 3. Create out useEffect function
// useEffect(() => {
//   fetch("https://sheetlabs.com/MELQ/catalog")
//   .then(response => response.json())
//       
//   .then(data => setbookImage(data.message))
// },[])

// return (
//   <div className="App">
//      
//   {bookImage && <img src={bookImage}></img>}
//   </div>
// );

