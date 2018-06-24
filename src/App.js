import React from 'react'
import { Router, Link, Head } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
//
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import client from './connectors/apollo'
import store from './connectors/redux'

import '../public/scss/custom.scss'

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <div>
          <Head>
            <meta charSet="UTF-8" />
            <title>This is my page title!</title>
          </Head>
          <div className="container">
            <Routes />
          </div>
        </div>
      </Router>
    </Provider>
  </ApolloProvider>
)

export default hot(module)(App)
