import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "../App"
import Books from '../pages/Books'
import Createpage from '../pages/Createpage'
function Router() {
  return (
   < BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/form' element={<Createpage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router