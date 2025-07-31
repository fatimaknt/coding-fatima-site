import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ nom: '', email: '', sujet: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ccoding845@gmail.com",
      link: "mailto:ccoding845@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "+221 77 087 46 19",
      link: "tel:+221770874619"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "WhatsApp Business",
      link: "https://wa.me/221770874619"
    }
  ];

  const TikTokIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socialLinks = [
    { 
      icon: <Instagram size={24} />, 
      name: "Instagram", 
      url: "https://instagram.com/codingfatimah",
      color: "#E4405F"
    },
    { 
      icon: <Twitter size={24} />, 
      name: "Twitter", 
      url: "https://twitter.com/codingfatimah",
      color: "#1DA1F2"
    },
    { 
      icon: <Linkedin size={24} />, 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/codingfatimah",
      color: "#0077B5"
    },
    { 
      icon: <Github size={24} />, 
      name: "GitHub", 
      url: "https://github.com/codingfatimah",
      color: "#333"
    },
    { 
      icon: <TikTokIcon />, 
      name: "TikTok", 
      url: "https://tiktok.com/@codingfatimah",
      color: "#000000"
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contactez-Moi</h1>
            <p>
              Prêt à commencer votre voyage dans le développement web et mobile ? 
              Contactez-moi pour discuter de vos objectifs et de la formation qui vous convient le mieux.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-content">
                <h2>Informations de Contact</h2>
                <p>
                  Je suis disponible pour répondre à toutes vos questions sur mes formations. 
                  N'hésitez pas à me contacter par le moyen qui vous convient le mieux.
                </p>

                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-method"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="method-icon">{info.icon}</div>
                      <div className="method-content">
                        <h3>{info.title}</h3>
                        <p>{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="social-links">
                <div className="social-grid">
                  <h3>Suivez-moi sur les réseaux sociaux</h3>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ 
                        '--social-color': social.color
                      } as React.CSSProperties}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="social-icon">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Envoyez-moi un Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nom">Nom complet *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sujet">Sujet *</label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="formation">Demande d'information sur une formation</option>
                    <option value="tarifs">Demande de tarifs</option>
                    <option value="personnalisee">Formation personnalisée</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou vos questions..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 