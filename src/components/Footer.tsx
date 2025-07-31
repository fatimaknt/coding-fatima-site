import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, Heart } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    formations: [
      { name: "Développement Web", href: "/formations" },
      { name: "Développement Mobile", href: "/formations" },
      { name: "Full Stack", href: "/formations" },
      { name: "JavaScript", href: "/formations" }
    ],
    ressources: [
      { name: "Blog", href: "#" },
      { name: "Tutoriels", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "/contact" }
    ],
    legal: [
      { name: "Mentions légales", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "Conditions d'utilisation", href: "#" },
      { name: "CGV", href: "#" }
    ]
  };

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
      icon: <div className="tiktok-icon">TikTok</div>, 
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
                <Mail size={16} />
                <span>ccoding845@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
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
            <h4>Formations</h4>
            <ul>
              {footerLinks.formations.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Ressources</h4>
            <ul>
              {footerLinks.ressources.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Légal</h4>
            <ul>
              {footerLinks.legal.map((link, index) => (
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
                  whileHover={{ scale: 1.2, y: -2 }}
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