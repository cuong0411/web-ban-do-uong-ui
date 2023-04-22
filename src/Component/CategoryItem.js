export default function CategoryItem({ id, name, description, image }) {
  return (
    <>
      <div className="columns">
        <div className="column is-three-quarters is-flex is-justify-content-center is-flex-direction-column">
          <h3 className="title is-2">{name}</h3>
          <p className="has-text-left is-size-4 pb-6">{description}</p>
          <br />
          <div className="buttons is-left">
            <a
              href="./ca-phe.html"
              className="button is-medium is-black is-light is-link"
            >
              Khám Phá Thêm
            </a>
          </div>
        </div>
        <div className="column">
          <figure className="image">
            <img
              src={image}
              alt=""
            />
          </figure>
        </div>
      </div>
    </>
  );
}
