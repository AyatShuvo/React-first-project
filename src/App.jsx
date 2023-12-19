import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App=()=> {

  return (

<Router>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/product" element ={<Product/>} />
  <Route path="Contact" element ={<Contact/>} />
</Routes>

</Router>


  )
}

export default App
