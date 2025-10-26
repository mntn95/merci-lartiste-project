# 💈 Merci L'Artiste

> **Site web officiel :** [https://www.merci-lartiste.com/](https://www.merci-lartiste.com/)

Un site web moderne pour un salon de coiffeur barbier, alliant design retro et technologies web actuelles. L'expérience utilisateur est enrichie d'animations fluides et d'un système de prise de rendez-vous intégré.

## 🎯 Concept

**Merci L'Artiste** propose une expérience digitale unique qui capture l'essence des salons de barbier traditionnels :

- **Design authentique d'époque** : Interface inspirée des années 1920-1930 avec typographies vintage et palette de couleurs classique
- **Animations immersives** : Transitions fluides et micro-interactions pour une navigation engageante
- **Prise de rendez-vous simplifiée** : Intégration Calendly pour la réservation en ligne
- **Expérience responsive** : Optimisé pour tous les appareils, du mobile au desktop

## ✨ Fonctionnalités

- 🎨 **Interface vintage authentique** avec éléments visuels d'époque
- 🎬 **Animations avancées** powered by Framer Motion
- 📅 **Système de réservation Calendly** intégré (récupération des événements et affichage personnalisé)
- 📱 **Design responsive** adapté à tous les écrans
- ⚡ **Performance optimisée** avec lazy loading et optimisations React
- 🎥 **Contenu multimédia** intégré (images, vidéos avec Video.js)
- 🧩 **Architecture modulaire** avec composants réutilisables et contexte global

## 🛠️ Stack Technique

### Frontend

- **React 18** avec TypeScript pour une base solide et typée
- **Framer Motion** pour les animations et transitions
- **Tailwind CSS** + **SASS** pour le styling modulaire
- **Material UI** (@mui/icons-material, @mui/material) pour les icônes et composants UI

### Intégrations

- **Calendly API** - Récupération et affichage des événements disponibles
- **Video.js** - Lecteur vidéo avancé avec support mobile/desktop
- **React Bootstrap** - Composants UI Bootstrap
- **React Scroll** - Navigation fluide entre sections
- **Emotion** - CSS-in-JS pour la gestion des styles

### Outils de développement

- **TypeScript** - Typage statique et interfaçage
- **ESLint** - Linting et qualité de code
- **Prettier** - Formatage automatique
- **PostCSS** + **Autoprefixer** - Traitement CSS
- **Jest** + **React Testing Library** - Tests unitaires et d'intégration

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- Yarn (gestionnaire de paquets)

### Installation

```bash
# Cloner le repository
git clone [url-du-repo]
cd merci-lartiste-project

# Installer les dépendances
yarn install

# Lancer le serveur de développement
yarn start
```

Le site sera accessible sur [http://localhost:3006](http://localhost:3006)

### Scripts disponibles

```bash
# Développement
yarn start          # Lance le serveur de dev sur le port 3006

# Production
yarn build          # Génère la version de production dans /build

# Tests
yarn test           # Lance la suite de tests
yarn test:coverage  # Génère un rapport de couverture

# Qualité de code
yarn lint           # Analyse le code avec ESLint
yarn lint:fix       # Corrige automatiquement les erreurs
yarn format          # Formate le code avec Prettier
```

## 📁 Structure du Projet

```
src/
├── components/         # Composants React métier
│   ├── Header/       # En-tête avec navigation
│   ├── Footer/       # Pied de page avec mentions légales
│   ├── Main/         # Sections principales
│   │   ├── Video/   # Lecteur vidéo
│   │   ├── Appointment/ # Section rendez-vous
│   │   └── Services/ # Liste des services Calendly
│   ├── ErrorBoundary/ # Gestion des erreurs
│   └── Layout/        # Composant de mise en page
│
├── base-components/   # Composants réutilisables
│   ├── DataStateDisplay/ # États de données (loading, error, empty)
│   ├── Modal/        # Modales réutilisables
│   └── ui/           # Composants UI de base (Button, GlassCard, Heading)
│
├── contexts/          # Contexte React global
│   ├── AppContext/   # État global de l'application
│   └── hooks/        # Hooks personnalisés (useNavigation, useModal)
│
├── services/          # Services API
│   └── calendly-api/ # Intégration Calendly
│
├── labels/            # Labels et textes centralisés
│   ├── header.ts
│   ├── footer.ts
│   ├── services.ts
│   ├── appointment.ts
│   ├── video.ts
│   └── modal.ts
│
├── constants/         # Constantes de configuration
│   ├── animations.ts # Délais et durées d'animation
│   └── config.ts     # Configuration générale
│
├── hooks/             # Hooks React personnalisés
├── types/             # Définitions TypeScript
├── utils/             # Fonctions utilitaires
├── assets/            # Images, icônes, médias
├── styles/            # Fichiers SASS globaux
├── App.tsx            # Composant principal
└── index.tsx          # Point d'entrée de l'application
```

## 🎨 Architecture

### Principes de conception

- **Modularité** : Composants séparés par responsabilité
- **Réutilisabilité** : Composants base-components pour les patterns communs
- **Séparation des concerns** : Labels, constantes, services séparés
- **Type Safety** : TypeScript strict avec interfaces dédiées
- **Performance** : Lazy loading, React.memo, optimisations

### État global

- **AppContext** : Gestion de l'état application (modal, navigation, données)
- **Hooks custom** : useModal, useNavigation, useLoading pour simplifier l'utilisation

### Composants de base

- **Button** : Bouton stylisé avec variants (outline, filled, ghost)
- **GlassCard** : Carte avec effet glass morphism
- **Heading** : Titres avec variantes (size, fontFamily, fontWeight)
- **DataStateDisplay** : États de chargement, erreur et vide

## 🧪 Tests

Le projet inclut une suite de tests avec Jest et React Testing Library :

```bash
yarn test              # Lance les tests en mode watch
yarn test:coverage    # Génère un rapport de couverture
yarn test:watch        # Mode watch pour développement
```

Couverture cible : **80%** (branches, fonctions, lignes, statements)

## 🎨 Design et UX

Le projet suit les principes **KISS** (Keep It Simple, Stupid) et **SOLID** pour garantir :

- **Maintenabilité** : Code propre, modulaire et documenté
- **Performance** : Optimisations React (memo, lazy loading, code splitting)
- **Accessibilité** : Navigation inclusive, gestion du focus, error boundaries
- **Expérience utilisateur** : Animations fluides, transitions cohérentes, feedback visuel

## 🌐 Déploiement

Le site est hébergé et accessible à l'adresse :
**[https://www.merci-lartiste.com/](https://www.merci-lartiste.com/)**

Le build de production est optimisé pour une taille minimale et des performances maximales.

## 📊 Configuration

- **Port de développement** : 3006
- **Build** : Optimisé pour la production avec React Scripts
- **Environnements** : Development, Production (avec source maps)
- **Code splitting** : Automatique avec React.lazy()

## 📄 License

Projet privé - Tous droits réservés.

---

_Développé avec ❤️ pour capturer l'essence authentique de l'art barbier traditionnel dans une expérience web moderne._
