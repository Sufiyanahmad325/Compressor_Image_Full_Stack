import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
