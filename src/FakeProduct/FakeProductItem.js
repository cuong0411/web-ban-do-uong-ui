import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FakeProductItem({ onClick }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  });

  // const [item, setItem] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    return onClick(id, product.image, product.title, product.price, qty);
  };

  const [qty, setQty] = useState(0);
  const addOne = () => {
    setQty(qty + 1);
  };
  const removeOne = () => {
    if (qty <= 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };
  const handleChange = (e) => {
    setQty(e.target.value);
    console.log(qty);
  };
  return (
    <div class="container">
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image">
            <img
              src={product.image}
              alt={product.title}
            />
          </figure>
        </div>
        <div className="column is-one-third is-flex is-justify-content-center is-flex-direction-column">
          <h3 className="title is-3">{product.title}</h3>
          <p className="has-text-justified">{product.description}</p>
          <p className="is-size-5 has-text-info">{product.price} $</p>
          <br />
          <div className="buttons is-left mt-3">
            <button onClick={removeOne}>-</button>
            <input
              type="number"
              min={0}
              value={qty}
              onChange={handleChange}
            />
            <button onClick={addOne}>+</button>
            <a
              href="/"
              className="button is-medium is-black is-light is-link"
              onClick={handleClick}
            >
              Đặt Mua
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
