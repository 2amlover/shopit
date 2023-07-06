import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage';
import Login from './Auth/Login/Login';
import Cart from './Pages/Cart/Cart';
import MobileNavigation from './Navigation/MobileNavigation';
import DesktopNavigation from './Navigation/DesktopNavigation';
import Wishlist from './Pages/WhisList/Wishlist';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <ToastContainer toastClassName='toastContainerBox' transition={Flip} position='top-center' />
      <Router>
        <DesktopNavigation />
        <div className='margin'>
          <Routes>
            {/*User Routes  */}
            <Route path='/' index element={<HomePage />} />
            <Route path="/login" element={< Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </div>
        <MobileNavigation />
      </Router >


    </>
  );
}
export default App;
