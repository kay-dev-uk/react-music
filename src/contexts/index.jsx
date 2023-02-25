// DO USE CONTEXT FOR LIKES
import React, { createContext, useState, useContext } from "react";

const myContext = createContext();

export const MyContext = ({ children }) => {

  console.log(myContext)
    const [like, setLike] = useState();
  return (
    <>
        
        <myContext.Provider value={{ like, setLike }}>
            {children}
        </myContext.Provider>
    </>
  )
}

export const songContext = () => useContext(myContext)
