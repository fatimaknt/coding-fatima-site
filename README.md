# CodingFatimah - Site Vitrine

Un site vitrine moderne et responsive pour présenter des formations en développement web et mobile au Sénégal.

## 🚀 Fonctionnalités

- **Page d'accueil** - Présentation attractive avec animations
- **Page Formations** - Catalogue des formations avec filtres et recherche
- **Page À propos** - Parcours, mission et valeurs
- **Page Contact** - Formulaire de contact et liens sociaux
- **Design responsive** - Optimisé pour tous les appareils
- **Animations fluides** - Utilisation de Framer Motion
- **Navigation moderne** - Menu hamburger pour mobile

## 🛠️ Technologies Utilisées

- **React 18** - Framework principal
- **TypeScript** - Typage statique
- **React Router** - Navigation entre pages
- **Framer Motion** - Animations
- **Lucide React** - Icônes modernes
- **CSS3** - Styles personnalisés avec gradients et effets

## 📦 Installation

1. Clonez le repository :
```bash
git clone <url-du-repo>
cd site-vitrine
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur de développement :
```bash
npm start
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.tsx      # Navigation principale
│   └── Footer.tsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── Formations.tsx  # Catalogue des formations
│   ├── About.tsx       # Page À propos
│   └── Contact.tsx     # Page de contact
├── data/               # Données statiques
│   └── formations.ts   # Données des formations
└── App.tsx             # Composant principal
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans les fichiers CSS :
- Primaire : `#667eea` (bleu-violet)
- Secondaire : `#764ba2` (violet)
- Gradient : `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Formations
Modifiez le fichier `src/data/formations.ts` pour ajouter ou modifier les formations :
- Développement Web Frontend
- Développement Web Backend
- Développement Mobile
- Développement Full Stack
- JavaScript Fondamentaux
- React.js Avancé

### Contact
Mettez à jour les informations de contact dans `src/pages/Contact.tsx` :
- Email : ccoding845@gmail.com
- Téléphone : +221 77 087 46 19
- WhatsApp : +221 77 087 46 19

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur Netlify
1. Connectez votre repository GitHub à Netlify
2. Configurez la commande de build : `npm run build`
3. Définissez le dossier de publication : `build`

### Déploiement sur Vercel
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement React et configurera le déploiement

## 📄 Scripts Disponibles

- `npm start` - Démarre le serveur de développement
- `npm run build` - Crée une version de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration (irréversible)

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📞 Support

Pour toute question ou support :
- Email : ccoding845@gmail.com
- WhatsApp : +221 77 087 46 19
- Localisation : Sénégal

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**CodingFatimah** - Transformez votre passion en carrière au Sénégal ! 🚀
