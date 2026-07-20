import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/pricing' element={<Pricing />} />
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App