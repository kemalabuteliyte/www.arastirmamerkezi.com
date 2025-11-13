import { Link } from 'react-router-dom';
import './Partners.css';

const Partners = () => {
  const partnershipTypes = [
    {
      icon: '🏢',
      title: 'Industry Partnerships',
      description: 'Collaborative research and development with leading technology, finance, energy, healthcare, and infrastructure companies.',
      benefits: [
        'Access to cutting-edge research and expertise',
        'Co-development of innovative solutions',
        'Technology transfer and commercialization support',
        'Joint intellectual property opportunities',
        'Priority access to research findings and prototypes'
      ]
    },
    {
      icon: '🎓',
      title: 'Academic Collaborations',
      description: 'Joint research programs, publications, and knowledge exchange with universities and research institutions worldwide.',
      benefits: [
        'Collaborative research projects and publications',
        'Student and researcher exchange programs',
        'Shared laboratory facilities and resources',
        'Joint grant applications and funding',
        'Co-supervision of graduate students and postdocs'
      ]
    },
    {
      icon: '🏛️',
      title: 'Government & NGO Projects',
      description: 'Research initiatives supporting public policy, sustainable development, and social impact programs.',
      benefits: [
        'Evidence-based policy recommendations',
        'Solutions for social and environmental challenges',
        'Technology for public sector modernization',
        'Capacity building and knowledge transfer',
        'Alignment with UN Sustainable Development Goals'
      ]
    },
    {
      icon: '🌍',
      title: 'International Alliances',
      description: 'Strategic collaborations with global R&D centers, innovation hubs, and international research networks.',
      benefits: [
        'Cross-border research initiatives',
        'Access to global talent and expertise',
        'International funding opportunities',
        'Knowledge exchange and best practices',
        'Global market entry support'
      ]
    }
  ];

  const collaborationAreas = [
    {
      title: 'Research & Development',
      items: [
        'Joint research projects in AI, IoT, energy, and digital technologies',
        'Co-development of innovative products and services',
        'Prototype testing and validation',
        'Technical consultation and expert advisory'
      ]
    },
    {
      title: 'Technology Transfer',
      items: [
        'Licensing of intellectual property and patents',
        'Commercialization of research outputs',
        'Technology adaptation and customization',
        'Startup incubation and spin-offs'
      ]
    },
    {
      title: 'Education & Training',
      items: [
        'Joint educational programs and certifications',
        'Industry-academic curriculum development',
        'Professional development workshops',
        'Internship and fellowship programs'
      ]
    },
    {
      title: 'Funding & Investment',
      items: [
        'Joint grant applications and research funding',
        'Public-private partnership frameworks',
        'Research infrastructure development',
        'Innovation fund establishment'
      ]
    }
  ];

  return (
    <div className="partners">
      <section className="partners-hero">
        <div className="container">
          <div className="partners-hero-content fade-in-up">
            <h1 className="gradient-text">Partners & Collaborations</h1>
            <p className="partners-hero-subtitle">
              Building bridges between research, industry, and society to amplify
              innovation and create lasting impact through strategic partnerships
            </p>
          </div>
        </div>
      </section>

      <section className="partnership-types">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Partnership Opportunities</h2>
            <p className="section-description">
              We collaborate with diverse organizations to advance research and innovation
            </p>
          </div>
          <div className="partnership-grid">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="partnership-card glass card">
                <div className="partnership-icon">{type.icon}</div>
                <h3 className="partnership-title">{type.title}</h3>
                <p className="partnership-description">{type.description}</p>
                <div className="partnership-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collaboration-areas">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Collaboration Areas</h2>
            <p className="section-description">
              Diverse ways to engage with Eliyte™ Araştırma Merkezi
            </p>
          </div>
          <div className="areas-grid">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="area-card glass-strong">
                <h3>{area.title}</h3>
                <ul>
                  {area.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How to Partner with Us</h2>
            <p className="section-description">
              A straightforward process to establish meaningful collaboration
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step glass">
              <div className="step-number gradient-text">01</div>
              <div className="step-content">
                <h3>Initial Contact</h3>
                <p>
                  Reach out to our partnership team with your organization's details
                  and collaboration interests. We'll schedule an initial consultation
                  to understand your objectives.
                </p>
              </div>
            </div>
            <div className="process-step glass">
              <div className="step-number gradient-text">02</div>
              <div className="step-content">
                <h3>Alignment Assessment</h3>
                <p>
                  We evaluate the synergies between your needs and our capabilities,
                  identifying specific research areas and potential collaboration models
                  that maximize mutual value.
                </p>
              </div>
            </div>
            <div className="process-step glass">
              <div className="step-number gradient-text">03</div>
              <div className="step-content">
                <h3>Proposal Development</h3>
                <p>
                  Our team develops a detailed collaboration proposal outlining objectives,
                  deliverables, timelines, resource allocation, and success metrics.
                </p>
              </div>
            </div>
            <div className="process-step glass">
              <div className="step-number gradient-text">04</div>
              <div className="step-content">
                <h3>Agreement & Launch</h3>
                <p>
                  Upon agreement on terms, we formalize the partnership and commence
                  collaborative activities with dedicated project management and
                  regular progress reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partnership-benefits-section">
        <div className="container">
          <div className="benefits-content glass-strong">
            <h2>Why Partner with Eliyte™</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>World-Class Expertise</h3>
                <p>
                  Access to leading researchers and scientists across 12+ multidisciplinary domains
                  with proven track records in innovation and scientific breakthroughs.
                </p>
              </div>
              <div className="benefit-item">
                <h3>Advanced Infrastructure</h3>
                <p>
                  State-of-the-art laboratories, computational resources, and testing facilities
                  equipped for cutting-edge research and development.
                </p>
              </div>
              <div className="benefit-item">
                <h3>Flexible Engagement Models</h3>
                <p>
                  Customizable partnership structures from short-term projects to long-term
                  strategic alliances, tailored to your specific needs and objectives.
                </p>
              </div>
              <div className="benefit-item">
                <h3>Proven Track Record</h3>
                <p>
                  History of successful collaborations delivering measurable outcomes, published
                  research, patents, and commercial applications across various industries.
                </p>
              </div>
              <div className="benefit-item">
                <h3>Rapid Innovation Cycles</h3>
                <p>
                  Agile research methodologies enabling fast prototyping, testing, and iteration
                  to bring innovations to market quickly.
                </p>
              </div>
              <div className="benefit-item">
                <h3>Global Network</h3>
                <p>
                  Connections to international research institutions, industry leaders, and
                  funding agencies expanding your collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content glass-strong">
            <h2>Let's Collaborate</h2>
            <p>
              Join our growing network of partners and collaborators. Together, we can
              push the boundaries of science and technology to create innovative solutions
              that make a real difference.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Start a Partnership</Link>
              <Link to="/research" className="btn btn-secondary">Explore Research Areas</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
