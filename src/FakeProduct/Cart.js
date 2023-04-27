export default function Cart({ items }) {
  const total = items.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
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
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td style={{ width: '100px' }}>
                <img
                  src={item.img}
                  alt=""
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>{item.qty * item.price}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td colSpan={4}></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="button"
        onClick={console.log('thank you')}
      >
        Checkout
      </button>
    </div>
  );
}
