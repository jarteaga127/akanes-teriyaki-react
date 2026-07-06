import AboutSec from "../components/AboutSec";
import BookingSec from "../components/BookingSec";
import HeroSec from "../components/HeroSec";
import OrderOnSec from "../components/OrderOnSec";

const HomePage = () => {
    return ( 
        <main>
        <HeroSec/>
        <BookingSec/>
        <OrderOnSec/>
        <AboutSec/>
        </main>
     );
}
 
export default HomePage;