import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Award, Clock, BookOpen, Globe, Zap } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: "Cours Pratiques",
      description: "Apprenez en pratiquant avec des projets réels"
    },
    {
      icon: <Users size={40} />,
      title: "Support Personnalisé",
      description: "Accompagnement individuel et suivi personnalisé"
    },
    {
      icon: <Award size={40} />,
      title: "Certification",
      description: "Obtenez un certificat reconnu à la fin de chaque formation"
    },
    {
      icon: <Clock size={40} />,
      title: "Flexibilité",
      description: "Apprenez à votre rythme, quand vous voulez"
    }
  ];

  const upcomingServices = [
    {
      icon: <BookOpen size={40} />,
      title: "Supports de cours",
      description: "Bientôt disponible : Des supports de cours complets et détaillés pour chaque formation.",
      status: "En préparation"
    },
    {
      icon: <Code size={40} />,
      title: "Conception de sites web",
      description: "Service de création de sites web professionnels sur mesure pour entreprises et particuliers.",
      status: "Bientôt disponible"
    },
    {
      icon: <Globe size={40} />,
      title: "Applications web",
      description: "Développement d'applications web complètes et modernes pour votre business.",
      status: "En développement"
    },
    {
      icon: <Zap size={40} />,
      title: "Formations en entreprise",
      description: "Formations sur mesure pour équipes et entreprises au Sénégal.",
      status: "Prévision 2025"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Devenez un <span className="highlight">Développeur Expert</span>
              </h1>
              <p>
                Formations en ligne de qualité pour maîtriser le développement web et mobile.
                JavaScript, React, React Native et plus encore.
                Transformez votre passion en carrière !
              </p>
              <div className="hero-buttons">
                <Link to="/formations" className="btn btn-primary">
                  Découvrir les Formations
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Me Contacter
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="code-animation">
                <div className="code-line">const student = {`{`}</div>
                <div className="code-line">  name: "Vous",</div>
                <div className="code-line">  goal: "Apprendre le code",</div>
                <div className="code-line">  result: "Carrière en tech"</div>
                <div className="code-line">{`}`}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Pourquoi Choisir Mes Formations ?</h2>
            <p>Une approche unique pour un apprentissage efficace</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="upcoming-services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Services à Venir</h2>
            <p>Découvrez les nouveaux services que nous préparons pour enrichir notre offre</p>
          </motion.div>

          <div className="services-grid">
            {upcomingServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-status">{service.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Prêt à Transformer Votre Avenir ?</h2>
            <p>
              Rejoignez des centaines d'étudiants qui ont déjà transformé leur carrière
              grâce à nos formations. Le moment est venu de commencer votre voyage !
            </p>
            <Link to="/contact" className="btn btn-primary">
              Commencer Maintenant
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 