import React from "react"

import Navbar from "../components/NavBar"
import FooterLinks from "../components/Footer"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <FooterLinks />
      </footer>
    </>
  )
}
