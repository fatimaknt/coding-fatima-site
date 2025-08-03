import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ExternalLink } from 'lucide-react';
import { formations } from '../data/formations';
import './Formations.css';

const Formations: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const niveaux = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];

  const filteredFormations = formations.filter(formation => {
    const matchesFilter = filter === 'Tous' || formation.niveau.includes(filter);
    const matchesSearch = formation.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="formations-page">
      <section className="formations-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Nos Formations</h1>
            <p>
              Découvrez nos formations spécialisées en développement web et mobile.
              Des parcours complets pour maîtriser les technologies modernes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="formations-content">
        <div className="container">
          <div className="filters-section">
            <motion.div
              className="search-box"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="filter-buttons"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {niveaux.map((niveau) => (
                <button
                  key={niveau}
                  className={`filter-btn ${filter === niveau ? 'active' : ''}`}
                  onClick={() => setFilter(niveau)}
                >
                  {niveau}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="formations-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredFormations.map((formation, index) => (
              <motion.div
                key={formation.id}
                className="formation-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="formation-image">
                  <img src={formation.image} alt={formation.titre} />
                </div>

                <div className="formation-content">
                  <div className="formation-header">
                    <h3 className="formation-title">{formation.titre}</h3>
                    <span className="formation-level">{formation.niveau}</span>
                  </div>

                  <p className="formation-description">{formation.description}</p>

                  <div className="formation-details">
                    <div className="formation-duration">
                      <Clock size={16} />
                      {formation.duree}
                    </div>
                    <div className="formation-price">
                      {formation.prix.toLocaleString()} FCFA
                    </div>
                  </div>

                  <div className="formation-technologies">
                    {formation.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="formation-actions">
                    <a
                      href={formation.lienInscription}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-inscription"
                    >
                      <Calendar size={16} />
                      S'inscrire
                    </a>
                    <a href="/contact" className="btn-details">
                      <ExternalLink size={16} />
                      plus d'infos
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredFormations.length === 0 && (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Clock size={48} />
              <h3>Aucune formation trouvée</h3>
              <p>Essayez de modifier vos filtres ou votre recherche.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Formations; 