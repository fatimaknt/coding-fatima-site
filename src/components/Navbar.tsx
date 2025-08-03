import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <Logo />
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Accueil
          </Link>
          <Link to="/formations" className="nav-link" onClick={closeMenu}>
            Formations
          </Link>
          <Link to="/actualites" className="nav-link" onClick={closeMenu}>
            Actualités
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            À propos
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 