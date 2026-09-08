import { Link } from "react-router-dom";
import HeroImage from "../assets/pexels-vitaliy-haiduk-326720599-17308569.jpg"


const HeroSec = () => {
  return ( 
    <section className="relative w-full min-h-[calc(100vh-56px)] overflow-hidden flex flex-col justify-end">
      
      {/* 1. Background Image Layer */}
      <img 
        src={HeroImage} 
        alt="Akane's Teriyaki Dish" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      {/* 3. Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '8.333% 12px',
        }}
      />
      
      {/* 4. Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 pt-24 flex flex-col items-end text-right">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] max-w-2xl drop-shadow-md">
          Welcome to Akane's Teriyaki Grill
        </h1>
        
        <Link 
          to="/our-menu" 
          className="w-full md:w-auto bg-red-800 text-center px-6 py-3 rounded-md text-white hover:bg-red-900 transition mt-6 font-medium shadow-lg"
        >
          Check out our menu
        </Link>
      </div>
    </section>
  );
}
 
export default HeroSec;