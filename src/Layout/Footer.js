export default function Footer() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="footer-main">
            <div className="columns">
              <div className="column">
                <h4 className="title is-4">NGUỒN GỐC</h4>
                <p className="has-text-justified">
                  Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho
                  đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những
                  ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và
                  góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết
                  nối và sự gắn bó giữa người với người.
                </p>
              </div>
              <div className="column">
                <h4 className="title is-4">DỊCH VỤ</h4>
                <p className="">
                  Là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải
                  mái của chúng mình. Đừng giữ trong lòng, hãy chia sẻ với chúng
                  mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee®
                  trở nên tuyệt vời hơn.
                </p>
              </div>
              <div className="column">
                <h4 className="title is-4">NGHỀ NGHIỆP</h4>
                <p className="">
                  là điểm hội tụ của cộng đồng và luôn tìm kiếm những thành viên
                  mới với mong muốn không ngừng hoàn thiện một không gian dành
                  cho tất cả mọi người.
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
        <footer className="footer-secondary has-background-light">
          <div className="content has-text-centered">
            <p>Copyright © {new Date().getFullYear()}</p>
          </div>
        </footer>
      </section>
    </>
  );
}
