<<<<<<< HEAD
 import React, {  useeffect,useState }  from 'react'
 import Header from '../components/Header'
 import Book from '../components/Book'
// import BooksData from '../assets/data/booksData.json'
//  import {services} from '../services/services'
=======
import React, { useEffect, useState }  from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
//import './App.css';
//import {services} from '../services/services'
>>>>>>> 14418c0b3750b773bfd75bfaea8020799be47925


 function Books() {
 
<<<<<<< HEAD
 const [data, setData] = useState([]);

  //  const api=services();
   useeffect(()=> {
    fetch ("https://sheetlabs.com/MELQ/catalog")
    .then(apiLaCiba => apiLaCiba.json())
    .then(data =>setData(data.Book))
   
   },[])
    
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
=======
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
>>>>>>> 14418c0b3750b773bfd75bfaea8020799be47925
          <Book book={book}key={index}/>
        ))
     }
     
     
     
        
       
<<<<<<< HEAD
     </div>
     </>
   )
 }
 export default Books
=======
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
>>>>>>> 14418c0b3750b773bfd75bfaea8020799be47925

