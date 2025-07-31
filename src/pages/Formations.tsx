import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, Users, DollarSign } from 'lucide-react';
import { formations } from '../data/formations';
import './Formations.css';

const Formations: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const niveaux = ['Tous', 'Débutant', 'Intermédiaire', 'Avancé'];

  const filteredFormations = formations.filter(formation => {
    const matchesFilter = filter === 'Tous' || formation.niveau === filter;
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
            <h1>Mes Formations</h1>
            <p>
              Découvrez mes formations complètes pour maîtriser le développement web et mobile. 
              Du débutant à l'expert, il y en a pour tous les niveaux !
            </p>
          </motion.div>
        </div>
      </section>

      <section className="formations-content">
        <div className="container">
          <div className="filters">
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
                  <div className="formation-level">{formation.niveau}</div>
                </div>
                
                <div className="formation-content">
                  <h3>{formation.titre}</h3>
                  <p>{formation.description}</p>
                  
                  <div className="formation-details">
                    <div className="detail">
                      <Clock size={16} />
                      <span>{formation.duree}</span>
                    </div>
                    <div className="detail">
                      <Users size={16} />
                      <span>Support inclus</span>
                    </div>
                  </div>

                  <div className="formation-technologies">
                    {formation.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="formation-footer">
                    <div className="price">
                      <span className="currency">FCFA</span>
                      <span className="amount">{formation.prix.toLocaleString()}</span>
                    </div>
                    <a href={formation.lienInscription} className="btn btn-primary">
                      S'inscrire
                      <ArrowRight size={16} />
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
              <p>Aucune formation trouvée pour votre recherche.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Formations; 