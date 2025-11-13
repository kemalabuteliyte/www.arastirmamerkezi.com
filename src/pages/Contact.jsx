import './Contact.css';

const Contact = () => {
  const contactTypes = [
    {
      icon: '🤝',
      title: 'Partnership Inquiries',
      description: 'Explore collaboration opportunities with our research teams',
      action: 'Discuss your project or partnership ideas with our team'
    },
    {
      icon: '🔬',
      title: 'Research Collaboration',
      description: 'Joint research projects and academic partnerships',
      action: 'Connect with our research directors for collaboration opportunities'
    },
    {
      icon: '💼',
      title: 'Business Solutions',
      description: 'Technology development and consulting services',
      action: 'Learn how our solutions can address your business challenges'
    },
    {
      icon: '📰',
      title: 'Media & Press',
      description: 'Interview requests and press inquiries',
      action: 'Contact our communications team for media relations'
    },
    {
      icon: '👥',
      title: 'Career Opportunities',
      description: 'Join our world-class research team',
      action: 'Explore open positions and submit your application'
    },
    {
      icon: '📚',
      title: 'Academic Inquiries',
      description: 'Student programs and educational partnerships',
      action: 'Learn about internships and academic collaborations'
    }
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content fade-in-up">
            <h1 className="gradient-text">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              Connect with Eliyte™ Araştırma Merkezi to explore partnership opportunities,
              research collaborations, or learn more about our work
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info glass-strong">
              <h2>Contact Information</h2>
              <p className="contact-description">
                We welcome inquiries from potential partners, collaborators, media representatives,
                and prospective team members. Our team is committed to responding to all serious
                inquiries promptly.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">📧</div>
                  <div className="detail-content">
                    <h3>Email</h3>
                    <a href="mailto:arge@eliyte.com" className="contact-link">
                      arge@eliyte.com
                    </a>
                    <p className="detail-note">Primary contact for all inquiries</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">⏰</div>
                  <div className="detail-content">
                    <h3>Response Time</h3>
                    <p>We typically respond within 2-3 business days</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">🌍</div>
                  <div className="detail-content">
                    <h3>Global Collaboration</h3>
                    <p>We work with partners worldwide across all time zones</p>
                  </div>
                </div>
              </div>

              <div className="newsletter-signup">
                <h3>Stay Updated</h3>
                <p>
                  Subscribe to our newsletter for research updates, publications, and events.
                  Send an email to <a href="mailto:arge@eliyte.com">arge@eliyte.com</a> with
                  "Subscribe" in the subject line.
                </p>
              </div>
            </div>

            <div className="contact-types">
              <h2>How Can We Help?</h2>
              <p className="section-description">
                Select the area that best describes your inquiry
              </p>
              <div className="contact-types-grid">
                {contactTypes.map((type, index) => (
                  <div key={index} className="contact-type-card glass card">
                    <div className="type-icon">{type.icon}</div>
                    <h3>{type.title}</h3>
                    <p className="type-description">{type.description}</p>
                    <p className="type-action">{type.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inquiry-guidelines">
        <div className="container">
          <div className="guidelines-content glass-strong">
            <h2>Inquiry Guidelines</h2>
            <p className="guidelines-intro">
              To help us respond to your inquiry effectively, please include the following
              information in your email:
            </p>
            <div className="guidelines-grid">
              <div className="guideline-item">
                <h3>For Partnership Inquiries</h3>
                <ul>
                  <li>Organization name and overview</li>
                  <li>Specific area of collaboration interest</li>
                  <li>Project scope and objectives</li>
                  <li>Timeline and resource considerations</li>
                  <li>Expected outcomes and deliverables</li>
                </ul>
              </div>
              <div className="guideline-item">
                <h3>For Research Collaboration</h3>
                <ul>
                  <li>Research topic and objectives</li>
                  <li>Current research status and preliminary findings</li>
                  <li>Proposed collaboration model</li>
                  <li>Funding status or opportunities</li>
                  <li>Publication and IP expectations</li>
                </ul>
              </div>
              <div className="guideline-item">
                <h3>For Business Solutions</h3>
                <ul>
                  <li>Business challenge or opportunity description</li>
                  <li>Current solutions and their limitations</li>
                  <li>Desired outcomes and success metrics</li>
                  <li>Timeline and budget constraints</li>
                  <li>Technical requirements and constraints</li>
                </ul>
              </div>
              <div className="guideline-item">
                <h3>For Media Inquiries</h3>
                <ul>
                  <li>Media outlet and publication details</li>
                  <li>Topic or research area of interest</li>
                  <li>Interview format and duration</li>
                  <li>Deadline for responses or interviews</li>
                  <li>Target audience and publication reach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item glass">
              <h3>How long does it take to establish a partnership?</h3>
              <p>
                The timeline varies based on the scope and complexity of the collaboration.
                Initial consultations typically occur within 2-3 weeks, with formal agreements
                taking 1-3 months to finalize depending on project specifications.
              </p>
            </div>
            <div className="faq-item glass">
              <h3>Do you work with startups and small organizations?</h3>
              <p>
                Yes, we collaborate with organizations of all sizes. We evaluate partnerships
                based on the scientific merit, innovation potential, and alignment with our
                research capabilities rather than organization size.
              </p>
            </div>
            <div className="faq-item glass">
              <h3>Can international organizations partner with you?</h3>
              <p>
                Absolutely. We actively seek international collaborations and have partnerships
                with organizations across multiple continents. We're equipped to handle cross-border
                projects and accommodate different time zones.
              </p>
            </div>
            <div className="faq-item glass">
              <h3>Do you offer confidentiality agreements?</h3>
              <p>
                Yes, we routinely work under non-disclosure agreements (NDAs) and can establish
                appropriate confidentiality frameworks before discussing sensitive project details
                or proprietary information.
              </p>
            </div>
            <div className="faq-item glass">
              <h3>What is your typical project engagement model?</h3>
              <p>
                We offer flexible engagement models including fixed-scope projects, ongoing
                research collaborations, retainer-based consulting, and joint development
                agreements. The model is tailored to each partner's needs.
              </p>
            </div>
            <div className="faq-item glass">
              <h3>How do you handle intellectual property?</h3>
              <p>
                IP arrangements are negotiated on a case-by-case basis and clearly defined in
                our agreements. We support various models including joint ownership, licensing
                arrangements, and technology transfer agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content glass-strong">
            <h2>Ready to Collaborate?</h2>
            <p>
              Whether you're looking to solve complex technical challenges, advance scientific
              research, or explore innovation opportunities, we're here to help make it happen.
            </p>
            <a href="mailto:arge@eliyte.com" className="btn btn-primary">
              Contact Us - arge@eliyte.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
