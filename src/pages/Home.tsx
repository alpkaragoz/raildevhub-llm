import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero-pre-headline">Future-Proof Rails Meet Brilliant Designs</p>
          <h1 className="hero-title">
            We're Building the{' '}
            <span className="gradient-text">Smartest</span>{' '}
            <span className="gradient-text-pink">Railway Network</span> in the
            World
          </h1>
          <p className="hero-description">
            15 visionaries combining AI, IoT, Big Data, and Software Engineering
            to transform Turkey's railways into an intelligent, self-optimizing
            transportation network.
          </p>
          <p className="hero-quote">
            "Every week, every algorithm, every line of code - designed to make
            millions of journeys safer, faster, and smarter."
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              See what we're building
              <span className="icon">→</span>
            </Link>
            <Link to="/stories" className="btn btn-secondary">
              Read the Journey
            </Link>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Expert Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Major Platforms</div>
            </div>
          </div>

          <Link to="/stories" className="hero-link">
            Read our Transformation Stories <span className="icon">↓</span>
          </Link>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            We are committed to delivering excellence through our fundamental
            principles.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3 className="value-title">Security First</h3>
              <p className="value-description">
                We prioritize security in every aspect of our development
                process, ensuring robust protection for critical railway
                infrastructure.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3 className="value-title">High performance</h3>
              <p className="value-description">
                Our systems are designed for maximum efficiency and reliability,
                handling complex operations with seamless performance.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3 className="value-title">Modern design</h3>
              <p className="value-description">
                We create intuitive, user-friendly interfaces that enhance user
                experience and drive engagement.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3 className="value-title">Quality products</h3>
              <p className="value-description">
                Every product undergoes rigorous testing and quality assurance to
                meet the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section id="lab" className="innovation-lab">
        <div className="container">
          <div className="lab-badge">Innovation Lab</div>
          <h2 className="section-title">What We're Cooking in the Lab</h2>
          <p className="section-subtitle">
            Beyond our production activities, we're experimenting with
            tomorrow's technologies today.
          </p>
          <div className="lab-grid">
            <div className="lab-card">
              <div className="lab-tag tag-blue">Product</div>
              <div className="lab-icon lab-icon-blue">🚂</div>
              <h3 className="lab-title">Smart Track Sensors</h3>
              <p className="lab-description">
                Advanced IoT sensors for real-time track monitoring and
                predictive maintenance.
              </p>
              <div className="lab-tags">
                <span className="tag tag-blue">AI</span>
                <span className="tag tag-blue">IoT</span>
                <span className="tag tag-blue">Big Data</span>
              </div>
            </div>
            <div className="lab-card">
              <div className="lab-tag tag-red">New Tech</div>
              <div className="lab-icon lab-icon-red">👤</div>
              <h3 className="lab-title">AI Station Assistant</h3>
              <p className="lab-description">
                Intelligent assistants providing real-time information and
                support at railway stations.
              </p>
              <div className="lab-tags">
                <span className="tag tag-blue">AI</span>
                <span className="tag tag-blue">IoT</span>
                <span className="tag tag-blue">ML</span>
              </div>
            </div>
            <div className="lab-card">
              <div className="lab-tag tag-yellow">Research</div>
              <div className="lab-icon lab-icon-yellow">🛡️</div>
              <h3 className="lab-title">Blockchain Safety Records</h3>
              <p className="lab-description">
                Immutable safety records using blockchain technology for
                enhanced security and transparency.
              </p>
              <div className="lab-tags">
                <span className="tag tag-blue">Blockchain</span>
                <span className="tag tag-blue">Cyber Security</span>
                <span className="tag tag-blue">IoT</span>
              </div>
            </div>
            <div className="lab-card">
              <div className="lab-tag tag-green">Pilot</div>
              <div className="lab-icon lab-icon-green">🌱</div>
              <h3 className="lab-title">Carbon-Neutral Routing</h3>
              <p className="lab-description">
                AI-powered routing optimization for minimizing carbon footprint
                and environmental impact.
              </p>
              <div className="lab-tags">
                <span className="tag tag-blue">AI</span>
                <span className="tag tag-blue">Sustainability</span>
                <span className="tag tag-blue">Green Tech</span>
              </div>
            </div>
            <div className="lab-card">
              <div className="lab-tag">Infrastructure</div>
              <div className="lab-icon lab-icon-purple">📷</div>
              <h3 className="lab-title">Computer Vision Safety</h3>
              <p className="lab-description">
                Advanced computer vision systems for real-time safety monitoring
                and threat detection.
              </p>
              <div className="lab-tags">
                <span className="tag tag-blue">Computer Vision</span>
                <span className="tag tag-blue">AI</span>
                <span className="tag tag-blue">IoT</span>
              </div>
            </div>
            <div className="lab-card">
              <div className="lab-tag tag-blue">Product</div>
              <div className="lab-icon lab-icon-dark-blue">🌐</div>
              <h3 className="lab-title">Digital Twin Network</h3>
              <p className="lab-description">
                Complete digital replication of railway infrastructure for
                simulation and optimization.
              </p>
              <div className="lab-tags">
                <span className="tag tag-blue">Digital Twin</span>
                <span className="tag tag-blue">IoT</span>
                <span className="tag tag-blue">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Never Sleeps Banner */}
      <section className="lab-banner">
        <div className="container">
          <h2 className="lab-banner-title">The Lab Never Sleeps</h2>
          <p className="lab-banner-text">
            Every week, we're adding new ideas. Some feel spectacular. Some
            change everything. That's innovation.
          </p>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">Cutting-Edge Technology Stack</h2>
          <p className="section-subtitle">
            We leverage the latest AI and software technologies to deliver
            exceptional results.
          </p>
          <div className="tech-categories">
            <div className="tech-category">
              <div className="tech-icon tech-icon-blue">🧠</div>
              <h3 className="tech-category-title">Artificial Intelligence</h3>
              <ul className="tech-list">
                <li>Large Language Models (LLM)</li>
                <li>AI Agents & AGI</li>
                <li>Multi-Criteria Planning (MCP)</li>
                <li>Agent-to-Agent (A2A)</li>
              </ul>
            </div>
            <div className="tech-category">
              <div className="tech-icon tech-icon-red">⚙️</div>
              <h3 className="tech-category-title">Software Engineering</h3>
              <ul className="tech-list">
                <li>Java & Springboot</li>
                <li>React & Modern Web</li>
                <li>Microservices Architecture</li>
                <li>Kubernetes & DevOps</li>
              </ul>
            </div>
          </div>
          <div className="tech-button-wrapper">
            <Link to="/expertise" className="btn btn-secondary">
              Explore All Technologies <span className="icon">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Stories Section */}
      <section className="transformation-stories">
        <div className="container">
          <h2 className="section-title">Our Transformation Stories</h2>
          <p className="section-subtitle">
            Behind every project is an inspiring journey from vision to reality.
          </p>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-badge story-badge-blue">RayDevHub</div>
              <h3 className="story-title">The Journey of RayNext</h3>
              <p className="story-description">
                Discover how we transformed Turkey's railway management system
                into a comprehensive digital platform, revolutionizing how
                railway operations are conducted across the nation.
              </p>
              <div className="story-tags">
                <span className="tag tag-blue">AI</span>
                <span className="tag tag-blue">IoT</span>
                <span className="tag tag-blue">Cloud</span>
              </div>
              <Link to="/stories" className="story-link">
                Read the Story <span className="icon">→</span>
              </Link>
            </div>
            <div className="story-card">
              <div className="story-badge story-badge-red">RayDataHub</div>
              <h3 className="story-title">The Power of RayData</h3>
              <p className="story-description">
                Explore how data analytics and business intelligence are
                empowering decision-makers with real-time insights and
                comprehensive reporting capabilities.
              </p>
              <div className="story-tags">
                <span className="tag tag-blue">Data</span>
                <span className="tag tag-blue">Analytics</span>
                <span className="tag tag-blue">Cloud</span>
              </div>
              <Link to="/stories" className="story-link">
                Read the Story <span className="icon">→</span>
              </Link>
            </div>
          </div>
          <div className="stories-button-wrapper">
            <Link to="/stories" className="btn btn-primary">
              Read All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Transform Railway Operations?</h2>
          <p className="cta-description">
            Discover how our innovative solutions are revolutionizing the
            railway industry.
          </p>
          <Link to="/projects" className="btn cta-button">
            View Our Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

