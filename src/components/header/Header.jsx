import React from 'react'

import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to='/'>Home</Link>
          </div>
          <ul className="nav-links">
            <li>
                <Link to={"/watched"}>Watched List</Link>
            </li>
            <li>
                <Link to={"/watch"}>Watch List</Link>
            </li>            
          </ul>
        </div>       
      </div>
    </header>
  )
}

export default Header