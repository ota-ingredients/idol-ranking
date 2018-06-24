import React, { Component } from 'react'
import { Link } from 'react-static'
import Modal from 'react-modal'

import '../../public/scss/navbar.scss'
import logo from '../../public/icon/salad.svg'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '500px',
    height: '300px',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
}

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modelOpen: false,
    }
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }

  openModal = () => {
    console.log('open')
    this.setState({
      modelOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      modelOpen: false,
    })
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Modal
          isOpen={this.state.modelOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >
          <h1>Login</h1>
          <Link to="/feed" onClick={this.closeModal}>
            <button className="btn btn-primary">Login via Facebook</button>
          </Link>
        </Modal>
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
              <a onClick={this.openModal}>Login</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
