import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About RailDevHub</h1>
          <p className="about-subtitle">Where New Rails Meet New Horizons</p>
          <p className="about-intro">
            RailDevHub is a pioneering platform at the intersection of
            technology and the future of rail transport. We combine cutting-edge
            AI, software engineering, and innovative thinking to transform
            railway operations into intelligent, self-optimizing systems that
            serve millions of passengers across Turkey.
          </p>
          <blockquote className="about-quote">
            "Every great dream begins with a dreamer. Always remember, you have
            within you the strength, the patience, and the passion to reach for
            the stars to change the world."
            <cite className="quote-author">- Harriet Tubman</cite>
          </blockquote>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <h2 className="section-title">Our Story: The Birth of a Revolution</h2>
          <div className="story-block story-block-blue">
            <h3 className="story-block-question">
              What if the future was here? What if we could redefine how we
              experience tomorrow, today?
            </h3>
            <p className="story-block-text">
              RailDevHub was born from a simple yet powerful vision: to bridge
              the gap between traditional railway infrastructure and the digital
              future. Our journey began when a group of passionate engineers and
              AI experts recognized the untapped potential of Turkey's railway
              network. We saw beyond the tracks and trains - we envisioned a
              connected, intelligent ecosystem that could revolutionize how
              people and goods move across the nation.
            </p>
            <p className="story-block-text">
              Starting from Ankara, the heart of Turkey's railway system, we
              embarked on a mission to digitalize and transform railway
              operations. Today, our team of 15+ experts works tirelessly to
              build the smartest railway network in the world, combining
              artificial intelligence, IoT, big data, and modern software
              engineering to create solutions that make millions of journeys
              safer, faster, and smarter.
            </p>
          </div>

          <div className="story-cards">
            <div className="story-card">
              <div className="story-card-icon story-card-icon-red">🚂</div>
              <h3 className="story-card-title">The Railway Challenge</h3>
              <p className="story-card-text">
                Turkey's railway network spans thousands of kilometers, serving
                millions of passengers and tons of freight annually. Traditional
                systems struggled with efficiency, real-time monitoring, and
                predictive maintenance. We recognized the need for intelligent
                solutions that could handle the complexity and scale of modern
                railway operations.
              </p>
            </div>
            <div className="story-card">
              <div className="story-card-icon story-card-icon-yellow">💡</div>
              <h3 className="story-card-title">The Digital Awakening</h3>
              <p className="story-card-text">
                The digital transformation opportunity was clear: integrate AI,
                IoT, and cloud technologies to create a self-optimizing railway
                ecosystem. We set out to build platforms that could process
                massive amounts of data in real-time, predict issues before they
                occur, and optimize operations for maximum efficiency and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <h2 className="section-title">
            Our Mission: Rewriting the Future of Mobility
          </h2>
          <div className="mission-statement">
            <h3 className="mission-title">Our Mission Statement</h3>
            <p className="mission-text">
              To transform Turkey's railway infrastructure into the world's most
              intelligent, efficient, and sustainable transportation network by
              leveraging cutting-edge AI and software engineering. We are
              committed to creating solutions that enhance safety, optimize
              performance, and provide exceptional user experiences while
              maintaining the highest standards of security and quality.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-blue">A</div>
              <h3 className="pillar-title">Innovation First</h3>
              <p className="pillar-text">
                We continuously explore emerging technologies and methodologies
                to stay at the forefront of railway innovation, ensuring our
                solutions are future-proof and scalable.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-blue">B</div>
              <h3 className="pillar-title">User-Centric</h3>
              <p className="pillar-text">
                Every decision we make puts users first - from railway operators
                to passengers, we design solutions that enhance their experience
                and solve real-world problems.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-blue">C</div>
              <h3 className="pillar-title">Quality Control</h3>
              <p className="pillar-text">
                Rigorous testing and quality assurance processes ensure that
                every product we deliver meets the highest standards of
                reliability, performance, and security.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon pillar-icon-blue">D</div>
              <h3 className="pillar-title">Sustainable Solutions</h3>
              <p className="pillar-text">
                We build with sustainability in mind, creating solutions that
                optimize resource usage, reduce environmental impact, and
                contribute to a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="about-building">
        <div className="container">
          <h2 className="section-title">What We're Building Today</h2>
          <p className="section-subtitle">
            Pioneering the next generation of rail technology
          </p>
          <div className="building-grid">
            <div className="building-card">
              <div className="building-icon building-icon-blue">🚄</div>
              <h3 className="building-title">Digital Rail Platform</h3>
              <p className="building-text">
                Comprehensive digital ecosystem for railway management,
                operations, and maintenance.
              </p>
              <ul className="building-features">
                <li>Real-time monitoring and control</li>
                <li>Integrated workflow management</li>
                <li>Multi-tenant architecture</li>
                <li>Cloud-native infrastructure</li>
              </ul>
            </div>
            <div className="building-card">
              <div className="building-icon building-icon-red">🤖</div>
              <h3 className="building-title">AI & ML Solutions</h3>
              <p className="building-text">
                Intelligent systems powered by artificial intelligence and
                machine learning.
              </p>
              <ul className="building-features">
                <li>Predictive maintenance</li>
                <li>Anomaly detection</li>
                <li>Optimization algorithms</li>
                <li>Natural language processing</li>
              </ul>
            </div>
            <div className="building-card">
              <div className="building-icon building-icon-yellow">📊</div>
              <h3 className="building-title">IoT & Data Analytics</h3>
              <p className="building-text">
                Advanced analytics and IoT integration for data-driven
                decision-making.
              </p>
              <ul className="building-features">
                <li>Sensor network integration</li>
                <li>Real-time data processing</li>
                <li>Business intelligence dashboards</li>
                <li>Data visualization tools</li>
              </ul>
            </div>
          </div>

          <div className="infrastructure-block">
            <h3 className="infrastructure-title">The Invisible Infrastructure</h3>
            <p className="infrastructure-text">
              Behind every successful railway operation lies a complex network of
              systems, protocols, and technologies working seamlessly together.
              Our invisible infrastructure ensures reliability, scalability, and
              security at every layer - from cloud orchestration to edge
              computing, from data pipelines to API gateways. This foundation
              enables our platforms to handle millions of transactions, process
              terabytes of data, and serve thousands of users simultaneously
              without compromising performance or security.
            </p>
          </div>
        </div>
      </section>

      {/* Team Numbers Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Our Team by the Numbers</h2>
          <p className="section-subtitle">
            A diverse group of experts, working as one to achieve more
          </p>
          <div className="team-stats">
            <div className="team-stat-card">
              <div className="team-stat-number">15</div>
              <div className="team-stat-label">Engineers & Developers</div>
            </div>
            <div className="team-stat-card">
              <div className="team-stat-number">10+</div>
              <div className="team-stat-label">Years of Experience</div>
            </div>
            <div className="team-stat-card">
              <div className="team-stat-number">2+</div>
              <div className="team-stat-label">Active Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We embrace new technologies and methodologies, constantly pushing
                the boundaries of what's possible in railway technology.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3 className="value-title">Performance</h3>
              <p className="value-description">
                Our systems are built for speed, efficiency, and reliability,
                handling complex operations at scale without compromise.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3 className="value-title">User-Centric Design</h3>
              <p className="value-description">
                Every interface and feature is designed with users in mind,
                ensuring intuitive experiences that enhance productivity.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3 className="value-title">Quality</h3>
              <p className="value-description">
                We maintain the highest standards of code quality, testing, and
                documentation, ensuring our products are robust and maintainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="about-future">
        <div className="container">
          <h2 className="section-title">The Future We're Building</h2>
          <p className="section-subtitle">
            Our roadmap to a smarter, more connected rail ecosystem
          </p>
          <div className="future-banner">
            <p className="future-banner-text">
              Join us as we redefine the future of rail transport
            </p>
          </div>
          <div className="future-grid">
            <div className="future-card">
              <div className="future-icon future-icon-blue">🚂</div>
              <h3 className="future-title">The Fully Autonomous Train</h3>
              <p className="future-text">
                Developing AI systems that enable fully autonomous train
                operations, reducing human error and optimizing routes in
                real-time.
              </p>
              <ul className="future-features">
                <li>Computer vision navigation</li>
                <li>Predictive route optimization</li>
                <li>Real-time obstacle detection</li>
              </ul>
            </div>
            <div className="future-card">
              <div className="future-icon future-icon-red">🚄</div>
              <h3 className="future-title">Hyperloop Integration</h3>
              <p className="future-text">
                Exploring next-generation transportation technologies that could
                revolutionize long-distance travel and freight transport.
              </p>
              <ul className="future-features">
                <li>High-speed vacuum tube systems</li>
                <li>Energy-efficient propulsion</li>
                <li>Seamless network integration</li>
              </ul>
            </div>
            <div className="future-card">
              <div className="future-icon future-icon-yellow">🌐</div>
              <h3 className="future-title">The Smart Railway Network</h3>
              <p className="future-text">
                Creating a fully connected, intelligent railway ecosystem where
                every component communicates and optimizes in real-time.
              </p>
              <ul className="future-features">
                <li>IoT sensor networks</li>
                <li>Edge computing integration</li>
                <li>Distributed AI systems</li>
              </ul>
            </div>
          </div>
          <div className="dream-block">
            <h3 className="dream-title">Beyond 2030+ The Dream</h3>
            <p className="dream-text">
              We envision a future where railway transportation is not just a
              means of getting from point A to point B, but a seamlessly
              integrated part of a sustainable, intelligent mobility ecosystem.
              A future where trains communicate with cities, optimize energy
              usage in real-time, and provide personalized experiences for every
              passenger. This is not just a dream - it's our mission, and we're
              building it today, one line of code at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Domain Section */}
      <section className="about-domain">
        <div className="container">
          <h2 className="section-title">Our Domain</h2>
          <p className="section-subtitle">
            We operate across the following key areas, leveraging our expertise
            to drive innovation
          </p>
          <div className="domain-grid">
            <div className="domain-card">
              <div className="domain-icon">⚙️</div>
              <h3 className="domain-title">Tech</h3>
            </div>
            <div className="domain-card">
              <div className="domain-icon">🚂</div>
              <h3 className="domain-title">Railways</h3>
            </div>
            <div className="domain-card">
              <div className="domain-icon">🚗</div>
              <h3 className="domain-title">Mobility</h3>
            </div>
            <div className="domain-card">
              <div className="domain-icon">🚀</div>
              <h3 className="domain-title">Future</h3>
            </div>
          </div>
          <div className="domain-button-wrapper">
            <button className="btn btn-primary">Explore Our Ecosystem</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2 className="cta-title">Ready to See What We Can Do?</h2>
          <p className="cta-description">
            Explore our projects and discover how we're transforming railway
            operations with innovative technology solutions.
          </p>
          <div className="cta-buttons">
            <a href="/projects" className="btn btn-primary">
              View Our Portfolio
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

