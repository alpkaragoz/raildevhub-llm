import { Link } from 'react-router-dom';
import './Stories.css';

const Stories = () => {
  return (
    <div className="stories">
      {/* Hero Section */}
      <section className="stories-hero">
        <div className="container">
          <h1 className="stories-title">Our Stories</h1>
          <p className="stories-subtitle">
            The journeys behind RayDev's railway digital transformation - From
            vision to reality
          </p>
        </div>
      </section>

      {/* RayNext Story */}
      <section className="story-article">
        <div className="container">
          <div className="story-badge story-badge-blue">Digital Transformation Story</div>
          <h2 className="story-article-title">RayNext: The Future of Digital Railway</h2>
          <div className="story-meta">
            <span className="meta-item">📅 January 10, 2023</span>
            <span className="meta-item">🕐 November 15th</span>
          </div>

          <div className="story-quote story-quote-blue">
            "A journey that begins from the heart of Turkey, Ankara... A vision
            spanning Orient to Occident... The story of a digital transformation
            being about thousands of kilometers of railway networks."
          </div>

          <div className="story-section">
            <h3 className="story-section-title">Why RayNext?</h3>
            <p className="story-section-text">
              RayNext represents more than just a platform - it's a vision for
              the future of railway management in Turkey. The name itself tells
              a story: "Ray" (Rail) represents the core of railways, the story
              flowing over thousands of kilometers, a project for Turkey's
              railway culture. "Next" symbolizes the next step, the future,
              continuous progress, and the next phase of digital transformation.
            </p>
            <ul className="story-list">
              <li>
                <span className="story-bullet story-bullet-blue"></span>
                <div>
                  <strong>Ray (Rail):</strong> The core of railways, the story
                  flowing over thousands of km, a project for Turkey's railway
                  culture.
                </div>
              </li>
              <li>
                <span className="story-bullet story-bullet-blue"></span>
                <div>
                  <strong>Next:</strong> The next step, the future, continuous
                  progress, the next phase of digital transformation.
                </div>
              </li>
              <li>
                <span className="story-bullet story-bullet-blue"></span>
                <div>
                  <strong>Vision:</strong> Vision for the future, continuous
                  progress, the next phase of digital transformation.
                </div>
              </li>
            </ul>
          </div>

          <div className="story-section">
            <h3 className="story-section-title">The Vision Starting from Ankara</h3>
            <p className="story-section-text">
              Our journey began in Ankara, the administrative capital of Turkey
              and the heart of the nation's railway system. Here, we recognized
              the immense potential for digital transformation. The vision was
              clear: create a comprehensive platform that would digitalize every
              aspect of railway operations, from type approval processes to
              train driver management, from safety certifications to training
              center operations.
            </p>
            <p className="story-section-text">
              The challenge was significant - integrating with multiple
              government systems, ensuring seamless data flow, and creating
              intuitive interfaces for users across Turkey. But we were driven by
              a simple belief: technology should make complex processes simpler,
              not more complicated.
            </p>
          </div>

          <div className="story-section">
            <h3 className="story-section-title">Inspiration from Istanbul</h3>
            <p className="story-section-text">
              Istanbul, with its rich history and vibrant energy, inspired us to
              think beyond traditional boundaries. The city's unique position
              bridging Europe and Asia reminded us that innovation knows no
              borders. We drew inspiration from Istanbul's ability to blend
              tradition with modernity, applying this philosophy to our platform
              - respecting the established railway processes while
              revolutionizing them with modern technology.
            </p>
          </div>

          <div className="story-features">
            <div className="story-feature-card">
              <h4 className="feature-card-title">What RayNext Means</h4>
              <ul className="feature-card-list">
                <li>Gateway to the Future</li>
                <li>Continuous Progress</li>
                <li>User Experience Excellence</li>
                <li>National Technology Pride</li>
                <li>International Standards</li>
              </ul>
            </div>
            <div className="story-feature-card">
              <h4 className="feature-card-title">Who Uses RayNext</h4>
              <ul className="feature-card-list">
                <li>TCDD Personnel in Ankara</li>
                <li>Railways Nationwide</li>
                <li>ECM Organizations</li>
                <li>Testing Centers</li>
                <li>Data Analysts</li>
              </ul>
            </div>
          </div>

          <div className="story-timeline">
            <div className="timeline-card">
              <div className="timeline-year">2025</div>
              <div className="timeline-text">MVP ready for use</div>
            </div>
            <div className="timeline-card">
              <div className="timeline-year">2026</div>
              <div className="timeline-text">User feedback and enhancements</div>
            </div>
            <div className="timeline-card">
              <div className="timeline-year">2027+</div>
              <div className="timeline-text">Full integration and expansion</div>
            </div>
          </div>

          <div className="story-cta story-cta-blue">
            <p className="story-cta-quote">
              "RayNext: The Future of Railway Starts Today."
            </p>
            <p className="story-cta-text">
              A story that starts from Ankara, flows towards the future, and
              spreads across Turkey.
            </p>
            <Link to="/projects" className="btn btn-primary">
              View Our Project Details
            </Link>
          </div>
        </div>
      </section>

      {/* RayData Story */}
      <section className="story-article story-article-alt">
        <div className="container">
          <div className="story-badge story-badge-red">Data-Driven Story</div>
          <h2 className="story-article-title">RayData: The Power of Railway Data</h2>
          <div className="story-meta">
            <span className="meta-item">📅 January 10, 2023</span>
            <span className="meta-item">🕐 November 15th</span>
          </div>

          <div className="story-quote story-quote-red">
            "A data revolution is being born in Ankara... The story of numbers
            dancing over the railways of thousands of kilometers, attempting to
            make a 'smart railway' a reality. Every trip, every station, every
            kilometer... All coming together to shape the future of railway
            transportation."
          </div>

          <div className="story-section">
            <h3 className="story-section-title">Why RayData?</h3>
            <p className="story-section-text">
              RayData emerged from a fundamental need: transforming raw railway
              data into actionable intelligence. "Ray" represents the railway
              network itself, while "Data" symbolizes the power of information
              to drive decisions. Together, they form a vision of intelligent,
              data-driven railway operations.
            </p>
            <ul className="story-list">
              <li>
                <span className="story-bullet story-bullet-red"></span>
                <div>
                  <strong>Ray (Rail):</strong> The core of railways, the story
                  flowing over thousands of km, a project for Turkey's railway
                  culture.
                </div>
              </li>
              <li>
                <span className="story-bullet story-bullet-red"></span>
                <div>
                  <strong>Data:</strong> The meaning of every trip, every ticket,
                  every kilometer - a project transforming the decisions.
                </div>
              </li>
              <li>
                <span className="story-bullet story-bullet-red"></span>
                <div>
                  <strong>Vision:</strong> Vision for the future, continuous
                  progress, the next phase of digital transformation.
                </div>
              </li>
            </ul>
          </div>

          <div className="story-section">
            <h3 className="story-section-title">The Vision from Istanbul</h3>
            <p className="story-section-text">
              Istanbul's strategic location and bustling transportation network
              provided the perfect backdrop for envisioning a data-driven future.
              We saw how data could flow through the city's transportation
              systems, creating insights that would improve efficiency and
              passenger experience. This vision extended to the entire railway
              network, where every journey generates valuable data waiting to be
              analyzed.
            </p>
            <p className="story-section-text">
              The challenge was immense - processing millions of data points
              daily, transforming them into meaningful insights, and presenting
              them in a way that empowers decision-makers at every level. We
              built RayData to be the digital brain that makes this possible.
            </p>
          </div>

          <div className="story-section">
            <h3 className="story-section-title">The Need from Ankara</h3>
            <p className="story-section-text">
              From Ankara, the need was clear: decision-makers needed access to
              comprehensive, real-time data to make informed choices about
              operations, maintenance, and strategic planning. Traditional
              reporting methods were slow, fragmented, and couldn't provide the
              depth of insight needed in today's fast-paced railway environment.
            </p>
          </div>

          <div className="story-features story-features-blue">
            <div className="story-feature-stat">
              <div className="stat-number">3</div>
              <div className="stat-title">Comprehensive Dashboards</div>
              <div className="stat-subtitle">Operations, Analytics</div>
            </div>
            <div className="story-feature-stat">
              <div className="stat-number">100+</div>
              <div className="stat-title">Custom Reports</div>
              <div className="stat-subtitle">Tailored to your operations</div>
            </div>
            <div className="story-feature-stat">
              <div className="stat-number">Real-Time</div>
              <div className="stat-title">Live Monitoring</div>
              <div className="stat-subtitle">Instant data analysis</div>
            </div>
          </div>

          <div className="story-meaning">
            <h3 className="story-section-title">What RayData Means</h3>
            <div className="meaning-grid">
              <div className="meaning-card">
                <h4 className="meaning-title">New Opportunities</h4>
                <p className="meaning-text">
                  Users at every level can access the data they need.
                </p>
              </div>
              <div className="meaning-card">
                <h4 className="meaning-title">Data-Driven Decisions</h4>
                <p className="meaning-text">
                  The ability to make quick decisions with instant data.
                </p>
              </div>
              <div className="meaning-card">
                <h4 className="meaning-title">Operational Excellence</h4>
                <p className="meaning-text">
                  Data-driven optimization and continuous improvement.
                </p>
              </div>
              <div className="meaning-card">
                <h4 className="meaning-title">Safety Priority</h4>
                <p className="meaning-text">
                  Risk management and safety that increases with data.
                </p>
              </div>
            </div>
          </div>

          <div className="story-stats">
            <div className="stat-item">
              <div className="stat-icon stat-icon-red">📊</div>
              <div className="stat-value">15%</div>
              <div className="stat-label">Reduced efficiency losses</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon stat-icon-blue">⏱️</div>
              <div className="stat-value">40%</div>
              <div className="stat-label">Decrease in delays</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon stat-icon-red">⚡</div>
              <div className="stat-value">&lt;2s</div>
              <div className="stat-label">Response time</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon stat-icon-blue">👍</div>
              <div className="stat-value">90%+</div>
              <div className="stat-label">User satisfaction</div>
            </div>
          </div>

          <div className="story-cta story-cta-red">
            <p className="story-cta-quote">
              "RayData: The Power of Railway Data, Being Discovered Today."
            </p>
            <p className="story-cta-text">
              A story that starts from numbers, travels through data, and adds
              value across Turkey.
            </p>
            <Link to="/projects" className="btn btn-red">
              View RayData Project Details
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="stories-final-cta">
        <div className="container">
          <h2 className="final-cta-title">Want to Know More About Our Projects?</h2>
          <p className="final-cta-description">
            Explore detailed technical information and see how we're transforming
            railway operations.
          </p>
          <div className="final-cta-buttons">
            <Link to="/projects" className="btn cta-button-white">
              View All Projects
            </Link>
            <Link to="/about" className="btn btn-primary">
              About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;

