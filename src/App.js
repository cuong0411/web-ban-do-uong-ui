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
import Hero from './Layout/Hero';

function App() {
  // hiển thị số lượng món hàng trên header
  const [qty, setQty] = useState(0);

  const [items, setItems] = useState([]);

  // hàm sẽ truyền xuống FakeProductItem component
  const onClick = (id, img, title, price, qty) => {
    // lấy thuộc tính của chi tiết sản phẩm
    const result = GetItem(id, img, title, price, qty);
    console.log(result);

    if (items.findIndex((ele) => ele['id'] === result['id']) === -1) {
      // không tồn tại
      setItems([...items, result]);
      console.log(items);
    } else {
      // đã tồn tại id trong giỏ hàng
      const index = items.findIndex((ele) => ele['id'] === result['id']);
      items[index]['qty'] += result['qty'];
    }

    const totalQty = items.reduce((acc, cur) => acc + cur.qty, 0);
    setQty(totalQty);
  };
  return (
    <div className="container">
      <Header qty={qty} />
      <Hero />
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
