import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Helmet>
            <title>Tyres on the Drive</title>
        </Helmet>
        <Header />
          {renderRoutes(Routes)}
        <Footer />
      </div>
    </BrowserRouter>
  )
}