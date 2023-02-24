import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Songs, Form } from './pages'
import { NavBar } from './layout'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/songs' element={<Songs />} ></Route>
      </Routes>
    </div>
  )
}

export default App
