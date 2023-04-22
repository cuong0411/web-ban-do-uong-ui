export default function Header() {
  return (
    <>
      <div
        className="container"
        id="navbar-container"
      >
        <nav
          className="navbar is-fixed-top has-background-light"
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
            <div className="navbar-start" />
            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  className="navbar-item"
                  href="index.html"
                >
                  Home
                </a>
                <a
                  className="navbar-item"
                  href="services.html"
                >
                  Services
                </a>
                <a
                  className="navbar-item"
                  href="contact.html"
                >
                  Contact us
                </a>
                <div className="buttons">
                  <a className="button is-primary is-orange">
                    <strong>Sign Up</strong>
                  </a>
                  <a className="button is-primary is-orange">
                    <strong>Login In</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
