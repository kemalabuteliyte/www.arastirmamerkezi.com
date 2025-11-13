import './News.css';

const News = () => {
  // Empty arrays - no example news or publications
  const newsArticles = [];
  const publications = [];

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
          {newsArticles.length > 0 ? (
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
          ) : (
            <div className="empty-state glass">
              <p>No news articles available at this time. Check back soon for updates.</p>
            </div>
          )}
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
          {publications.length > 0 ? (
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
          ) : (
            <div className="empty-state glass-strong">
              <p>No publications available at this time. Our research outputs will be published here as they become available.</p>
            </div>
          )}
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
