import "./Footer.css"

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>SOBER</h3>
            <p>Elevating moments, one sip at a time.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Facebook">
                📘
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <a href="#">Gin Collection</a>
              <a href="#">Whiskey Range</a>
              <a href="#">Limited Editions</a>
              <a href="#">Gift Sets</a>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Our Story</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>

            <div className="link-group">
              <h4>Support</h4>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Get updates on new products and exclusive offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Sober. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
