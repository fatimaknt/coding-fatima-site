import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target, Heart, Code } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={40} />, number: "500+", label: "Étudiants Formés" },
    { icon: <BookOpen size={40} />, number: "15+", label: "Formations Créées" },
    { icon: <Award size={40} />, number: "98%", label: "Taux de Satisfaction" },
    { icon: <Code size={40} />, number: "5+", label: "Années d'Expérience" }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: "Excellence",
      description: "Je m'engage à fournir des formations de la plus haute qualité avec un contenu à jour et pratique."
    },
    {
      icon: <Heart size={40} />,
      title: "Passion",
      description: "Ma passion pour l'enseignement et le code me pousse à partager mes connaissances avec enthousiasme."
    },
    {
      icon: <Users size={40} />,
      title: "Accompagnement",
      description: "Chaque étudiant est unique. Je m'adapte à votre rythme et vos besoins spécifiques."
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
            <h1>À Propos de Moi</h1>
            <p>
              Passionné de développement web et d'enseignement, je partage mon expertise 
              pour vous aider à réaliser vos rêves de carrière dans la tech.
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
              <h2>Mon Parcours</h2>
              <p>
                Tout a commencé il y a plus de 5 ans quand j'ai découvert ma passion pour le développement web. 
                Après avoir travaillé sur de nombreux projets et collaboré avec des équipes internationales, 
                j'ai réalisé que ma vraie vocation était de partager cette passion avec d'autres.
              </p>
              <p>
                J'ai commencé par former des amis et des collègues, puis j'ai créé ma première formation en ligne. 
                Le succès a été immédiat et j'ai décidé de me consacrer entièrement à l'enseignement du code.
              </p>
              <p>
                Aujourd'hui, j'ai formé plus de 500 étudiants qui travaillent maintenant dans des entreprises 
                de renom ou ont créé leurs propres startups. Chaque succès est une source de motivation pour continuer.
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
                <Code size={80} />
                <p>Votre Formateur</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ma Mission</h2>
            <p>
              Ma mission est de démocratiser l'accès à l'éducation technologique. 
              Je crois que tout le monde peut apprendre à coder, peu importe son âge ou son parcours.
            </p>
            <p>
              Je m'engage à créer des formations accessibles, pratiques et engageantes qui transforment 
              de vrais débutants en développeurs compétents et confiants.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Mes Valeurs</h2>
            <p>Les principes qui guident mon approche pédagogique</p>
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
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-teach">
        <div className="container">
          <motion.div
            className="why-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Pourquoi J'Enseigne ?</h2>
            <p>
              Enseigner le code n'est pas seulement un métier pour moi, c'est une vocation. 
              Voir mes étudiants réussir, obtenir leur premier emploi ou créer leur propre projet 
              me donne une satisfaction inégalée.
            </p>
            <p>
              Je crois au pouvoir transformateur de l'éducation technologique. 
              Chaque personne que j'aide à maîtriser le code contribue à façonner l'avenir numérique.
            </p>
            <p>
              Rejoignez-moi dans cette aventure et transformons ensemble vos rêves en réalité !
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 