import './Research.css';

const Research = () => {
  const researchAreas = [
    {
      id: 1,
      icon: '🤖',
      title: 'Digital Workforce & Automation',
      description: 'Intelligent automation systems, robotic process automation, and AI-assisted workflows.',
      details: [
        'Cognitive systems that optimize operations while reducing human error',
        'Measurable performance: efficiency gains, error reduction rates, ROI on automation',
        'Integration of AI and machine learning for intelligent decision-making',
        'Scalable automation frameworks for enterprise-level deployment'
      ]
    },
    {
      id: 2,
      icon: '🧠',
      title: 'Artificial Intelligence (AI) R&D',
      description: 'Deep learning, reinforcement learning, NLP, computer vision.',
      details: [
        'AI safety, ethics, and bias mitigation research',
        'Applied AI for predictive modeling, pattern recognition, and decision support systems',
        'Natural language processing for multilingual communication and understanding',
        'Computer vision applications in healthcare, manufacturing, and security',
        'Explainable AI (XAI) for transparent and accountable AI systems'
      ]
    },
    {
      id: 3,
      icon: '📡',
      title: 'Internet of Things (IoT) R&D',
      description: 'Smart devices, edge computing, and interconnected sensor networks.',
      details: [
        'Predictive maintenance systems and real-time analytics',
        'IoT-enabled solutions for energy, manufacturing, and urban infrastructure',
        'Edge computing architectures for low-latency data processing',
        'Secure IoT protocols and device authentication mechanisms',
        'Integration of IoT with AI for intelligent automation'
      ]
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Energy R&D',
      description: 'Renewable energy systems: solar, wind, hydro, and hybrid solutions.',
      details: [
        'Advanced energy storage (batteries, supercapacitors) and grid optimization',
        'Energy efficiency modeling and lifecycle carbon footprint assessment',
        'Smart grid technologies and distributed energy management',
        'Integration of renewable sources with existing infrastructure',
        'Energy forecasting and demand response systems'
      ]
    },
    {
      id: 5,
      icon: '📊',
      title: 'Finance & Mathematics R&D',
      description: 'Quantitative finance, risk analytics, financial modeling.',
      details: [
        'Mathematical optimization, stochastic processes, and algorithmic solutions',
        'AI-assisted financial forecasting and portfolio management',
        'Risk assessment models and stress testing frameworks',
        'High-frequency trading algorithms and market microstructure analysis',
        'Blockchain applications in financial services and digital currencies'
      ]
    },
    {
      id: 6,
      icon: '🔒',
      title: 'Cybersecurity & Cryptography',
      description: 'Advanced threat detection and intrusion prevention.',
      details: [
        'Blockchain research, distributed ledger technologies',
        'Security for IoT, AI, and digital infrastructures',
        'Post-quantum cryptography and quantum-resistant algorithms',
        'Zero-trust security architectures and identity management',
        'AI-powered threat intelligence and anomaly detection'
      ]
    },
    {
      id: 7,
      icon: '🦾',
      title: 'Advanced Robotics & Mechatronics',
      description: 'Autonomous systems, collaborative robots, and intelligent control systems.',
      details: [
        'Robotics for manufacturing, healthcare, and hazardous environments',
        'Human-robot interaction optimization using AI and sensor data',
        'Autonomous navigation and path planning algorithms',
        'Soft robotics and bio-inspired mechanical systems',
        'Swarm robotics and multi-agent coordination'
      ]
    },
    {
      id: 8,
      icon: '📈',
      title: 'Data Science & Big Data Analytics',
      description: 'Large-scale data ingestion, processing, and predictive modeling.',
      details: [
        'Decision support systems and operational intelligence',
        'AI-driven analytics for finance, energy, and smart systems',
        'Real-time data processing and streaming analytics',
        'Data visualization and interactive dashboards',
        'Machine learning pipelines for automated insights'
      ]
    },
    {
      id: 9,
      icon: '🧬',
      title: 'Cognitive & Human Sciences R&D',
      description: 'Neuroinformatics, cognitive modeling, and human-computer interaction.',
      details: [
        'Behavioral analytics for optimized workforce and education solutions',
        'Data-driven insights into learning, decision-making, and human performance',
        'Cognitive load assessment and optimization',
        'Brain-computer interfaces and neural signal processing',
        'Adaptive learning systems and personalized education'
      ]
    },
    {
      id: 10,
      icon: '🎨',
      title: 'Color Science R&D',
      description: 'Advanced color modeling, perception, and measurement systems.',
      details: [
        'Applied research in digital displays, imaging, lighting, and material coloration',
        'AI-assisted color optimization for industrial design, digital media, and visual analytics',
        'Color matching and reproduction across different media',
        'Spectral imaging and multispectral analysis',
        'Color perception studies and psychophysics'
      ]
    }
  ];

  return (
    <div className="research">
      <section className="research-hero">
        <div className="container">
          <div className="research-hero-content fade-in-up">
            <h1 className="gradient-text">Research Areas</h1>
            <p className="research-hero-subtitle">
              Advancing knowledge across 12+ multidisciplinary domains through rigorous,
              data-driven research and innovative methodologies
            </p>
          </div>
        </div>
      </section>

      <section className="research-content">
        <div className="container">
          <div className="research-areas-grid">
            {researchAreas.map((area) => (
              <div key={area.id} className="research-area-card glass card">
                <div className="research-area-header">
                  <div className="research-area-icon">{area.icon}</div>
                  <h2 className="research-area-title">{area.title}</h2>
                </div>
                <p className="research-area-description">{area.description}</p>
                <ul className="research-area-details">
                  {area.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="research-commitment">
        <div className="container">
          <div className="commitment-content glass-strong">
            <h2>Our Research Commitment</h2>
            <div className="commitment-grid">
              <div className="commitment-item">
                <h3>Reproducible Methodologies</h3>
                <p>
                  Every research project follows peer-reviewed methodologies with clear documentation,
                  ensuring results can be independently verified and built upon by the scientific community.
                </p>
              </div>
              <div className="commitment-item">
                <h3>Measurable Outcomes</h3>
                <p>
                  We establish quantifiable success metrics for all research initiatives, tracking
                  efficiency gains, error reduction, performance improvements, and real-world impact.
                </p>
              </div>
              <div className="commitment-item">
                <h3>Cross-Disciplinary Innovation</h3>
                <p>
                  Our research teams collaborate across domains, combining expertise in AI, mathematics,
                  engineering, and sciences to solve complex problems from multiple perspectives.
                </p>
              </div>
              <div className="commitment-item">
                <h3>Practical Applications</h3>
                <p>
                  We bridge the gap between theoretical research and practical implementation,
                  ensuring our findings translate into actionable solutions for industry and society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
