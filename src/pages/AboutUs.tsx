import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <section>
            <h1>About us</h1>
            <p>Kyoto ya Nara ni wa Nihon no furui bunka ga nokotteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitteireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>
        <Link to="/" className="link-001">Back to home</Link>
        </section>
     );
}
 
export default AboutUs;