 import React, {  useeffect,useState }  from 'react'
 import Header from '../components/Header'
 import Book from '../components/Book'
// import BooksData from '../assets/data/booksData.json'
//  import {services} from '../services/services'


 function Books() {
 
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
          <Book book={book}key={index}/>
        ))
      }  */}
      
        
       
     </div>
     </>
   )
 }
 export default Books

