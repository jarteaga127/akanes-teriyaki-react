import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-red-800 border-b border-red-800 w-full">
      {/* Top Bar Container - py-3 or py-4 provides clean vertical padding */}
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-3">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold text-white tracking-wide">
            Akane's Teriyaki
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-red-100 transition">Home</Link>
          <Link to="/about-us" className="text-sm font-medium text-white hover:text-red-100 transition">Read our story</Link>
          <Link to="/our-menu" className="text-sm font-medium text-white hover:text-red-100 transition">Check out our menu</Link>
          <Link to="/book-a-table" className="text-sm font-medium text-white hover:text-red-100 transition">Book a table with us</Link>
          <Link to="/" className="text-sm font-medium text-white hover:text-red-100 transition">Order online</Link>
          <Link to="/" className="text-sm font-medium text-white hover:text-red-100 transition">Contact us</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Stacked Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col border-t border-red-800 bg-red-800 w-full h-screen">
          <Link
            to="/"
            className="w-full px-4 py-3 text-base text-white border-b border-red-800 hover:bg-red-700 transition-colors block"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="w-full px-4 py-3 text-base text-white border-b border-red-800 hover:bg-red-700 transition-colors block"
            onClick={() => setIsOpen(false)}
          >
            Read our story
          </Link>
          <Link
            to="/our-menu"
            className="w-full px-4 py-3 text-base text-white border-b border-red-800 hover:bg-red-700 transition-colors block"
            onClick={() => setIsOpen(false)}
          >
            Check out our menu
          </Link>
          <Link
            to="/book-a-table"
            className="w-full px-4 py-3 text-base text-white border-b border-red-800 hover:bg-red-700 transition-colors block"
            onClick={() => setIsOpen(false)}
          >
            Book a table with us
          </Link>
          <Link
            to="/"
            className="w-full px-4 py-3 text-base text-white border-b border-red-800 hover:bg-red-700 transition-colors block"
            onClick={() => setIsOpen(false)}
          >
            Order online
          </Link>
          <Link
            to="/"
            className="w-full px-4 py-3 text-base text-white hover:bg-red-700 transition-colors block"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;