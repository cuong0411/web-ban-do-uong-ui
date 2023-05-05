import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import './FakeProductItem.css';

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
    alert('Thêm vào giỏ hàng thành công');
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
      <Link
        className="button"
        to="/fakeproduct"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </Link>
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
          <p className="is-size-4 ">
            <span className="has-text-success-dark">{product.price} $</span>
          </p>
          <br />
          <div className="buttons is-left mt-3">
            <div className="box is-flex">
              <button
                onClick={removeOne}
                className="button"
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
              <input
                className="input"
                type="number"
                min={0}
                value={qty}
                onChange={handleChange}
              />
              <button
                onClick={addOne}
                className="button"
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
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
