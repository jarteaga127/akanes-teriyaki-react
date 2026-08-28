import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import { type MenuItem, menuData } from "../data/MenuData";
import "../styles/our-menu.css"

const OurMenu: React.FC = () => {
const bowls = menuData.filter(item => item.category === 'bowls');
const plates = menuData.filter(item => item.category === 'plates');
const sides = menuData.filter(item => item.category === 'sides');
const desserts = menuData.filter(item => item.category === 'desserts');
const drinks = menuData.filter(item => item.category === 'drinks');


    return ( 
        <section className="w-full bg-[#e3cdcd] min-h-screen py-8 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2a0808] tracking-tight mb-2">Our Menu</h1>
            <article className="space-y-1 mb-6"> 
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">Bowls</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bowls.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item}/>
                    ))}
                </div>
            </article>
            <article className="space-y-1 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">Plates</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plates.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                    
                </div>
            </article>
            <article className="space-y-1 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">Sides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sides.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                    
                </div>
            </article>
            <article className="space-y-1 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">Desserts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {desserts.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                    
                </div>
            </article>
            <article className="space-y-1 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2a0808] border-l-4 border-[#2a0808] pl-3 tracking-wide">Drinks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {drinks.map((item: MenuItem) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </article>
            <Link to="/" className="inline-block border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808] hover:text-white px-6 py-2.5 text-sm font-medium transition-colors rounded-sm shadow-sm">Back to home</Link>
        </section>
     );
}
 
export default OurMenu;