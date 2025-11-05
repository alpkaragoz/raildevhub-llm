import { useState, useEffect } from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasSeenDisclaimer', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`disclaimer-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`disclaimer-modal ${isClosing ? 'closing' : ''}`}>
        <button className="disclaimer-close" onClick={handleClose} aria-label="Close disclaimer">
          ×
        </button>
        <div className="disclaimer-icon">⚠️</div>
        <h2 className="disclaimer-title">Disclaimer</h2>
        <div className="disclaimer-content">
          <p>
            "This website was created as a practice project and internal reference for our development team. 
            The design and layout are heavily inspired by the <strong>https://raildevhub.pia-team.com/</strong>, to which all 
            original rights belong. This is an unofficial, non-commercial site created purely for learning 
            purposes only."
          </p>
        </div>
        <button className="disclaimer-button" onClick={handleClose}>
          I Understand
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;

