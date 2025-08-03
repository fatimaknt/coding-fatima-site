import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, ExternalLink, Star, Filter } from 'lucide-react';
import { actualites } from '../data/actualites';
import './Actualites.css';

const Actualites: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const types = ['Tous', 'meet', 'formation', 'evenement', 'annonce'];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'meet': return 'Meet gratuit';
      case 'formation': return 'Formation';
      case 'evenement': return 'Événement';
      case 'annonce': return 'Annonce';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meet': return '#10B981';
      case 'formation': return '#3B82F6';
      case 'evenement': return '#F59E0B';
      case 'annonce': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const filteredActualites = actualites.filter(actualite => {
    const matchesFilter = filter === 'Tous' || actualite.type === filter;
    const matchesSearch = actualite.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         actualite.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="actualites-page">
      <section className="actualites-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Actualités & Événements</h1>
            <p>
              Restez informés des dernières nouvelles, des meets gratuits, 
              des dates de formations et des événements spéciaux de Coding Fatima.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="actualites-content">
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
                placeholder="Rechercher une actualité..."
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
              {types.map((type) => (
                <button
                  key={type}
                  className={`filter-btn ${filter === type ? 'active' : ''}`}
                  onClick={() => setFilter(type)}
                  style={{
                    '--type-color': getTypeColor(type)
                  } as React.CSSProperties}
                >
                  {type === 'Tous' ? <Filter size={16} /> : null}
                  {getTypeLabel(type)}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="actualites-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredActualites.map((actualite, index) => (
              <motion.div
                key={actualite.id}
                className={`actualite-card ${actualite.urgent ? 'urgent' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="actualite-image">
                  <img src={actualite.image} alt={actualite.titre} />
                  {actualite.gratuit && (
                    <div className="gratuit-badge">
                      <Star size={16} />
                      Gratuit
                    </div>
                  )}
                  {actualite.urgent && (
                    <div className="urgent-badge">
                      Urgent
                    </div>
                  )}
                </div>
                
                <div className="actualite-content">
                  <div className="actualite-header">
                    <span 
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(actualite.type) }}
                    >
                      {getTypeLabel(actualite.type)}
                    </span>
                    <div className="actualite-date">
                      <Calendar size={16} />
                      {actualite.date}
                    </div>
                  </div>
                  
                  <h3>{actualite.titre}</h3>
                  <p>{actualite.description}</p>
                  
                  <div className="actualite-footer">
                    {actualite.lien ? (
                      <a href={actualite.lien} className="btn btn-primary">
                        En savoir plus
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <button className="btn btn-secondary">
                        Contactez-nous
                        <Users size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredActualites.length === 0 && (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Clock size={48} />
              <h3>Aucune actualité trouvée</h3>
              <p>Essayez de modifier vos filtres ou votre recherche.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Restez Informés !</h2>
            <p>
              Recevez nos actualités, annonces de meets gratuits et dates de formations 
              directement dans votre boîte mail.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter-input"
              />
              <button className="btn btn-primary">
                S'abonner
                <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Actualites; 