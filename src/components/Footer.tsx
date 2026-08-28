import { Link } from "react-router-dom";


const Footer = () => {
    return ( 
        <footer className="w-full bg-red-800 text-white py-12 px-6 border-t border-red-900/50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
             <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-red-200 tracking-wide border-b border-red-900/50 pb-2">
            Akane's Teriyaki Grill
          </h3>
          <dl className="text-sm space-y-2 text-slate-200">
            <div>
              <dt className="font-semibold text-xs text-red-300 uppercase tracking-wider">Address</dt>
              <dd className="mt-0.5">〒123-4567 Tokyo, Nerima-ku 1-23-4 Shizuku Building 1F</dd>
            </div>
            <div>
              <dt className="font-semibold text-xs text-red-300 uppercase tracking-wider">TEL</dt>
              <dd className="mt-0.5">012-3456-7890</dd>
            </div>
            <div>
              <dt className="font-semibold text-xs text-red-300 uppercase tracking-wider">Hours</dt>
              <dd className="mt-0.5">11:00 A.M. ~ 11:00 P.M. <span className="text-xs text-slate-300 block sm:inline">(Eat in closes at 10:30 P.M.)</span></dd>
            </div>
          </dl>
        </div>
            <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-red-200 tracking-wide border-b border-red-900/50 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-slate-200 hover:text-red-200 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/our-menu" className="text-slate-200 hover:text-red-200 transition-colors">Our menu</Link>
            </li>
            <li>
              <Link to="/book-a-table" className="text-slate-200 hover:text-red-200 transition-colors">Book a table</Link>
            </li>
            <li>
              <Link to="/order-online" className="text-slate-200 hover:text-red-200 transition-colors">Order online</Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-slate-200 hover:text-red-200 transition-colors">Contact us</Link>
            </li>
          </ul>
        </div>
            <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-red-200 tracking-wide border-b border-red-900/50 pb-2">
            Follow us online!
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-red-200 transition-colors">X / Twitter</a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-red-200 transition-colors">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-red-200 transition-colors">Instagram</a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-red-200 transition-colors">Pinterest</a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-red-200 transition-colors">YouTube</a>
            </li>
          </ul>
        </div>
          </div>  
        </footer>
     );
}
 
export default Footer;
<footer>
    
</footer>