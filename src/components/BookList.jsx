import React, { useEffect, useState }  from 'react'
import Header from '../components/Header'
import Book from '../components/Book'
//import './App.css';
//import {services} from '../services/services'


 function Books() {
 
 const [data, setData] = useState([]);
  //  const api=services();
   useEffect(()=> {
    fetch ("https://sheetlabs.com/MELQ/catalog")
    .then(apiLaCiba => apiLaCiba.json())
    .then(data =>setData(data))
   
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
    
   
     
     
     
        
       
     </div>
     </>
   )
 }
 export default Books

