import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <section className="w-full bg-[#e3cdcd] min-h-screen py-8 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2a0808] tracking-tight mb-2">About us</h1>
            <div className="w-full h-64 sm:h-80 md:h-96 bg-[#2a0808]/10 rounded-lg border border-[#2a0808]/20 overflow-hidden flex items-center justify-center"></div>
            <div>
            <p>Kyoto ya Nara ni wa Nihon no furui bunka ga nokotteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitteireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>
            </div>
        <Link to="/" className="inline-block border border-[#2a0808] text-[#2a0808] hover:bg-[#2a0808] hover:text-white px-6 py-2.5 text-sm font-medium transition-colors rounded-sm shadow-sm">Back to home</Link>
        </section>
     );
}
 
export default AboutUs;