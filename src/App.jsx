import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Songs, MostLiked, CatFact } from './pages'
import { MyContext } from './contexts'
import { NavBar } from './layout'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <MyContext>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/songs' element={<Songs />} ></Route>
          <Route path='/most_liked' element={<MostLiked />} ></Route>
          <Route path='/cat_fact' element={<CatFact />} ></Route>
        </Routes>
      </MyContext>
    </div>
  )
}

export default App
