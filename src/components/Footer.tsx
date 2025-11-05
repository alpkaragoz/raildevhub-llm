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
            This website was created as a practice project and internal reference for our development team. 
            The design and layout are heavily inspired by the <strong>https://raildevhub.pia-team.com/</strong>, to which all 
            original rights belong. This is an unofficial, non-commercial site created purely for learning 
            purposes only.
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

