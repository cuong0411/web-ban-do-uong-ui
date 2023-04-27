export default function Cart({ items }) {
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
        </tbody>
      </table>
    </div>
  );
}
