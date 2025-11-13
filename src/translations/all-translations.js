// This file contains comprehensive translations for the entire website
// EN = English, TR = Turkish

export const t = (lang) => {
  const translations = {
    en: {
      // Common
      common: {
        learnMore: 'Learn More',
        contactUs: 'Contact Us',
        readMore: 'Read More',
        viewAll: 'View All',
        getStarted: 'Get Started'
      },
      
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        research: 'Research Areas',
        solutions: 'Solutions',
        partners: 'Partners',
        news: 'News',
        careers: 'Careers',
        contact: 'Contact'
      },
      
      // Footer
      footer: {
        description: 'Pioneering Science & Technology through rigorous, data-driven, multidisciplinary research. Translating innovation into measurable solutions for global challenges.',
        research: 'Research',
        company: 'Company',
        connect: 'Connect',
        aboutUs: 'About Us',
        researchAreas: 'Research Areas',
        solutionsServices: 'Solutions & Services',
        partnersTitle: 'Partners',
        newsPublications: 'News & Publications',
        careersTitle: 'Careers',
        contactUs: 'Contact Us',
        partnershipOpp: 'Partnership Opportunities',
        joinTeam: 'Join Our Team',
        mediaPress: 'Media & Press',
        copyright: '© 2025 Eliyte™ Araştırma Merkezi. All rights reserved.',
        tagline: 'Innovating Tomorrow, Today'
      }
    },
    
    tr: {
      // Common
      common: {
        learnMore: 'Daha Fazla Bilgi',
        contactUs: 'İletişime Geçin',
        readMore: 'Devamını Oku',
        viewAll: 'Tümünü Görüntüle',
        getStarted: 'Başlayın'
      },
      
      // Navigation
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        research: 'Araştırma Alanları',
        solutions: 'Çözümler',
        partners: 'İş Ortakları',
        news: 'Haberler',
        careers: 'Kariyer',
        contact: 'İletişim'
      },
      
      // Footer
      footer: {
        description: 'Titiz, veri odaklı, çok disiplinli araştırmalarla Bilim ve Teknolojide Öncülük. İnovasyonu küresel zorluklar için ölçülebilir çözümlere dönüştürüyoruz.',
        research: 'Araştırma',
        company: 'Kurumsal',
        connect: 'Bağlantı',
        aboutUs: 'Hakkımızda',
        researchAreas: 'Araştırma Alanları',
        solutionsServices: 'Çözümler ve Hizmetler',
        partnersTitle: 'İş Ortakları',
        newsPublications: 'Haberler ve Yayınlar',
        careersTitle: 'Kariyer',
        contactUs: 'İletişim',
        partnershipOpp: 'Ortaklık Fırsatları',
        joinTeam: 'Ekibimize Katılın',
        mediaPress: 'Medya ve Basın',
        copyright: '© 2025 Eliyte™ Araştırma Merkezi. Tüm hakları saklıdır.',
        tagline: 'Yarını Bugün İnovasyon ile Şekillendiriyoruz'
      }
    }
  };
  
  return translations[lang] || translations.en;
};
