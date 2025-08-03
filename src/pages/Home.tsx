import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Clock, Award, BookOpen, Palette, Globe } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: "Formations Pratiques",
      description: "Apprenez en pratiquant avec des projets concrets et des exercices interactifs."
    },
    {
      icon: <Users size={40} />,
      title: "Accompagnement Personnalisé",
      description: "Bénéficiez d'un suivi individualisé et d'un support dédié tout au long de votre formation."
    },
    {
      icon: <Clock size={40} />,
      title: "Flexibilité Totale",
      description: "Étudiez à votre rythme avec des cours accessibles 24h/24 et 7j/7."
    },
    {
      icon: <Award size={40} />,
      title: "Certification",
      description: "Obtenez une certification reconnue à la fin de chaque formation."
    }
  ];

  const upcomingServices = [
    {
      icon: <BookOpen size={32} />,
      title: "Supports de cours",
      description: "Matériels pédagogiques complets et ressources d'apprentissage",
      status: "Bientôt disponible"
    },
    {
      icon: <Palette size={32} />,
      title: "Conception d'applications web",
      description: "Services de création de sites web et d'applications sur mesure",
      status: "Bientôt disponible"
    },
    {
      icon: <Globe size={32} />,
      title: "Conception d'applications mobiles",
      description: "Développement d'applications mobiles pour iOS et Android",
      status: "Bientôt disponible"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Formez-vous au développement web et mobile</h1>
            <p>
              Découvrez nos formations spécialisées pour maîtriser les technologies modernes 
              et transformer votre passion en carrière au Sénégal.
            </p>
            <div className="hero-buttons">
              <a href="/formations" className="btn btn-primary">
                Découvrir nos formations
              </a>
              <a href="/contact" className="btn btn-secondary">
                Nous contacter
              </a>
            </div>
          </motion.div>

          <motion.div
            className="code-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="code-block">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <pre>
                  <code>
{`const developer = {
  name: "Vous",
  skills: ["JavaScript", "React"],
  future: "Full Stack Developer"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
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
            <h2>Pourquoi choisir nos formations ?</h2>
            <p>
              Des formations de qualité adaptées aux besoins du marché local
            </p>
          </motion.div>

          <motion.div
            className="features-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
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

      <section className="cta">
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
              Commencez votre voyage dans le développement web et mobile avec 
              une équipe passionnée qui croit en votre potentiel.
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

export default Home; 