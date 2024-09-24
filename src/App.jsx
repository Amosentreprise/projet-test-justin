import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home/Home'
import Property from './Views/Property/Property'
import PropertySingle from './Views/PropertySingle/PropertySingle'
import About from './Views/About/About'
import Login from "./Views/Common/Login.jsx"
import SignUp from './Views/Common/SignUp.jsx'



function App() {
  

  return (
    <div >
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/alouer" element={<Property/>}/>
           <Route path="/annonce" element={<PropertySingle/>}/>
           <Route path="/avendre" element={<About/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<SignUp/>}/>
        </Routes>
    </div>
    
  )
}

export default App
