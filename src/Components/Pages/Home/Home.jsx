import './home.scss'
import { AboutUs } from '../AboutUsSection/AboutUs.jsx';
import { Contact } from '../Contact/Contact.jsx';
import { Hero } from '../HeroSection/Hero.jsx';
import { LatestProducts } from '../LatestProducts/LatestProducts.jsx';

export const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <AboutUs />
            <LatestProducts />
            <Contact />
        </div>
    )
}
