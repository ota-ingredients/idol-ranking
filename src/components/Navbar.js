import React from 'react'
import { Link } from 'react-static'

import logo from '../logo.png'

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="container d-flex">
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="link-wrapper">
        <div className="navbar-link">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="navbar-link">
          <Link to="/policy">Policy</Link>
        </div>
        <div className="navbar-link">
          <Link to="/policy">Policy</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
