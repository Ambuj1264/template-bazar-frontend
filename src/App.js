import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Templates from './Components/Templates'
import Contact from "./Components/Contact"
import Footer from './Components/Footer'

import {Routes,Route} from "react-router-dom"
import Login from './Components/Login'
import Register from './Components/Register';
const App = () => {
  return (
    <div>

<Navbar />
<Routes>
  <Route path="/" element={<Home></Home>}/>
  <Route path="/about" element={<About></About>}/>
  <Route path="/template" element={<Templates></Templates>}/>
  <Route path="/contact" element={<Contact></Contact>}/>
  <Route path="/login" element={<Login></Login>}/>
  <Route path="/register" element={<Register></Register>}/>
  
</Routes>
<Footer></Footer>
  

    </div>
  )
}

export default App