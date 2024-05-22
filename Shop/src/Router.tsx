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

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop/:id' element={<ShopDetail />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/shopping' element={<Shopping />}></Route>
        <Route path='/crud' element={<ProductCrud />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
