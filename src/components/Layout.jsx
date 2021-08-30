import React from "react"

import Navbar from "../components/NavBar"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
