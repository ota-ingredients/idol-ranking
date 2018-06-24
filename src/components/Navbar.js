import React from 'react'
import { Link } from 'react-static'

import '../../public/scss/navbar.scss'
import logo from '../../public/icon/salad.svg'

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="container d-flex">
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="navbar-link">
          <Link to="/news">News</Link>
        </div>
        <div className="navbar-link">
          <Link to="/ranking">Ranking</Link>
        </div>
      </div>

      <div className="link-wrapper">
        <div className="navbar-link">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
