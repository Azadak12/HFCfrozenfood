import Home from "./Components/Home"
import Mynavbar from "./Components/Mynavbar"
import {  Routes,Route } from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Menu from "./Components/Menu"
function App() {
  return (
    <div>
    
      <Mynavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Menu" element={<Menu/>}/>
      </Routes>
      
    </div>
  )
}

export default App
