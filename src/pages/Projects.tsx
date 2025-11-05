import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1 className="projects-title">Our Projects</h1>
          <p className="projects-subtitle">
            Transforming railway operations through innovative digital solutions
          </p>
          <Link to="/stories" className="projects-link">
            Read Our Project Stories <span className="icon">→</span>
          </Link>
        </div>
      </section>

      {/* RayNext Section */}
      <section className="project-section">
        <div className="container">
          <div className="project-layout">
            <div className="project-content">
              <div className="project-tag project-tag-blue">
                Digital Transformation
              </div>
              <h2 className="project-title">
                RayNext - Digital Railway Management System
              </h2>
              <p className="project-description">
                The future of digital railway starts today. A comprehensive
                platform for UHDGM (General Directorate of Transportation Services
                Regulation) to digitalize all railway sector processes, from type
                approval to train driver management.
              </p>
              <div className="project-features">
                <div className="project-feature">
                  <div className="feature-icon feature-icon-blue">✓</div>
                  <div>
                    <h3 className="feature-title">Complete Digital Ecosystem</h3>
                    <p className="feature-description">
                      From type approval to vehicle registration, ECM management
                      to safety certificates, training centers to train driver
                      management.
                    </p>
                  </div>
                </div>
                <div className="project-feature">
                  <div className="feature-icon feature-icon-blue">✓</div>
                  <div>
                    <h3 className="feature-title">Seamless Integration</h3>
                    <p className="feature-description">
                      With Government, Ministry of Health, U-NET, GIS integration
                      - part of Turkey's digital ecosystem.
                    </p>
                  </div>
                </div>
                <div className="project-feature">
                  <div className="feature-icon feature-icon-blue">✓</div>
                  <div>
                    <h3 className="feature-title">User-Centric Design</h3>
                    <p className="feature-description">
                      From UX/UI personas in Ankara to applicants across Turkey,
                      everyone at the center.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tech">
                <div className="tech-tag">Java Springboot</div>
                <div className="tech-tag">React</div>
                <div className="tech-tag">Microservice</div>
                <div className="tech-tag">PostgreSQL</div>
                <div className="tech-tag">Kubernetes</div>
                <div className="tech-tag">Docker</div>
              </div>
            </div>
            <div className="project-visual">
              <div className="dashboard-card">
                <div className="dashboard-window">
                  <div className="window-controls">
                    <span className="window-dot window-dot-red"></span>
                    <span className="window-dot window-dot-yellow"></span>
                    <span className="window-dot window-dot-green"></span>
                  </div>
                  <div className="dashboard-content">
                    <h3 className="dashboard-title">RayNext Operations Dashboard</h3>
                    <div className="dashboard-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                    <div className="dashboard-metrics">
                      <div className="metric-box">
                        <div className="metric-value">24/7</div>
                        <div className="metric-label">System Availability</div>
                      </div>
                      <div className="metric-box">
                        <div className="metric-value">100+</div>
                        <div className="metric-label">Daily Operations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RayData Section */}
      <section className="project-section project-section-alt">
        <div className="container">
          <div className="project-layout project-layout-reverse">
            <div className="project-visual">
              <div className="dashboard-card">
                <div className="dashboard-window">
                  <div className="window-controls">
                    <span className="window-dot window-dot-red"></span>
                    <span className="window-dot window-dot-yellow"></span>
                    <span className="window-dot window-dot-green"></span>
                  </div>
                  <div className="dashboard-content">
                    <div className="dashboard-list">
                      <div className="list-item">
                        <div className="list-icon list-icon-blue">✓</div>
                        <span>Executive Dashboard</span>
                      </div>
                      <div className="list-item">
                        <div className="list-icon list-icon-blue">✓</div>
                        <span>Operations Dashboard</span>
                      </div>
                      <div className="list-item">
                        <div className="list-icon list-icon-blue">✓</div>
                        <span>Analytics Dashboard</span>
                      </div>
                    </div>
                    <div className="dashboard-logo">
                      <div className="logo-square logo-square-blue"></div>
                      <div className="logo-square logo-square-red"></div>
                      <div className="logo-square logo-square-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-tag project-tag-red">
                Railway Data Analytics
              </div>
              <h2 className="project-title">
                RayData - The Power of Railway Data
              </h2>
              <p className="project-description">
                The digital brain of railway operations. A comprehensive BI
                platform for TCDD Transportation that transforms data into
                decision-making power with 3 dashboards, 100+ reports, and
                real-time analytics.
              </p>
              <div className="project-features">
                <div className="project-feature">
                  <div className="feature-icon feature-icon-red">✓</div>
                  <div>
                    <h3 className="feature-title">3 Comprehensive Dashboards</h3>
                    <p className="feature-description">
                      Executive, Operations, and Analytics dashboards serving
                      every user from top management to data scientists.
                    </p>
                  </div>
                </div>
                <div className="project-feature">
                  <div className="feature-icon feature-icon-red">✓</div>
                  <div>
                    <h3 className="feature-title">100+ Detailed Reports</h3>
                    <p className="feature-description">
                      From passenger transportation to freight operations,
                      maintenance to safety - comprehensive reports.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-tech">
                <div className="tech-tag">Power BI</div>
                <div className="tech-tag">Tableau</div>
                <div className="tech-tag">Looker</div>
                <div className="tech-tag">Data Warehouse</div>
                <div className="tech-tag">OLAP Cubes</div>
                <div className="tech-tag">PostgreSQL</div>
                <div className="tech-tag">Kafka</div>
                <div className="tech-tag">Elasticsearch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact Section */}
      <section className="project-impact">
        <div className="container">
          <h2 className="section-title">Project Impact</h2>
          <p className="section-subtitle">
            Our solutions are transforming railway operations across Turkey
          </p>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">2</div>
              <div className="impact-label">Major Platforms</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">100+</div>
              <div className="impact-label">Reports & Dashboards</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">15%</div>
              <div className="impact-label">Efficiency Increase</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">40%</div>
              <div className="impact-label">Faster Decisions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <h2 className="cta-title">Interested in Our Work?</h2>
          <p className="cta-description">
            Learn more about our team and the expertise behind these innovative
            projects
          </p>
          <Link to="/about" className="btn btn-primary">
            About Our Team <span className="icon">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;

