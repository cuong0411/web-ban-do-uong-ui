export default function ProductItem({
  productId,
  productName,
  productPrice,
  productImage,
}) {
  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <a
          href="detail.html"
          className="card"
        >
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={productImage}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <p className="subtitle is-4 has-text-centered">{productName}</p>
            <p className="has-text-centered is-size-5">
              Giá: <span className="has-text-primary">{productPrice}</span>
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
