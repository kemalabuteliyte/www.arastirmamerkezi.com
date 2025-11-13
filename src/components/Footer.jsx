import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer glass-strong">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text gradient-text">Eliyte™</span>
              <span className="logo-subtitle">Araştırma Merkezi</span>
            </div>
            <p className="footer-description">
              {t.footer.description}
            </p>
            <div className="footer-contact">
              <a href="mailto:arge@eliyte.com" className="contact-email">
                arge@eliyte.com
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{t.footer.research}</h4>
            <ul className="footer-links">
              <li><Link to="/research">{language === 'en' ? 'Digital Workforce & Automation' : 'Dijital İşgücü ve Otomasyon'}</Link></li>
              <li><Link to="/research">{language === 'en' ? 'Artificial Intelligence R&D' : 'Yapay Zeka Ar-Ge'}</Link></li>
              <li><Link to="/research">{language === 'en' ? 'Internet of Things (IoT)' : 'Nesnelerin İnterneti (IoT)'}</Link></li>
              <li><Link to="/research">{language === 'en' ? 'Energy Systems R&D' : 'Enerji Sistemleri Ar-Ge'}</Link></li>
              <li><Link to="/research">{language === 'en' ? 'Finance & Mathematics' : 'Finans ve Matematik'}</Link></li>
              <li><Link to="/research">{language === 'en' ? 'Cybersecurity & Cryptography' : 'Siber Güvenlik ve Kriptografi'}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{t.footer.company}</h4>
            <ul className="footer-links">
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/research">{t.nav.research}</Link></li>
              <li><Link to="/solutions">{t.nav.solutions}</Link></li>
              <li><Link to="/partners">{t.nav.partners}</Link></li>
              <li><Link to="/news">{t.nav.news}</Link></li>
              <li><Link to="/careers">{t.nav.careers}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{t.footer.connect}</h4>
            <ul className="footer-links">
              <li><Link to="/contact">{t.nav.contact}</Link></li>
              <li><Link to="/partners">{language === 'en' ? 'Partnership Opportunities' : 'Ortaklık Fırsatları'}</Link></li>
              <li><Link to="/careers">{language === 'en' ? 'Join Our Team' : 'Ekibimize Katılın'}</Link></li>
              <li><Link to="/news">{language === 'en' ? 'Media & Press' : 'Medya ve Basın'}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              {t.footer.copyright}
            </p>
            <div className="footer-meta">
              <span>{t.footer.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
