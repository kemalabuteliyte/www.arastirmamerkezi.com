import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer glass-strong">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text gradient-text">Eliyte™</span>
              <span className="logo-subtitle">Araştırma Merkezi</span>
            </div>
            <p className="footer-description">
              Pioneering Science & Technology through rigorous, data-driven, multidisciplinary research.
              Translating innovation into measurable solutions for global challenges.
            </p>
            <div className="footer-contact">
              <a href="mailto:arge@eliyte.com" className="contact-email">
                arge@eliyte.com
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Research</h4>
            <ul className="footer-links">
              <li><Link to="/research">Digital Workforce & Automation</Link></li>
              <li><Link to="/research">Artificial Intelligence R&D</Link></li>
              <li><Link to="/research">Internet of Things (IoT)</Link></li>
              <li><Link to="/research">Energy Systems R&D</Link></li>
              <li><Link to="/research">Finance & Mathematics</Link></li>
              <li><Link to="/research">Cybersecurity & Cryptography</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/research">Research Areas</Link></li>
              <li><Link to="/solutions">Solutions & Services</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/news">News & Publications</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/partners">Partnership Opportunities</Link></li>
              <li><Link to="/careers">Join Our Team</Link></li>
              <li><Link to="/news">Media & Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Eliyte™ Araştırma Merkezi. All rights reserved.
            </p>
            <div className="footer-meta">
              <span>Innovating Tomorrow, Today</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
