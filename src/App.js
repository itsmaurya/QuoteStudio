import React from 'react'
import AQuote from './AQuote'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MQuote from './MQuote'
import AddQuote from './AddQuote'
import Footer from './Footer'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<AQuote/>}></Route>
            <Route path='/mquotes' element={<MQuote/>}></Route>
            <Route path='/addquotes' element={<AddQuote/>}></Route>

        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}
