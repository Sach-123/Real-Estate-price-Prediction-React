import React from 'react'
import Home from './components/Home';
import Map from './components/Map';
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/map' element={<Map/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}