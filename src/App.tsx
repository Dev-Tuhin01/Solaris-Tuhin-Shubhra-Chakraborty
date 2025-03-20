import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import Skills from './pages/About.tsx';

const App:React.FC = () => {

  return (
    <div className='font-Monteserrat'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
