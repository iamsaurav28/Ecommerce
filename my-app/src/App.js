import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SingleProducts from './Components/Products/SingleProducts';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ChangePassword from './Components/Auth/ChangePassword';
import ProtectedRoutes from "./Components/Auth/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      
      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      


      <Route path='/' element={<ProtectedRoutes/>}>
        <Route path="/"  element={<Home />} />
        <Route path='/singleproducts' element={<SingleProducts />} />
        <Route path="/cart" element={<Cart />}  />
        <Route path='/changepassword' element={<ChangePassword/>} />
      </Route>
        
        
      </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
