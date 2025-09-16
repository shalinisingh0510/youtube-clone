import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/video/:categoryId' element={<video/>}/>
      </Routes>
    </div>
  )
}

export default App
