import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "../App"
import Books from '../pages/Books'
function Router() {
  return (
   < BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/books' element={<Books/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router