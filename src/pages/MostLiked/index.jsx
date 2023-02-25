import React from 'react'
import { songContext } from '../../contexts'

//useContext or Redux here

const MostLiked = () => {
  const mostLiked = songContext()
  console.log(mostLiked)
  return (
    <>
      <h1>Most Liked Songs on this page</h1>
    </>
  )
}

export default MostLiked
