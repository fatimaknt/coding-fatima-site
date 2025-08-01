import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter, Linkedin, Github, Heart } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    formations: [
      { name: "Développement Web Frontend", href: "/formations" },
      { name: "Développement Web Backend", href: "/formations" },
      { name: "Développement Mobile", href: "/formations" },
      { name: "Développement Full Stack", href: "/formations" }
    ]
  };

  const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socialLinks = [
    { 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/codingfatimah", 
      label: "Instagram",
      color: "#E4405F"
    },
    { 
      icon: <Twitter size={20} />, 
      href: "https://twitter.com/codingfatimah", 
      label: "Twitter",
      color: "#1DA1F2"
    },
    { 
      icon: <Linkedin size={20} />, 
      href: "https://linkedin.com/in/codingfatimah", 
      label: "LinkedIn",
      color: "#0077B5"
    },
    { 
      icon: <Github size={20} />, 
      href: "https://github.com/codingfatimah", 
      label: "GitHub",
      color: "#333"
    },
    { 
      icon: <TikTokIcon />, 
      href: "https://tiktok.com/@codingfatimah", 
      label: "TikTok",
      color: "#000000"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <Logo />
              <h3>CodingFatimah</h3>
            </div>
            <p>
              Formations en ligne de qualité pour maîtriser le développement web et mobile. 
              Transformez votre passion en carrière avec nos cours spécialisés au Sénégal.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <span>ccoding845@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+221 77 087 46 19</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Formations Disponibles</h4>
            <ul>
              {footerLinks.formations.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} CodingFatimah. Tous droits réservés. 
                Fait avec <Heart size={16} className="heart-icon" /> au Sénégal.
              </p>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 