import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <h5 className="fs-3 fw-bold mb-3">event<span style={{ color: '#9a85ff' }}>hub</span><span style={{ color: '#ff6b57' }}>.</span></h5>
            <p style={{ maxWidth: 380 }}>Discover events, learn new skills and meet people who share your interests, right here in Pune.</p>
            <div className="footer-social">
              <a href="#top" aria-label="Instagram"><FiInstagram /></a>
              <a href="#top" aria-label="Twitter"><FiTwitter /></a>
              <a href="#top" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#top" aria-label="Email"><FiMail /></a>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/">All events</Link></li>
              <li><Link to="/#events">Find an event</Link></li>
              <li><Link to="/admin">Admin dashboard</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <h6 className="fw-bold mb-3">Find us</h6>
            <p className="d-flex gap-2 mb-0"><FiMapPin className="mt-1 flex-none" /> Pune, Maharashtra, India</p>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-wrap justify-content-between gap-2">
          <span>© 2026 EventHub. All rights reserved.</span>
          <span>Made with care in Pune.</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
