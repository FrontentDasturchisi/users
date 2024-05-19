import React from 'react'
import "./Navbar.css"

const Navbar = ({usersLengs}) => {
  return (
    <div className='navbar'>
        <div className='navbar-container container'>
            <h1 className='navbar-logo'>CUser</h1>
            <h3 className='navbar-counter'>
              {usersLengs>0 ? "You have:" + usersLengs : "No users :("}
            </h3>
        </div>
    </div>
  )
}

export default Navbar