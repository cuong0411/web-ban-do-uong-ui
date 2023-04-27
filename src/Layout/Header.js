import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      <div id="navbar-container">
        <nav
          className="navbar is-fixed-top has-background-info"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a
              className="navbar-item"
              href="https://bulma.io"
            >
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width={112}
                height={28}
                alt=""
              />
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className="navbar-menu"
          >
            <div className="navbar-start">
              <Link
                className="navbar-item"
                to="/"
              >
                Home
              </Link>
              <Link
                className="navbar-item"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="navbar-item"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="navbar-item"
                to="/fakeproduct"
              >
                FakeProduct
              </Link>
            </div>

            <div className="navbar-end mr-3">
              <div className="buttons">
                <Link
                  className="button is-primary"
                  to={'/cart'}
                >
                  <strong>Cart</strong>
                </Link>
                <Link
                  className="button is-light"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
