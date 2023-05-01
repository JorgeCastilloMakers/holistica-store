import { Footer } from './Components/Footer/Footer.jsx';
import { Header } from './Components/Header/Header.jsx';
import { Logo } from './Components/Header/Logo/Logo.jsx'
import { Nav } from './Components/Header/Nav/Nav.jsx'
import { Layout } from './Components/Layout/Layout.jsx';
import { Home } from './Components/Pages/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import { Products } from './Components/Pages/Products/Products.jsx';
import { Provider } from 'react-redux';
import { createStoreAsync } from './Store/index.js';
import { useEffect, useState } from "react";
import { CartPage } from './Components/Pages/CartPage/CartPage.jsx';
import { useLocation } from 'react-router-dom';
import { ProductDetails } from './Components/Pages/ProductDetails/ProductDetails.jsx';
import { Checkout } from './Components/Pages/CheckoutPage/Checkout.jsx';




//funcion para que al cambiar de ruta el scroll vuelva hacia arriba
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App = () => {
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState(null);

  //hago la precarga del store por la demora que genera el get de firebase
  useEffect(() => {
    createStoreAsync().then((store) => {
      setStore(store);
      setLoading(false);
    });
  }, []);

  if (loading) {
    //hacer un loader lindo
    return <p>Loading...</p>;
  }

  return (
    <>
      <Provider store={store}>
        <ScrollToTop />
        <Layout>
          <Header>
            <Logo />
            <Nav
              homeLink="/"
              aboutLink="/#aboutUs"
              productsLink="/products/"
              contactLink="/#contact"
              cartLink="/cart"
            />
          </Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/' element={<Products></Products>} />
            <Route path='/products/:id?' element={<ProductDetails></ProductDetails>} />
            <Route path='/cart' element={<CartPage></CartPage>} />
            <Route path='/checkout' element={<Checkout></Checkout>} />
          </Routes>

          <Footer></Footer>
        </Layout>

      </Provider>
    </>
  )
}

export default App;
