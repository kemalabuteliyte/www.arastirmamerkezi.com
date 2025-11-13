import './News.css';

const News = () => {
  const newsArticles = [
    {
      date: 'November 2025',
      category: 'Research Breakthrough',
      title: 'Advanced AI Model Achieves 98% Accuracy in Predictive Maintenance',
      excerpt: 'Our research team has developed a novel deep learning architecture that significantly improves predictive maintenance accuracy across industrial IoT systems, reducing downtime and operational costs.',
      tags: ['AI', 'IoT', 'Predictive Analytics']
    },
    {
      date: 'October 2025',
      category: 'Partnership',
      title: 'Strategic Alliance with Leading Energy Consortium',
      excerpt: 'Eliyte™ Araştırma Merkezi partners with international energy leaders to advance renewable energy storage solutions and smart grid technologies for sustainable infrastructure.',
      tags: ['Energy', 'Partnership', 'Sustainability']
    },
    {
      date: 'September 2025',
      category: 'Publication',
      title: 'Groundbreaking Paper on Quantum-Resistant Cryptography Published',
      excerpt: 'Our cybersecurity team\'s research on post-quantum cryptographic algorithms has been published in a leading peer-reviewed journal, advancing the field of secure communications.',
      tags: ['Cybersecurity', 'Cryptography', 'Research']
    },
    {
      date: 'August 2025',
      category: 'Innovation',
      title: 'New Color Science Framework for Digital Media Applications',
      excerpt: 'Researchers unveil AI-assisted color optimization system that revolutionizes color accuracy and consistency across digital displays and imaging systems.',
      tags: ['Color Science', 'AI', 'Digital Media']
    },
    {
      date: 'July 2025',
      category: 'Conference',
      title: 'Team Presents at International Robotics Conference',
      excerpt: 'Our robotics division presented cutting-edge research on human-robot interaction and collaborative autonomous systems at the premier international robotics symposium.',
      tags: ['Robotics', 'AI', 'Conference']
    },
    {
      date: 'June 2025',
      category: 'Achievement',
      title: 'Financial Mathematics Team Wins Best Paper Award',
      excerpt: 'Recognition for innovative work on AI-driven portfolio optimization and risk assessment models that demonstrate superior performance in volatile markets.',
      tags: ['Finance', 'Mathematics', 'AI']
    }
  ];

  const publications = [
    {
      type: 'Journal Article',
      title: 'Deep Learning Approaches for Real-Time IoT Data Processing',
      authors: 'Research Team - Eliyte™ Araştırma Merkezi',
      journal: 'International Journal of IoT and Digital Systems',
      year: '2025',
      impact: 'High Impact'
    },
    {
      type: 'Conference Paper',
      title: 'Cognitive Systems for Automated Decision Support in Complex Environments',
      authors: 'Cognitive Sciences Division',
      journal: 'International Conference on Artificial Intelligence',
      year: '2025',
      impact: 'Peer-Reviewed'
    },
    {
      type: 'Whitepaper',
      title: 'The Future of Energy Storage: Advanced Battery Technologies and Grid Integration',
      authors: 'Energy R&D Department',
      journal: 'Eliyte™ Technical Publications',
      year: '2025',
      impact: 'Industry Impact'
    },
    {
      type: 'Research Report',
      title: 'Comprehensive Analysis of Color Perception in Digital Display Systems',
      authors: 'Color Science Research Group',
      journal: 'Color Science Quarterly',
      year: '2025',
      impact: 'Peer-Reviewed'
    },
    {
      type: 'Journal Article',
      title: 'Blockchain Applications in Secure IoT Ecosystems',
      authors: 'Cybersecurity & Cryptography Team',
      journal: 'Journal of Cybersecurity Research',
      year: '2025',
      impact: 'High Impact'
    },
    {
      type: 'Technical Report',
      title: 'Mathematical Optimization Methods for Financial Risk Management',
      authors: 'Finance & Mathematics Division',
      journal: 'Quantitative Finance Review',
      year: '2025',
      impact: 'Industry Impact'
    }
  ];

  const researchHighlights = [
    {
      icon: '🏆',
      number: '150+',
      label: 'Publications',
      description: 'Peer-reviewed papers and technical reports'
    },
    {
      icon: '📖',
      number: '50+',
      label: 'Citations',
      description: 'Average citations per publication'
    },
    {
      icon: '🎤',
      number: '75+',
      label: 'Presentations',
      description: 'International conferences and symposia'
    },
    {
      icon: '🌟',
      number: '20+',
      label: 'Awards',
      description: 'Research excellence and innovation'
    }
  ];

  return (
    <div className="news">
      <section className="news-hero">
        <div className="container">
          <div className="news-hero-content fade-in-up">
            <h1 className="gradient-text">News & Publications</h1>
            <p className="news-hero-subtitle">
              Stay updated with our latest research breakthroughs, publications,
              conference presentations, and institutional developments
            </p>
          </div>
        </div>
      </section>

      <section className="research-stats">
        <div className="container">
          <div className="stats-grid">
            {researchHighlights.map((stat, index) => (
              <div key={index} className="stat-card glass">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest News</h2>
            <p className="section-description">
              Recent developments and announcements from our research center
            </p>
          </div>
          <div className="news-grid">
            {newsArticles.map((article, index) => (
              <div key={index} className="news-card glass card">
                <div className="news-meta">
                  <span className="news-date">{article.date}</span>
                  <span className="news-category">{article.category}</span>
                </div>
                <h3 className="news-title">{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <div className="news-tags">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="news-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="publications-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Publications</h2>
            <p className="section-description">
              Peer-reviewed research papers, technical reports, and whitepapers
            </p>
          </div>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card glass-strong">
                <div className="publication-type">{pub.type}</div>
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <div className="publication-meta">
                  <span className="publication-journal">{pub.journal}</span>
                  <span className="publication-year">{pub.year}</span>
                  <span className="publication-impact">{pub.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Media & Press</h2>
            <p className="section-description">
              For media inquiries, press releases, and collaboration proposals
            </p>
          </div>
          <div className="media-content glass-strong">
            <div className="media-info">
              <h3>Media Contact</h3>
              <p>
                For press inquiries, interview requests, or media collaboration opportunities,
                please contact our communications team.
              </p>
              <a href="mailto:arge@eliyte.com" className="btn btn-primary">
                Contact Media Team
              </a>
            </div>
            <div className="media-resources">
              <h3>Press Resources</h3>
              <ul>
                <li>High-resolution institutional logos and photos</li>
                <li>Research fact sheets and backgrounders</li>
                <li>Expert profiles and availability</li>
                <li>Press release archive</li>
                <li>Media kit and brand guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content glass-strong">
            <h2>Stay Informed</h2>
            <p>
              Subscribe to our newsletter to receive updates on research breakthroughs,
              publications, events, and opportunities for collaboration.
            </p>
            <p className="newsletter-info">
              Contact us at <a href="mailto:arge@eliyte.com">arge@eliyte.com</a> to subscribe
              to our research updates and newsletter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
