export interface Formation {
    id: number;
    titre: string;
    description: string;
    niveau: 'Débutant' | 'Intermédiaire' | 'Avancé';
    duree: string;
    prix: number;
    lienInscription: string;
    technologies: string[];
    image: string;
}

export const formations: Formation[] = [
    {
        id: 1,
        titre: "Développement Web Frontend",
        description: "Maîtrisez HTML, CSS et JavaScript pour créer des sites web modernes et responsives. Apprenez les frameworks populaires comme React.",
        niveau: "Débutant",
        duree: "8 semaines",
        prix: 150000,
        lienInscription: "#",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400"
    },
    {
        id: 2,
        titre: "Développement Web Backend",
        description: "Créez des applications web complètes avec Node.js, Express et bases de données. APIs RESTful et authentification.",
        niveau: "Intermédiaire",
        duree: "10 semaines",
        prix: 180000,
        lienInscription: "#",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400"
    },
    {
        id: 3,
        titre: "Développement Mobile",
        description: "Développez des applications mobiles avec React Native. Créez des apps pour iOS et Android avec un seul code.",
        niveau: "Intermédiaire",
        duree: "12 semaines",
        prix: 200000,
        lienInscription: "#",
        technologies: ["React Native", "JavaScript", "Expo", "APIs"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
    },
    {
        id: 4,
        titre: "Développement Full Stack",
        description: "Formation complète pour devenir développeur full stack. Frontend, backend, base de données et déploiement.",
        niveau: "Avancé",
        duree: "16 semaines",
        prix: 250000,
        lienInscription: "#",
        technologies: ["React", "Node.js", "MongoDB", "Docker"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400"
    },
    {
        id: 5,
        titre: "JavaScript Fondamentaux",
        description: "Initiez-vous à la programmation avec JavaScript. Variables, fonctions, objets et manipulation du DOM.",
        niveau: "Débutant",
        duree: "6 semaines",
        prix: 100000,
        lienInscription: "#",
        technologies: ["JavaScript", "HTML", "CSS", "DOM"],
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400"
    },
    {
        id: 6,
        titre: "React.js Avancé",
        description: "Maîtrisez React avec Hooks, Context API, Redux et les bonnes pratiques. Créez des applications complexes.",
        niveau: "Avancé",
        duree: "10 semaines",
        prix: 180000,
        lienInscription: "#",
        technologies: ["React", "Hooks", "Redux", "TypeScript"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
    }
]; 