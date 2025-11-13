import { Link } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const services = [
    {
      icon: '🔬',
      title: 'Research Consulting',
      description: 'Tailored solutions for companies and government agencies seeking to leverage cutting-edge research.',
      features: [
        'Custom research program design and implementation',
        'Technical feasibility studies and proof-of-concept development',
        'Expert analysis and strategic recommendations',
        'Research roadmap development aligned with business objectives',
        'Ongoing advisory and scientific support'
      ]
    },
    {
      icon: '⚙️',
      title: 'Technology Development',
      description: 'End-to-end technology solutions from concept to deployment.',
      features: [
        'Rapid prototyping and MVP development',
        'System architecture design and optimization',
        'Testing, validation, and quality assurance',
        'Integration with existing infrastructure',
        'Deployment support and performance tuning'
      ]
    },
    {
      icon: '📊',
      title: 'Data & Analytics Services',
      description: 'AI-driven insights for decision-making and operational optimization.',
      features: [
        'Big data processing and real-time analytics',
        'Predictive modeling and forecasting',
        'Custom dashboard development and visualization',
        'Machine learning model development and deployment',
        'Performance monitoring and continuous optimization'
      ]
    },
    {
      icon: '🚀',
      title: 'Technology Transfer',
      description: 'Converting research outputs into scalable, market-ready solutions.',
      features: [
        'Intellectual property commercialization',
        'Market analysis and go-to-market strategy',
        'Pilot program implementation',
        'Scaling and production optimization',
        'Licensing and partnership facilitation'
      ]
    },
    {
      icon: '📚',
      title: 'Training & Workshops',
      description: 'Knowledge transfer in AI, IoT, data science, and advanced technologies.',
      features: [
        'Custom training programs for technical teams',
        'Executive briefings on emerging technologies',
        'Hands-on workshops and bootcamps',
        'Certification programs in specialized areas',
        'Ongoing technical support and mentorship'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your challenges, objectives, and existing infrastructure through comprehensive analysis and stakeholder interviews.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our experts design a customized approach aligned with your goals, combining relevant research methodologies and technological solutions.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the solution with rigorous project management, ensuring timely delivery while maintaining quality and scientific standards.'
    },
    {
      number: '04',
      title: 'Validation & Testing',
      description: 'Comprehensive testing and validation ensures the solution meets all requirements and performs optimally in real-world conditions.'
    },
    {
      number: '05',
      title: 'Deployment & Support',
      description: 'We facilitate smooth deployment and provide ongoing support, monitoring, and optimization to maximize value delivery.'
    }
  ];

  return (
    <div className="solutions">
      <section className="solutions-hero">
        <div className="container">
          <div className="solutions-hero-content fade-in-up">
            <h1 className="gradient-text">Solutions & Services</h1>
            <p className="solutions-hero-subtitle">
              Transforming research into actionable solutions that drive innovation,
              efficiency, and measurable business outcomes
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              Comprehensive solutions tailored to your unique challenges and opportunities
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-description">
              A proven methodology that ensures successful delivery of research-driven solutions
            </p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step glass-strong">
                <div className="step-number gradient-text">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Eliyte™</h2>
            <p className="section-description">
              Delivering measurable value through scientific excellence and practical expertise
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card glass">
              <h3>Evidence-Based Solutions</h3>
              <p>
                All our solutions are grounded in rigorous research and empirical data,
                ensuring reliability and effectiveness in real-world applications.
              </p>
            </div>
            <div className="benefit-card glass">
              <h3>Multidisciplinary Expertise</h3>
              <p>
                Access to experts across AI, IoT, energy, finance, mathematics, and more,
                providing comprehensive perspectives on complex challenges.
              </p>
            </div>
            <div className="benefit-card glass">
              <h3>Measurable Outcomes</h3>
              <p>
                We define clear success metrics and track performance, delivering quantifiable
                improvements in efficiency, cost reduction, and ROI.
              </p>
            </div>
            <div className="benefit-card glass">
              <h3>Scalable Architecture</h3>
              <p>
                Our solutions are designed for growth, ensuring they can scale with your
                organization's evolving needs and expanding operations.
              </p>
            </div>
            <div className="benefit-card glass">
              <h3>Rapid Innovation</h3>
              <p>
                Leverage our agile research methodologies to quickly prototype, test, and
                deploy innovative solutions ahead of market competition.
              </p>
            </div>
            <div className="benefit-card glass">
              <h3>Ongoing Support</h3>
              <p>
                Continuous monitoring, optimization, and technical support ensure your
                solutions maintain peak performance over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content glass-strong">
            <h2>Ready to Innovate?</h2>
            <p>
              Let's discuss how our research-driven solutions can address your specific
              challenges and unlock new opportunities for growth and efficiency.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
              <Link to="/research" className="btn btn-secondary">Explore Research Areas</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
