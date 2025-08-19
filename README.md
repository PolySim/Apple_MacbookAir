# 🍎 Clone de la page MacBook Air d'Apple

Une reproduction fidèle de la page de présentation officielle du MacBook Air d'Apple, développée entièrement from scratch avec des animations personnalisées sans utiliser de bibliothèques d'animation externes.

🌐 **[Voir la démonstration en direct](https://polysim.github.io/Apple_MacbookAir/)**

![MacBook Air Clone](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC) ![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF)

## 🌟 Caractéristiques

- **🎨 Design pixel-perfect** : Reproduction fidèle du design original d'Apple
- **⚡ Animations fluides** : Animations personnalisées développées sans bibliothèques externes
- **📱 Responsive Design** : Optimisé pour tous les appareils (desktop, tablet, mobile)
- **🚀 Performance optimisée** : Utilisation de Vite pour un build ultra-rapide
- **🎯 TypeScript** : Code entièrement typé pour une meilleure maintenabilité
- **🎭 Animations sur mesure** : Utilisation des API natives du navigateur (Intersection Observer, CSS Transitions)

## 🛠️ Technologies utilisées

### Frontend

- **React 18.2.0** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript 5.0.2** - Typage statique pour JavaScript
- **Tailwind CSS 4.1.12** - Framework CSS utilitaire pour le styling
- **Styled Components 5.3.5** - CSS-in-JS pour les composants stylisés

### Build & Tooling

- **Vite 7.1.3** - Build tool moderne et rapide
- **ESLint** - Linter pour maintenir la qualité du code
- **pnpm** - Gestionnaire de paquets performant

### State Management & Hooks

- **Zustand 5.0.7** - Gestionnaire d'état léger et simple
- **Hooks personnalisés** - `useVisible` pour la détection de visibilité des éléments

### Animations natives

- **Intersection Observer API** - Détection de l'entrée des éléments dans le viewport
- **CSS Transitions & Transforms** - Animations fluides et performantes
- **Scroll-based animations** - Animations déclenchées par le scroll

## 🏗️ Architecture du projet

```
src/
├── app/                    # Composant principal de l'application
├── component/
│   ├── header/            # Composants de l'en-tête (menu, titre, réductions)
│   ├── home/              # Composants de la page d'accueil
│   │   ├── color.tsx      # Section des couleurs disponibles
│   │   ├── design.tsx     # Section design et esthétique
│   │   ├── performance.tsx # Section performance
│   │   ├── video.tsx      # Composant vidéo
│   │   └── ...           # Autres sections
│   └── phoneMode/         # Composants pour le mode mobile
├── hook/
│   └── useVisible.ts      # Hook pour la détection de visibilité
├── lib/                   # Utilitaires et helpers
├── store/                 # Gestion d'état avec Zustand
└── types.ts              # Définitions TypeScript
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 16+)
- pnpm (recommandé) ou npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/polysim/Apple_MacbookAir.git
cd Apple_MacbookAir

# Installer les dépendances
pnpm install
```

### Développement

```bash
# Lancer le serveur de développement
pnpm dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production

```bash
# Construire pour la production
pnpm build

# Prévisualiser le build
pnpm preview
```

### Déploiement

```bash
# Déployer sur GitHub Pages
pnpm deploy
```

## 🎯 Fonctionnalités techniques

### Animations personnalisées

- **Parallax scrolling** : Effets de profondeur lors du défilement
- **Fade-in animations** : Apparition progressive des éléments
- **Scale & transform effects** : Animations de zoom et de transformation
- **Sticky positioning** : Éléments qui restent en place lors du scroll

### Optimisations

- **Lazy loading** : Chargement différé des images et composants
- **Intersection Observer** : Détection efficace de la visibilité des éléments
- **Responsive design** : Adaptation fluide à toutes les tailles d'écran
- **Performance monitoring** : Suivi de la position de scroll et de la taille de fenêtre

### State Management

- **Zustand store** : Gestion centralisée de l'état de l'application
- **Window state** : Suivi de la position de scroll et des dimensions
- **Component state** : État local pour les interactions utilisateur

## 📱 Responsive Design

Le projet est optimisé pour :

- **Desktop** : Expérience complète avec toutes les animations
- **Tablet** : Adaptation des layouts et interactions tactiles
- **Mobile** : Interface simplifiée avec mode téléphone dédié

## 🔧 Scripts disponibles

- `pnpm dev` - Lance le serveur de développement
- `pnpm build` - Construit l'application pour la production
- `pnpm preview` - Prévisualise le build de production
- `pnpm lint` - Vérifie la qualité du code avec ESLint
- `pnpm deploy` - Déploie sur GitHub Pages

## 🎨 Défis techniques relevés

1. **Animations sans bibliothèques** : Développement d'animations fluides en utilisant uniquement les API natives
2. **Performance optimale** : Maintien de 60fps même avec des animations complexes
3. **Fidélité au design** : Reproduction exacte des animations et transitions d'Apple

## 🌐 Démonstration

[Voir la démonstration en direct](https://polysim.github.io/Apple_MacbookAir)

## 📄 Licence

Ce projet est à des fins éducatives et de démonstration. Tous les droits sur le design original appartiennent à Apple Inc.

---

**Développé avec ❤️ en utilisant uniquement des technologies modernes et des animations natives**
