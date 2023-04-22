export default function Footer() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="footer-main">
            <div className="columns">
              <div className="column">
                <h4 className="title is-4">Fruits</h4>
                <p className="">
                  randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum,
                </p>
              </div>
              <div className="column">
                <h4 className="title is-4">Services</h4>
                <p className="">
                  randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum,
                </p>
              </div>
              <div className="column">
                <h4 className="title is-4">List</h4>
                <p className="">
                  randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum,
                </p>
              </div>
              <div className="column">
                <h4 className="title is-4">Follow Us</h4>
                <div className="buttons">
                  <a className="button is-medium is-facebook is-inverted is-black-social">
                    <span className="icon">
                      <i className="fab fa-facebook fa-lg" />
                    </span>
                  </a>
                  <a className="button is-medium is-instagram is-inverted is-black-social">
                    <span className="icon">
                      <i className="fab fa-instagram fa-lg" />
                    </span>
                  </a>
                  <a className="button is-medium is-twitter is-inverted is-black-social">
                    <span className="icon">
                      <i className="fab fa-twitter fa-lg" />
                    </span>
                  </a>
                  <a className="button is-medium is-youtube is-inverted is-black-social">
                    <span className="icon">
                      <i className="fab fa-youtube fa-lg" />
                    </span>
                  </a>
                </div>
                <h4 className="title is-4">Subscribe Now</h4>
                <div className="field">
                  <input
                    className="input"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="buttons">
                  <button className="button is-left is-medium is-orange">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-secondary">
          <div className="content has-text-centered">
            <p>
              Copyright © {new Date().getFullYear()} Tropico Template ♥ by
              <a href="https://github.com/restylianos">restylianos</a>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
