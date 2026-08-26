import { Link } from "react-router-dom";


const HeroSec = () => {
    return ( 
        <section className="relative w-full min-h-[calc(100vh-56px)] bg-[#e3cdcd] overflow-hidden flex flex-col justify-end">
            <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '8.333% 12px', // 12-column grid alignment
        }}
      />
            
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 pt-24 flex flex-col items-end text-right">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#2a0808] tracking-tight leading-[1.05] max-w-2xl">Welcome to Akane's Teriyaki Grill</h1>
                
                    <Link to="/our-menu" className="border-red-800 bg-red-800 px-4 py-3 rounded-md text-white hover:bg-red-900">Check out our menu.</Link>
                
            </div>
        </section>
     );
}
 
export default HeroSec;