import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, BookOpen, Code, Globe, Zap } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Users size={40} />,
      title: "Passion pour l'enseignement",
      description: "Nous partageons notre passion du code avec enthousiasme et patience."
    },
    {
      icon: <Target size={40} />,
      title: "Excellence pédagogique",
      description: "Nos formations sont conçues pour garantir votre réussite professionnelle."
    },
    {
      icon: <Heart size={40} />,
      title: "Accompagnement personnalisé",
      description: "Chaque étudiant bénéficie d'un suivi individualisé et d'un support dédié."
    },
    {
      icon: <Award size={40} />,
      title: "Certification reconnue",
      description: "Obtenez des certificats valorisés par l'industrie tech."
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
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>À Propos de Coding Fatima</h1>
            <p>
              Une équipe de développeurs passionnés engagés dans la formation et l'épanouissement
              de la communauté tech au Sénégal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Notre Histoire</h2>
              <p>
                Coding Fatima est née de la passion d'une équipe de développeurs sénégalais
                qui ont fait le constat que l'accès à une formation de qualité en développement
                web et mobile était limité dans notre pays.
              </p>
              <p>
                Nous nous sommes engagés à démocratiser l'apprentissage du code en proposant
                des formations accessibles, pratiques et adaptées au marché local. Notre mission
                est de former la prochaine génération de développeurs talentueux au Sénégal.
              </p>
              <p>
                Avec des années d'expérience dans l'industrie tech et une passion inébranlable
                pour l'enseignement, nous créons des parcours d'apprentissage qui transforment
                les débutants en développeurs professionnels.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <Users size={80} />
                <p>Notre équipe</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <motion.div
            className="mission-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Notre Mission</h2>
            <p>
              Former et accompagner les futurs développeurs du Sénégal avec des formations
              de qualité, accessibles et adaptées aux réalités du marché local.
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="upcoming-services">
        <div className="container">
          <motion.div
            className="services-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Services à Venir</h2>
            <p>
              Découvrez les nouveaux services que nous préparons pour enrichir
              notre offre et mieux vous accompagner.
            </p>
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

      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Prêt à Rejoindre Notre Équipe ?</h2>
            <p>
              Commencez votre voyage dans le développement web et mobile avec
              une équipe passionnée qui croit en votre potentiel.
            </p>
            <div className="cta-buttons">
              <a href="/formations" className="btn btn-primary">
                Découvrir nos Formations
              </a>
              <a href="/contact" className="btn btn-secondary">
                Nous Contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 