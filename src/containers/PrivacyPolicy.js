import React from 'react'

import '../../public/scss/privacy.scss'
import withLayout from '../utils/withLayout'

const PrivacyPolicy = () => {
  return (
    <div className="content-wrapper">
      <h1>Privacy Policy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laborum
        doloremque a ipsum, voluptates ex magni. Totam, inventore ea sequi
        facilis incidunt eum accusamus vel impedit perspiciatis atque maxime!
        Reprehenderit!
      </p>
    </div>
  )
}

export default withLayout(PrivacyPolicy)
