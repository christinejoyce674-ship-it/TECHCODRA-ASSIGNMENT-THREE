
import  React from "react"
import  { Routes,Route }  from "react-router"
import "./index.css"
import  Home from "./pages/Home"
import  About from "./pages/About"
import  Contact  from "./pages/Contact"
import  Skills from "./pages/Skills"



function  App (){
  return(
  <div>
    
    <Routes>
< Route  path ="/" element={<Home/>} />
< Route  path ="/about" element={<About/>} />
< Route  path ="/contact" element ={<Contact/>} />
< Route  path ="/skills" element ={<Skills/>} />


    </Routes>
  </div>)
}

export default   App