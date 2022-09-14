import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { AboutUs } from '../Pages/AboutUs/AboutUs'
import { Contacts } from '../Pages/Contacts/Contacts'
import { Home } from '../Pages/Home/Home'
import { Portfolio } from '../Pages/Portfolio/Portfolio'
import { Services } from '../Pages/Services/Services'

export function Rotas() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* <Route path="/Portfolio" element={<Portfolio />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
