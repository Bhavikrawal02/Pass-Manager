import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footercomp from './Components/Footercomp'

function App() {

  return (
    <>
    <Navbar/>
    <Manager/>
    <Footercomp/>
    </>
  )
}

export default App
