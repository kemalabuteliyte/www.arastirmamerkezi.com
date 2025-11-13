import './Careers.css';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior AI Research Scientist',
      department: 'Artificial Intelligence R&D',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Lead cutting-edge AI research projects in deep learning, NLP, and computer vision. Develop novel algorithms and publish in top-tier conferences.',
      requirements: [
        'Ph.D. in Computer Science, AI, or related field',
        'Strong publication record in AI/ML conferences',
        'Expertise in deep learning frameworks (PyTorch, TensorFlow)',
        'Experience with large-scale model training'
      ]
    },
    {
      title: 'IoT Systems Engineer',
      department: 'Internet of Things R&D',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Design and implement IoT architectures for smart systems. Work on edge computing, sensor networks, and real-time data processing.',
      requirements: [
        'M.S. or Ph.D. in Electrical Engineering, Computer Science',
        'Experience with IoT protocols and embedded systems',
        'Strong programming skills in C++, Python',
        'Knowledge of cloud platforms and edge computing'
      ]
    },
    {
      title: 'Quantitative Researcher - Finance',
      department: 'Finance & Mathematics R&D',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Develop mathematical models for financial analysis, risk assessment, and portfolio optimization using advanced statistical methods.',
      requirements: [
        'Ph.D. in Mathematics, Statistics, Financial Engineering',
        'Strong background in stochastic calculus and optimization',
        'Programming expertise in Python, R, or MATLAB',
        'Experience with financial modeling and time series analysis'
      ]
    },
    {
      title: 'Energy Systems Researcher',
      department: 'Energy R&D',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Research renewable energy systems, energy storage, and smart grid technologies. Conduct simulations and develop optimization algorithms.',
      requirements: [
        'Ph.D. in Energy Engineering, Electrical Engineering',
        'Knowledge of renewable energy systems and storage',
        'Experience with energy modeling software',
        'Understanding of grid integration challenges'
      ]
    },
    {
      title: 'Cybersecurity Research Engineer',
      department: 'Cybersecurity & Cryptography',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Research and develop advanced security solutions including cryptographic protocols, threat detection systems, and blockchain applications.',
      requirements: [
        'M.S. or Ph.D. in Computer Science, Cybersecurity',
        'Expertise in cryptography and security protocols',
        'Experience with penetration testing and threat analysis',
        'Knowledge of blockchain and distributed systems'
      ]
    },
    {
      title: 'Robotics Research Scientist',
      department: 'Advanced Robotics & Mechatronics',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Advance robotics research in autonomous systems, control theory, and human-robot interaction. Design and test robotic prototypes.',
      requirements: [
        'Ph.D. in Robotics, Mechanical Engineering, or related field',
        'Experience with ROS and robotic simulation tools',
        'Strong background in control systems and kinematics',
        'Programming skills in C++, Python'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Data Science & Big Data Analytics',
      type: 'Full-time',
      location: 'Research Center',
      description: 'Analyze large-scale datasets, develop predictive models, and create decision support systems using machine learning and statistical methods.',
      requirements: [
        'M.S. or Ph.D. in Data Science, Computer Science, Statistics',
        'Proficiency in Python, SQL, and data visualization',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong statistical analysis and modeling skills'
      ]
    },
    {
      title: 'Research Intern - Multiple Disciplines',
      department: 'Various Departments',
      type: 'Internship',
      location: 'Research Center',
      description: 'Join our team as a research intern and work on cutting-edge projects across AI, IoT, energy, robotics, and more. Gain hands-on experience with world-class researchers.',
      requirements: [
        'Currently pursuing M.S. or Ph.D. in relevant field',
        'Strong academic record',
        'Programming and research skills',
        'Passion for scientific innovation'
      ]
    }
  ];

  const benefits = [
    {
      icon: '🔬',
      title: 'Cutting-Edge Research',
      description: 'Work on groundbreaking projects that push the boundaries of science and technology'
    },
    {
      icon: '👥',
      title: 'Collaborative Environment',
      description: 'Join a diverse team of experts from around the world working together on complex challenges'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Access to conferences, workshops, training programs, and educational resources'
    },
    {
      icon: '🌐',
      title: 'Global Impact',
      description: 'Contribute to research that addresses real-world problems and creates lasting change'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and supportive policies for personal well-being'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear pathways for advancement and opportunities to lead research initiatives'
    }
  ];

  const culture = [
    {
      title: 'Innovation-Driven',
      description: 'We encourage creative thinking and experimentation. Failure is seen as a learning opportunity on the path to breakthrough discoveries.'
    },
    {
      title: 'Collaborative',
      description: 'Our open lab environment fosters cross-disciplinary collaboration. Regular seminars and workshops facilitate knowledge sharing across teams.'
    },
    {
      title: 'Ethical & Responsible',
      description: 'We maintain the highest standards of research ethics and are committed to responsible innovation that benefits society.'
    },
    {
      title: 'Inclusive & Diverse',
      description: 'We value diversity in backgrounds, perspectives, and ideas. Our inclusive culture ensures everyone can contribute their best work.'
    }
  ];

  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content fade-in-up">
            <h1 className="gradient-text">Join Our Team</h1>
            <p className="careers-hero-subtitle">
              Shape the future of science and technology alongside world-class researchers
              and engineers at Eliyte™ Araştırma Merkezi
            </p>
          </div>
        </div>
      </section>

      <section className="why-join">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Work With Us</h2>
            <p className="section-description">
              Join a center of excellence dedicated to scientific innovation and impact
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card glass card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="culture-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Culture</h2>
            <p className="section-description">
              A collaborative, innovative, and ethical research environment
            </p>
          </div>
          <div className="culture-grid">
            {culture.map((item, index) => (
              <div key={index} className="culture-card glass-strong">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="open-positions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-description">
              Explore current opportunities to join our research teams
            </p>
          </div>
          <div className="positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card glass">
                <div className="position-header">
                  <div className="position-main">
                    <h3 className="position-title">{position.title}</h3>
                    <p className="position-department">{position.department}</p>
                  </div>
                  <div className="position-meta">
                    <span className="position-type">{position.type}</span>
                    <span className="position-location">{position.location}</span>
                  </div>
                </div>
                <p className="position-description">{position.description}</p>
                <div className="position-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="internship-program">
        <div className="container">
          <div className="internship-content glass-strong">
            <h2>Internship Programs</h2>
            <p>
              We offer competitive internship programs for high-performing students pursuing
              graduate degrees in relevant fields. Our interns work directly with senior researchers
              on active projects, gaining valuable hands-on experience in cutting-edge research.
            </p>
            <div className="internship-benefits">
              <div className="internship-benefit">
                <h3>What You'll Gain</h3>
                <ul>
                  <li>Real-world research experience on active projects</li>
                  <li>Mentorship from leading scientists and engineers</li>
                  <li>Opportunity to co-author research publications</li>
                  <li>Networking with professionals in your field</li>
                  <li>Potential pathway to full-time positions</li>
                </ul>
              </div>
              <div className="internship-benefit">
                <h3>Duration & Commitment</h3>
                <ul>
                  <li>3-6 month programs (flexible based on academic calendar)</li>
                  <li>Full-time commitment during internship period</li>
                  <li>Remote and on-site options available</li>
                  <li>Competitive stipend provided</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="application-section">
        <div className="container">
          <div className="application-content glass-strong">
            <h2>Ready to Make an Impact?</h2>
            <p>
              If you're passionate about advancing science and technology through rigorous research,
              we'd love to hear from you. Send your CV, research statement, and relevant publications
              to our recruitment team.
            </p>
            <div className="application-info">
              <a href="mailto:arge@eliyte.com" className="btn btn-primary">
                Apply Now - arge@eliyte.com
              </a>
              <p className="application-note">
                Please include the position title in your email subject line.
                We review applications on a rolling basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
