// import './App.css';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import SingleProducts from './Components/Products/SingleProducts';
// import Cart from './Components/Cart/Cart';
// import Footer from './Components/Footer/Footer';
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
// import ChangePassword from './Components/Auth/ChangePassword';
// import ProtectedRoutes from "./Components/Auth/ProtectedRoutes";

// function App() {

//   const location = useLocation();

//   return (
//     <div className="App">
//    {location.pathname !== '/login'  && <Navbar /> }
//       <header className="App-header">
      
//       <Routes>

//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
      


//       <Route path='/' element={<ProtectedRoutes/>}>
//         <Route path="/"  element={<Home />} />
//         <Route path='/singleproducts' element={<SingleProducts />} />
//         <Route path="/cart" element={<Cart />}  />
//         <Route path='/changepassword' element={<ChangePassword/>} />
//       </Route>
        
        
//       </Routes>
//       </header>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SingleProducts from './Components/Products/SingleProducts';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ChangePassword from './Components/Auth/ChangePassword';
import ProtectedRoutes from "./Components/Auth/ProtectedRoutes";
import Wishlist from './Components/Wishlist/Wishlist';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  // Render Navbar only if not on login or register page
  const renderNavbar = !isLoginPage && !isRegisterPage;

  // Render Footer only if not on login or register page
  const renderFooter = !isLoginPage && !isRegisterPage;

  return (
    <div className="App">
      {renderNavbar && <Navbar />}
      <header className="App-header">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/' element={<ProtectedRoutes/>}>
            <Route path="/" element={<Home />} />
            <Route path='/singleproducts' element={<SingleProducts />} />
            <Route path="/wishlist" element={<Wishlist />}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path='/changepassword' element={<ChangePassword/>} />
          </Route>
        </Routes>
      </header>
      {renderFooter && <Footer />}
    </div>
  );
}

export default App;
