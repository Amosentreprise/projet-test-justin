import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home/Home'
import Property from './Views/Property/Property'
import PropertySingle from './Views/PropertySingle/PropertySingle'
import About from './Views/About/About'
import Login from "./Views/Common/Login.jsx"



function App() {
  

  return (
    <div >
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/property" element={<Property/>}/>
           <Route path="/propertySingle" element={<PropertySingle/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
    
  )
}

export default App
