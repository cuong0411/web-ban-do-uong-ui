import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Services from './Component/Services';
import Contact from './Component/Contact';
import ProductList from './Component/ProductList';
import './App.css';
import CategoryList from './Component/CategoryList';
import Map from './Component/Map';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <Header />
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
          path="services"
          element={<Services />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
      </Routes>
      {/* <ProductList /> */}
      <Map />
      <Footer />
    </div>
  );
}

export default App;
