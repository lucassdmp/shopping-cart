import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import {Container, Nav} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Store} from "./pages/Store"
import {About} from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./ctx/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Container className = "mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
