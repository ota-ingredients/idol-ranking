import React, { Component } from 'react'

import Image from '../components/Image'

import down from '../../public/icon/sort-down.svg'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 my-4">
            <h3>Here is our picks!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6 px-1 py-1">
            <Image width="100%" height="100%" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 px-1 py-1">
                <Image width="100%" height="200px" />
              </div>
              <div className="col-6 px-1 py-1">
                <Image width="100%" height="200px" />
              </div>
              <div className="col-6 px-1 py-1">
                <Image width="100%" height="200px" />
              </div>
              <div className="col-6 px-1 py-1">
                <Image width="100%" height="200px" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 d-flex justify-content-center">
            <img src={down} alt="" width="100" height="100" />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
