import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-icon">
              <div className="logo-square logo-square-blue"></div>
              <div className="logo-square logo-square-red"></div>
            </div>
            <span className="logo-text">RailDevHub</span>
          </div>
          <p className="footer-description">
            A specialized team of AI experts combining the power of AI and
            software to build amazing systems and tools.
          </p>
          <p className="footer-keywords">
            Development, Operations, Performance, Modern Design, and Quality
            Products.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/expertise">Expertise</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">CORE TECH</h3>
          <ul className="footer-links">
            <li>AI & Machine Learning</li>
            <li>Java & SpringBoot</li>
            <li>React & Modern Web</li>
            <li>Kubernetes & Serverless</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">CONTACT INFO</h3>
          <ul className="footer-links">
            <li>info@raildevhub.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 RailDevHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

