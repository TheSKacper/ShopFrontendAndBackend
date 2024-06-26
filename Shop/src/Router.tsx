import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import ShopDetail from './components/ShopDetail';
import Login from './components/Login';
import Shopping from './components/Shopping';
import ProductCrud from './components/ProductCrud';
import About from './components/About';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Router() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop/:id' element={<ShopDetail />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/shopping' element={<Shopping />}></Route>
        <Route path='/crud' element={<ProductCrud />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
