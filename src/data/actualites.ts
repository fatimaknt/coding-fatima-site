export interface Actualite {
  id: number;
  titre: string;
  description: string;
  date: string;
  type: 'meet' | 'formation' | 'annonce' | 'evenement';
  image: string;
  lien?: string;
  gratuit?: boolean;
  urgent?: boolean;
}

export const actualites: Actualite[] = [
  {
    id: 1,
    titre: "Formation en ligne : Développement Web Frontend",
    description: "Début de notre formation en ligne en développement web frontend. Apprenez HTML, CSS, JavaScript et React depuis chez vous !",
    date: "20 Août 2025",
    type: "formation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
    lien: "/formations",
    urgent: true
  },
  {
    id: 2,
    titre: "Meet gratuit : Introduction au développement web",
    description: "Rejoignez-nous pour un meet gratuit sur les bases du développement web. Découvrez HTML, CSS et JavaScript en 2 heures !",
    date: "15 Février 2025",
    type: "meet",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
    gratuit: true,
    urgent: true
  },
  {
    id: 3,
    titre: "Nouvelle session : Développement Frontend",
    description: "Début de la nouvelle session de formation en développement web frontend. Places limitées à 15 participants.",
    date: "1 Mars 2025",
    type: "formation",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
    lien: "/formations"
  },
  {
    id: 4,
    titre: "Meet gratuit : React.js pour débutants",
    description: "Apprenez les bases de React.js en 2 heures. Créez votre première application React avec nous !",
    date: "22 Février 2025",
    type: "meet",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    gratuit: true
  },
  {
    id: 5,
    titre: "Nouveau : Formation Mobile avec React Native",
    description: "Lancement de notre nouvelle formation en développement mobile. Créez des apps iOS et Android !",
    date: "10 Mars 2025",
    type: "formation",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    lien: "/formations"
  },
  {
    id: 6,
    titre: "Événement : Hackathon Coding Fatima",
    description: "Premier hackathon organisé par Coding Fatima. 24h de code, de créativité et de networking !",
    date: "5 Avril 2025",
    type: "evenement",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
    gratuit: true
  },
  {
    id: 7,
    titre: "Meet gratuit : Développement Backend",
    description: "Découvrez Node.js, Express et les bases de données. Créez votre première API REST !",
    date: "8 Mars 2025",
    type: "meet",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    gratuit: true
  }
]; 