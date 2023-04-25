import './home.scss'
import { AboutUs } from '../AboutUsSection/AboutUs.jsx';
import { Contact } from '../Contact/Contact.jsx';
import { Hero } from '../HeroSection/Hero.jsx';
import { LatestProducts } from '../LatestProducts/LatestProducts.jsx';
import { useState, useEffect } from 'react'
import { Products } from '../Products/Products';

export const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
            {showDetails ? (
                <Products />
            ) : (
                <div className='home'>
                    <Hero />
                    <AboutUs />
                    <LatestProducts setShowDetails={setShowDetails} setSelectedProduct={setSelectedProduct} />
                    <Contact />
                </div>
            )}
        </>
    )
}