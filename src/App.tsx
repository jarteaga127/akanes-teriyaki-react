import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import OurMenu from "./pages/OurMenu"
import { Routes, Route } from "react-router-dom"


function App() {
 
  return (
    <>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/our-menu" element={<OurMenu/>} />
      </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
