import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Services from './Component/Services';
import Contact from './Component/Contact';
import ProductList from './Component/ProductList';
import './App.css';
import CategoryList from './Component/CategoryList';
import Map from './Component/Map';
import { Routes, Route } from 'react-router-dom';
import ProductItemDetail from './Component/ProductItemDetail';
import Login from './Component/Login';
import FakeProduct from './FakeProduct/FakeProduct';
import FakeProductItem from './FakeProduct/FakeProductItem';
import Cart from './FakeProduct/Cart';
import GetItem from './GetItem';
import { useState } from 'react';

function App() {
  // hiển thị số lượng món hàng trên header
  const [qty, setQty] = useState(0);

  const [items, setItems] = useState([]);
  const onClick = (id, img, title, price, qty) => {
    // lấy thuộc tính của chi tiết sản phẩm
    const result = GetItem(id, img, title, price, qty);
    setItems([...items, result]);

    const totalQty = items.reduce((acc, cur) => acc + cur.qty, 0);
    setQty(totalQty);
  };
  return (
    <div className="container">
      <Header qty={qty} />
      <div className="container my-6">
        <div className="has-text-centered pb-6 my-5">
          <h1 className="title is-1">Fresh Fruits</h1>
          <h3 className="subtitle">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </h3>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<CategoryList />}
        />
        <Route
          path="category/:id"
          element={<ProductList />}
        />
        <Route
          path="product/:id"
          element={<ProductItemDetail />}
        />
        <Route
          path="services"
          element={<Services />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="fakeproduct"
          element={<FakeProduct />}
        />
        <Route
          path="fakeproduct/:id"
          element={<FakeProductItem onClick={onClick} />}
        />
        <Route
          path="Cart"
          element={<Cart items={items} />}
        />
      </Routes>

      <Map />
      <Footer />
    </div>
  );
}

export default App;
