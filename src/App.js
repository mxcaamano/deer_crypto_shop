import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App bg-black overflow-auto">
      <link rel="stylesheet" href="App.css"></link>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Tienda"/>} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Tienda"/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
