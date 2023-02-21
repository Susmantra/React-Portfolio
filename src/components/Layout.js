import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <div>
        <div className="wrapper">
        {/* <!-- header section --> */}
        <Header />

        {children}

        {/* <!-- footer section --> */}
        <Footer />
        </div>
    </div>
  )
}

