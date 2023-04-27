import { useEffect, useState } from 'react';
import './FakeProduct.css';

export default function FakeProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });
  return (
    <>
      <div className="columns is-multiline is-6">
        {products.map((product) => (
          <div className="column is-one-quarter-desktop is-one-third-tablet">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={product.image}
                    alt=""
                  />
                </figure>
              </div>
              <div className="card-content is-flex is-flex-direction-column is-align-content-space-between">
                <p className="subtitle is-6 has-text-centered">
                  {product.title}
                </p>
                <p className="has-text-centered is-size-5">
                  Giá:{' '}
                  <span className="has-text-primary">{product.price}$</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
