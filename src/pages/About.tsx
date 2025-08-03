import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, BookOpen, Palette, Globe } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Users size={32} />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque formation que nous proposons."
    },
    {
      icon: <Target size={32} />,
      title: "Pratique",
      description: "Nos formations sont axées sur la pratique et les projets concrets."
    },
    {
      icon: <Award size={32} />,
      title: "Certification",
      description: "Obtenez une certification à la fin de chaque formation."
    }
  ];

  const upcomingServices = [
    {
      icon: <BookOpen size={32} />,
      title: "Supports de cours",
      description: "Matériels pédagogiques complets et ressources d'apprentissage",
      status: "Prévision 2025"
    },
    {
      icon: <Palette size={32} />,
      title: "Conception d'applications web",
      description: "Services de création de sites web et d'applications sur mesure",
      status: "Prévision 2025"
    },
    {
      icon: <Globe size={32} />,
      title: "Conception d'applications mobiles",
      description: "Développement d'applications mobiles pour iOS et Android",
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
            <h1>À propos de Coding Fatima</h1>
            <p>
              Nous sommes une équipe de développeurs passionnés qui se sont engagés dans la formation 
              pour partager notre expertise et aider les futurs développeurs à réussir.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Notre Histoire</h2>
              <p>
                Coding Fatima est née de la passion pour le développement et l'enseignement. 
                Notre équipe de développeurs expérimentés a décidé de partager son savoir-faire 
                avec les futurs talents du numérique au Sénégal.
              </p>
              <p>
                Nous croyons que la technologie peut transformer des vies et créer des opportunités. 
                C'est pourquoi nous nous engageons à offrir des formations de qualité, accessibles 
                et adaptées aux besoins du marché local.
              </p>
            </motion.div>
            <motion.div
              className="image-placeholder"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="placeholder-content">
                <Users size={64} />
                <h3>Notre Équipe</h3>
                <p>Développeurs passionnés</p>
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
              Former la prochaine génération de développeurs talentueux au Sénégal en offrant 
              des formations pratiques, modernes et accessibles.
            </p>
          </motion.div>

          <motion.div
            className="values-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Nous développons constamment de nouveaux services pour mieux vous accompagner 
              dans votre parcours de développement.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-status">{service.status}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2>Prêt à rejoindre nos formations ?</h2>
            <p>
              Rejoignez notre communauté de développeurs et commencez votre parcours 
              vers une carrière passionnante dans le développement.
            </p>
            <div className="cta-buttons">
              <a href="/formations" className="btn btn-primary">
                Découvrir nos formations
              </a>
              <a href="/contact" className="btn btn-secondary">
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 