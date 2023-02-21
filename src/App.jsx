import React, { useState } from 'react'
import { Bio, Songs, Form } from './components'
import './App.css'

const App = () => {
//   const [inputText, setInputText] = useState('')
//   const [todos, setTodos] = useState([{text: 'Teach React'}, {text: 'Tidy Desk'}, {text: 'Cook'}])
//   const handleClick = (e) => {
//     console.log(e.target.innerText)
//   }

  return (
    <>
      <Bio />
      <Songs />
      <Form />
    </>
  )
}

export default App
