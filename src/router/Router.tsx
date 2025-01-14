import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Aboutus, Contact, HomePage, Infratecture, Products, QualityPolicy } from '../pages'
import { Navbar } from '../pages/user/home/components'
import { Footer } from '../pages/user/home/footer'

const Router:React.FC = () => {
  return (
    <>
        <Navbar/>
       <Routes>
        <Route index element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/infratecture' element={<Infratecture/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/quality-policy' element={<QualityPolicy/>} />
       </Routes>
       <Footer/>
    </>
  )
}

export default Router
