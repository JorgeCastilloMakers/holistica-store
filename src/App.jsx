import { Footer } from './Components/Footer/Footer.jsx';
import { Header } from './Components/Header/Header.jsx';
import { Logo } from './Components/Header/Logo/Logo.jsx'
import { Nav } from './Components/Header/Nav/Nav.jsx'
import { NavItem } from './Components/Header/Nav/NavItem/NavItem.jsx';
import { NavIcons } from './Components/Header/NavIcons/NavIcons.jsx';
import { Layout } from './Components/Layout/Layout.jsx';
// import { Loader } from './Components/Loader/Loader.jsx';
import { Home } from './Components/Pages/Home/Home.jsx';
import { useProductsList } from './Hooks/useProductsList.js';
import { Route, Routes } from 'react-router-dom';
import { Products } from './Components/Pages/Products/Products.jsx';



const App = () => {
  const products = useProductsList();

  return (
    <>
      <Layout>
        {/* <Loader></Loader> */}

        <Header>
          <Logo />
          <Nav>
            <NavItem href={"/"}>Home</NavItem>
            <NavItem href={"#aboutUs"}>Nosotros</NavItem>
            <NavItem href={"/products"}>Productos</NavItem>
            <NavItem href={"#contact"}>Contacto</NavItem>
            <NavIcons />
          </Nav>
        </Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products></Products>} />
        </Routes>
        <Footer></Footer>

      </Layout>
    </>
  )
}

export default App;
