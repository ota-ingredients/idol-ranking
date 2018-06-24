import React from 'react'

import Navbar from '../components/Navbar'

const withLayout = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Navbar />
          <WrappedComponent />
        </div>
      )
    }
  }
}

export default withLayout
