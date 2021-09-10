import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () =>  {
    return (
        <div>
           <li><NavLink to="/home" >Home</NavLink></li>
           <li><NavLink to="/videos" >Videos</NavLink></li>
           <li><NavLink to="/videos/new" >Add new Video</NavLink></li>
        </div>
    )
}

export default NavBar
