import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SingleProducts from './Components/Products/SingleProducts';
import Cart from './Components/Cart/Cart';
import Auth from './Components/Auth/Auth';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      
      <Routes>
        <Route path="home"  element={<Home />} />
        <Route path='singleproducts' element={<SingleProducts />} />
        <Route path="cart" element={<Cart />}  />
        <Route path="auth" element={<Auth />}  >
          <Route index element={<Login />} />
        <Route path="login" element={<Login />}  />
        <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
