import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/songs'>Songs</NavLink></li>
            {/* <li><NavLink to='/withdraw'>Withdraw</NavLink></li> */}
        </ul>
    </nav>
  )
}

export default NavBar
