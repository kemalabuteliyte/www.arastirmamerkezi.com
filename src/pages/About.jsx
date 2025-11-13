import './About.css';

const About = () => {
  const values = [
    {
      icon: '🔬',
      title: 'Scientific Rigor',
      description: 'Every project follows reproducible, peer-reviewed methodologies. We ensure that all research outputs are validated through rigorous testing and empirical evidence, maintaining the highest standards of scientific integrity.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Driving technological and scientific breakthroughs that push the boundaries of what\'s possible. We foster a culture of creative problem-solving and continuous improvement in all our research endeavors.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Bridging academia, industry, and public sectors to create synergies that amplify research impact. We believe that the most significant breakthroughs occur at the intersection of diverse perspectives and expertise.'
    },
    {
      icon: '🌍',
      title: 'Ethics & Sustainability',
      description: 'All research aligned with global standards for responsible innovation. We are committed to developing solutions that are not only technologically advanced but also ethically sound and environmentally sustainable.'
    }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in-up">
            <h1 className="gradient-text">About Eliyte™ Araştırma Merkezi</h1>
            <p className="about-hero-subtitle">
              Pioneering multidisciplinary research that transforms science into actionable solutions
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card glass-strong">
              <div className="mission-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To push the boundaries of knowledge and technology through rigorous, data-driven,
                multidisciplinary research. We are dedicated to advancing scientific understanding
                and developing innovative solutions that address the most pressing challenges facing
                society today and in the future.
              </p>
            </div>
            <div className="mission-card glass-strong">
              <div className="mission-icon">🔮</div>
              <h2>Our Vision</h2>
              <p>
                To create a world where science and technology provide sustainable, efficient, and
                scalable solutions to complex global challenges. We envision a future where research-driven
                innovation enables humanity to thrive in harmony with our planet and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Values</h2>
            <p className="section-description">
              Our principles guide every research initiative and partnership we undertake
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item glass card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-description">
              Combining scientific excellence with practical implementation
            </p>
          </div>
          <div className="approach-content">
            <div className="approach-grid">
              <div className="approach-item glass">
                <h3>Data-Driven Research</h3>
                <p>
                  All our research is grounded in empirical data and quantitative analysis.
                  We employ advanced statistical methods and computational tools to extract
                  meaningful insights from complex datasets.
                </p>
              </div>
              <div className="approach-item glass">
                <h3>Multidisciplinary Teams</h3>
                <p>
                  Our research teams bring together experts from diverse fields including
                  computer science, engineering, mathematics, physics, and cognitive sciences
                  to tackle complex problems from multiple angles.
                </p>
              </div>
              <div className="approach-item glass">
                <h3>Measurable Outcomes</h3>
                <p>
                  We define clear success metrics for every project, ensuring that our research
                  delivers quantifiable value. From efficiency gains to error reduction rates,
                  we track and report on tangible results.
                </p>
              </div>
              <div className="approach-item glass">
                <h3>Industry Integration</h3>
                <p>
                  Our research doesn't stop at publication. We work closely with industry partners
                  to translate our findings into practical applications and market-ready solutions
                  that create real-world impact.
                </p>
              </div>
              <div className="approach-item glass">
                <h3>Continuous Innovation</h3>
                <p>
                  We maintain an agile research methodology that allows us to quickly adapt to
                  emerging technologies and shifting market needs while maintaining our commitment
                  to scientific rigor.
                </p>
              </div>
              <div className="approach-item glass">
                <h3>Knowledge Transfer</h3>
                <p>
                  Through workshops, publications, and collaborative projects, we actively share
                  our expertise and findings with the broader scientific community and industry
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-impact">
        <div className="container">
          <div className="impact-content glass-strong">
            <h2>Making a Global Impact</h2>
            <p>
              Eliyte™ Araştırma Merkezi is committed to advancing the frontiers of science and
              technology in ways that benefit society at large. Our research spans critical domains
              from artificial intelligence and digital automation to sustainable energy and advanced
              mathematics, always with an eye toward creating solutions that are both innovative and
              implementable.
            </p>
            <p>
              Through strategic partnerships with leading academic institutions, technology companies,
              government agencies, and international organizations, we ensure that our research has
              maximum reach and impact. We believe that the most significant challenges of our time
              require collaborative, interdisciplinary approaches, and we are proud to be at the
              forefront of this research revolution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
