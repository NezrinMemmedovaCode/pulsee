import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
function Nav() {
  return (

    <div className='nav'>
    <div className="basliq">
        <h1>Pulse.</h1>

    </div>
    <div className='link'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Admin"}>Admin</Link>   
        <Link to={"/Add"}>Add</Link>
        <Link to={"/Wish"}>Wish</Link>

    

    </div>
    <div className="elaqe">
        <p className='p'>Reservations  </p>
        <p>652-345 3222 11</p>

    </div>
  
    </div>
   
  )
}

export default Nav