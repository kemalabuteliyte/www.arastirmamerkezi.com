import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const highlights = [
    {
      number: '12+',
      label: 'Research Domains',
      description: 'Multidisciplinary research areas'
    },
    {
      number: '100+',
      label: 'Active Projects',
      description: 'Cutting-edge research initiatives'
    },
    {
      number: '50+',
      label: 'Expert Team',
      description: 'Scientists, engineers, and researchers'
    },
    {
      number: 'Global',
      label: 'Collaborations',
      description: 'Industry and academic partnerships'
    }
  ];

  const researchHighlights = [
    {
      title: 'Digital Workforce & Automation',
      description: 'Intelligent automation systems and AI-assisted workflows that optimize operations and reduce errors.',
      icon: '🤖'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Deep learning, NLP, computer vision, and AI safety research for predictive modeling and decision support.',
      icon: '🧠'
    },
    {
      title: 'Internet of Things',
      description: 'Smart devices, edge computing, and IoT-enabled solutions for energy, manufacturing, and urban infrastructure.',
      icon: '📡'
    },
    {
      title: 'Energy Systems',
      description: 'Renewable energy, advanced storage, and grid optimization with lifecycle carbon footprint assessment.',
      icon: '⚡'
    },
    {
      title: 'Finance & Mathematics',
      description: 'Quantitative finance, risk analytics, and AI-assisted financial forecasting and portfolio management.',
      icon: '📊'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat detection, blockchain research, and security for IoT, AI, and digital infrastructures.',
      icon: '🔒'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              <span className="gradient-text">Eliyte™ Araştırma Merkezi</span>
            </h1>
            <h2 className="hero-subtitle">Pioneering Science & Technology</h2>
            <p className="hero-tagline">Innovating Tomorrow, Today</p>
            <p className="hero-description">
              Eliyte™ Araştırma Merkezi is a leading multidisciplinary research institution advancing
              digital technologies, artificial intelligence, IoT, energy systems, finance, mathematics,
              and emerging scientific fields. We translate rigorous research into actionable, measurable
              solutions for industries and global initiatives.
            </p>
            <div className="hero-cta">
              <Link to="/partners" className="btn btn-primary">Partner with Us</Link>
              <Link to="/research" className="btn btn-secondary">Explore Our Research</Link>
              <Link to="/careers" className="btn btn-secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card glass card">
                <div className="highlight-number gradient-text">{highlight.number}</div>
                <h3 className="highlight-label">{highlight.label}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Areas */}
      <section className="featured-research">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Research Areas</h2>
            <p className="section-description">
              Driving technological and scientific breakthroughs through rigorous, data-driven research
            </p>
          </div>
          <div className="research-grid">
            {researchHighlights.map((research, index) => (
              <div key={index} className="research-card glass card">
                <div className="research-icon">{research.icon}</div>
                <h3 className="research-title">{research.title}</h3>
                <p className="research-description">{research.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/research" className="btn btn-primary">View All Research Areas</Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Commitment</h2>
            <p className="section-description">
              Guided by scientific rigor, innovation, collaboration, and ethical responsibility
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card glass-strong">
              <h3>Scientific Rigor</h3>
              <p>Every project follows reproducible, peer-reviewed methodologies with measurable outcomes.</p>
            </div>
            <div className="value-card glass-strong">
              <h3>Innovation</h3>
              <p>Driving technological and scientific breakthroughs that address complex global challenges.</p>
            </div>
            <div className="value-card glass-strong">
              <h3>Collaboration</h3>
              <p>Bridging academia, industry, and public sectors for impactful research outcomes.</p>
            </div>
            <div className="value-card glass-strong">
              <h3>Ethics & Sustainability</h3>
              <p>All research aligned with global standards for responsible innovation and sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content glass-strong">
            <h2>Ready to Transform Your Vision into Reality?</h2>
            <p>
              Partner with Eliyte™ Araştırma Merkezi to leverage cutting-edge research
              and data-driven solutions for your organization.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/solutions" className="btn btn-secondary">Explore Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
