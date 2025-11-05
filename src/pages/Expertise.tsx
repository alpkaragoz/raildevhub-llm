import { Link } from 'react-router-dom';
import './Expertise.css';

const Expertise = () => {
  return (
    <div className="expertise">
      {/* Hero Section */}
      <section className="expertise-hero">
        <div className="container">
          <h1 className="expertise-title">Our Expertise</h1>
          <p className="expertise-subtitle">
            A comprehensive suite of cutting-edge AI and software engineering
            technologies powering railway Innovation
          </p>
        </div>
      </section>

      {/* AI Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon section-icon-blue">🧠</div>
            <div>
              <h2 className="section-title-left">Artificial Intelligence</h2>
              <p className="section-subtitle-left">
                Advanced AI solutions for intelligent railway systems
              </p>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-card-icon expertise-icon-blue">💬</div>
              <h3 className="expertise-card-title">
                Large Language Models (LLM)
              </h3>
              <p className="expertise-card-description">
                Implementing state-of-the-art language models for natural
                language processing, automated documentation, and intelligent
                chatbots for railway operations.
              </p>
              <ul className="expertise-features">
                <li>
                  <span className="feature-bullet"></span>
                  Intelligent query systems
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Automated report generation
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Multilingual support
                </li>
              </ul>
            </div>

            <div className="expertise-card">
              <div className="expertise-card-icon expertise-icon-blue">🤖</div>
              <h3 className="expertise-card-title">AI Agents</h3>
              <p className="expertise-card-description">
                Autonomous intelligent agents that monitor, analyze, and optimize
                railway operations in real-time.
              </p>
              <ul className="expertise-features">
                <li>
                  <span className="feature-bullet"></span>
                  Predictive maintenance
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Anomaly detection
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Autonomous decision-making
                </li>
              </ul>
            </div>

            <div className="expertise-card">
              <div className="expertise-card-icon expertise-icon-blue">📋</div>
              <h3 className="expertise-card-title">
                Multi-Criteria Planning (MCP)
              </h3>
              <p className="expertise-card-description">
                Advanced planning algorithms considering multiple factors for
                optimal resource allocation and scheduling.
              </p>
              <ul className="expertise-features">
                <li>
                  <span className="feature-bullet"></span>
                  Train scheduling optimization
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Resource management
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Cost-benefit analysis
                </li>
              </ul>
            </div>

            <div className="expertise-card">
              <div className="expertise-card-icon expertise-icon-blue">🔄</div>
              <h3 className="expertise-card-title">Agent-to-Agent (A2A)</h3>
              <p className="expertise-card-description">
                Seamless communication and coordination between multiple AI
                agents for complex railway operations.
              </p>
              <ul className="expertise-features">
                <li>
                  <span className="feature-bullet"></span>
                  Multi-agent coordination
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Distributed decision-making
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Real-time collaboration
                </li>
              </ul>
            </div>

            <div className="expertise-card expertise-card-wide">
              <div className="expertise-card-icon expertise-icon-blue">📊</div>
              <h3 className="expertise-card-title">Big Data Analytics</h3>
              <p className="expertise-card-description">
                Processing and analyzing massive volumes of railway data for
                insights, trends, and data-driven decision-making.
              </p>
              <ul className="expertise-features">
                <li>
                  <span className="feature-bullet"></span>
                  Real-time data processing
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Predictive analytics
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Machine learning models
                </li>
                <li>
                  <span className="feature-bullet"></span>
                  Business intelligence dashboards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Engineering Section */}
      <section className="expertise-section expertise-section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-icon section-icon-red">&lt; / &gt;</div>
            <div>
              <h2 className="section-title-left">Software Engineering</h2>
              <p className="section-subtitle-left">
                Robust, scalable, and modern software architecture
              </p>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card-software">
              <h3 className="expertise-card-title">Java & SpringBoot</h3>
              <p className="expertise-card-description">
                Building robust and scalable backend systems for railway
                applications.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Microservices</span>
                <span className="tag tag-blue">REST APIs</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">React</h3>
              <p className="expertise-card-description">
                Developing dynamic and interactive user interfaces for railway
                management systems.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Frontend</span>
                <span className="tag tag-blue">UI/UX</span>
                <span className="tag tag-blue">SPA</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">Microservices</h3>
              <p className="expertise-card-description">
                Designing modular and independently deployable services for
                enhanced flexibility.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Cloud-native</span>
                <span className="tag tag-blue">Docker</span>
                <span className="tag tag-blue">Kubernetes</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">PostgreSQL</h3>
              <p className="expertise-card-description">
                Robust relational database for critical railway data.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">ACID-Compliance</span>
                <span className="tag tag-blue">Replication</span>
                <span className="tag tag-blue">PostGIS</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">MongoDB</h3>
              <p className="expertise-card-description">
                Flexible NoSQL database for dynamic and unstructured data.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Sharding</span>
                <span className="tag tag-blue">Aggregation</span>
                <span className="tag tag-blue">Atlas</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">Kubernetes</h3>
              <p className="expertise-card-description">
                Container orchestration for scalable and resilient deployments.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Auto-scaling</span>
                <span className="tag tag-blue">Load Balancing</span>
                <span className="tag tag-blue">Helm</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">Docker</h3>
              <p className="expertise-card-description">
                Containerization for consistent development and deployment.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Multi-stage</span>
                <span className="tag tag-blue">Compose</span>
                <span className="tag tag-blue">Registry</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">Linux</h3>
              <p className="expertise-card-description">
                Reliable infrastructure and system administration.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Ubuntu</span>
                <span className="tag tag-blue">RHEL</span>
                <span className="tag tag-blue">Security</span>
              </div>
            </div>

            <div className="expertise-card-software">
              <h3 className="expertise-card-title">Elasticsearch</h3>
              <p className="expertise-card-description">
                Full-text search and analytics for massive railway data.
              </p>
              <div className="expertise-tags">
                <span className="tag tag-blue">Kibana</span>
                <span className="tag tag-blue">Logstash</span>
                <span className="tag tag-blue">Beats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="expertise-cta">
        <div className="container">
          <h2 className="cta-title">See Our Expertise in Action</h2>
          <p className="cta-description">
            Explore our projects to see how we apply these technologies to solve
            real-world railway challenges
          </p>
          <Link to="/projects" className="btn btn-primary">
            View Projects <span className="icon">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

