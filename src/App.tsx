import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import BookingPage from "./pages/BookingPage"
import HomePage from "./pages/HomePage"
import OurMenu from "./pages/OurMenu"
import { Routes, Route } from "react-router-dom"


function App() {
 
  return (
    <>
      <Navbar/>
      <main>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/our-menu" element={<OurMenu/>} />
        <Route path="/book-a-table" element={<BookingPage/>} />
      </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
