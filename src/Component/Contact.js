export default function Contact() {
  return (
    <section
      className="section"
      id="contact-section"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <h2 className="title is-2">Contact Us</h2>
            <form>
              <div className="field">
                <input
                  className="input is-custom-field"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="field">
                <input
                  className="input is-custom-field"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="field">
                <input
                  className="input is-custom-field"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="column is-half" />
        </div>
      </div>
    </section>
  );
}
