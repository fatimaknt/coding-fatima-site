export interface Formation {
  id: number;
  titre: string;
  description: string;
  niveau: string;
  duree: string;
  prix: number;
  lienInscription: string;
  technologies: string[];
  image: string;
  disponible: boolean;
}

export const formations: Formation[] = [
  {
    id: 1,
    titre: "Développement Web Frontend",
    description: "Maîtrisez HTML, CSS, JavaScript et React pour créer des interfaces web modernes et interactives.",
    niveau: "Débutant à Intermédiaire",
    duree: "8 semaines",
    prix: 15000,
    lienInscription: "https://forms.gle/5D5LUAgr1LQ7ywbt5",
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
    disponible: true
  },
  {
    id: 2,
    titre: "Développement Web Backend",
    description: "Apprenez Node.js, Express et les bases de données pour créer des APIs robustes.",
    niveau: "Intermédiaire",
    duree: "10 semaines",
    prix: 15000,
    lienInscription: "https://forms.gle/5D5LUAgr1LQ7ywbt5",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    disponible: true
  },
  {
    id: 3,
    titre: "Développement Mobile",
    description: "Créez des applications mobiles cross-platform avec React Native.",
    niveau: "Intermédiaire",
    duree: "12 semaines",
    prix: 15000,
    lienInscription: "https://forms.gle/5D5LUAgr1LQ7ywbt5",
    technologies: ["React Native", "JavaScript", "Expo", "Mobile UI/UX"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    disponible: true
  },
  {
    id: 4,
    titre: "Développement Full Stack",
    description: "Formation complète pour devenir développeur full stack avec toutes les technologies modernes.",
    niveau: "Avancé",
    duree: "16 semaines",
    prix: 15000,
    lienInscription: "https://forms.gle/5D5LUAgr1LQ7ywbt5",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Docker"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    disponible: true
  }
]; 