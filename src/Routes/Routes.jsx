import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacts } from '../Pages/Contacts/Contacts'
import { Home } from '../Pages/Home/Home'

export function Rotas() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Contacts" exact element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
