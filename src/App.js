import Header from './Layout/Header';
import Footer from './Layout/Footer';
import './App.css';
import CategoryList from './Component/CategoryList';
import Map from './Component/Map';
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
      <CategoryList />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
