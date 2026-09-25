import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import AboutUs from "./pages/AboutUs"
import BookingPage from "./pages/BookingPage"
import HomePage from "./pages/HomePage"
import OurMenu from "./pages/OurMenu"
import OnlineMenu from "./pages/OnlineMenu"
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
        <Route path="about-us" element={<AboutUs/>} />
        <Route path="order-online" element={<OnlineMenu/>} />
      </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
