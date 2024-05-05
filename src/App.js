
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/konan.jpg'
import women_banner from './Components/Assets/mangajjk.jpg'
import kid_banner from './Components/Assets/apparel.jpg'
import AboutUs from './Components/AboutUs/AboutUs';
import Privacy from './Components/Privacy/Privacy';
import Help from './Components/Help/Help';
import ContactUs from './Components/ContactUs/ContactUs';
import Terms from './Components/Terms/Terms';
import Checkout from './Pages/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
