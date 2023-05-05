import { useState } from 'react';

export default function Cart({ items, onCheckout }) {
  const [listCart, setListCart] = useState(items);
  const [total, setTotal] = useState(
    items.reduce((acc, cur) => acc + cur.qty * cur.price, 0)
  );
  const handleOnClick = () => {
    alert('Thanh toan thanh cong');
    setListCart([]);
    setTotal(0);
    onCheckout(listCart.length);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {listCart.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td style={{ width: '100px' }}>
                <img
                  src={item.img}
                  alt=""
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price} $</td>
              <td>{item.qty}</td>
              <td>{(item.qty * item.price).toFixed(2)} $</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td colSpan={4}></td>
            <td>{total.toFixed(2)} $</td>
          </tr>
        </tbody>
      </table>
      <button
        className="button"
        onClick={handleOnClick}
      >
        Checkout
      </button>
    </div>
  );
}
