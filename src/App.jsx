import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Internship from './Internship'
import Contact from './Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Internship/>
      <Contact/>
    </div>
  )
}

export default App
