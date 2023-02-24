import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Songs, MostLiked, CatFact } from './pages'
import { NavBar } from './layout'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/songs' element={<Songs />} ></Route>
        <Route path='/most_liked' element={<MostLiked />} ></Route>
        <Route path='/cat_fact' element={<CatFact />} ></Route>
      </Routes>
    </div>
  )
}

export default App
