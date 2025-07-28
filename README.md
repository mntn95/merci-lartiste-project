# 💈 Merci L'Artiste

> **Site web officiel :** [https://www.merci-lartiste.com/](https://www.merci-lartiste.com/)

Un site web moderne pour un salon de coiffeur barbier, alliant design retro et technologies web actuelles. L'expérience utilisateur est enrichie d'animations fluides et d'un système de prise de rendez-vous intégré.

## 🎯 Concept

**Merci L'Artiste** propose une expérience digitale unique qui capture l'essence des salons de barbier traditionnels :

- **Design authentique d'époque** : Interface inspirée des années 1920-1930 avec typographies vintage et palette de couleurs classique
- **Animations immersives** : Transitions fluides et micro-interactions pour une navigation engageante
- **Prise de rendez-vous simplifiée** : Intégration seamless avec Calendly pour la réservation en ligne
- **Expérience responsive** : Optimisé pour tous les appareils, du mobile au desktop

## ✨ Fonctionnalités

- 🎨 **Interface vintage authentique** avec éléments visuels d'époque
- 🎬 **Animations avancées** powered by Framer Motion
- 📅 **Système de réservation intégré** via react-calendly
- 📱 **Design responsive** adapté à tous les écrans
- ⚡ **Performance optimisée** avec lazy loading et optimisations React
- 🎥 **Contenu multimédia** intégré (images, vidéos)

## 🛠️ Stack Technique

### Frontend

- **React 18** avec TypeScript pour une base solide et typée
- **Framer Motion** pour les animations et transitions
- **Tailwind CSS** + **SASS** pour le styling modulaire
- **Material UI** + **Bootstrap** pour certains composants

### Intégrations

- **react-calendly** - Système de prise de rendez-vous
- **react-scroll** - Navigation fluide entre sections
- **Video.js** - Lecteur vidéo avancé

### Outils de développement

- **TypeScript** - Typage statique
- **ESLint** - Linting et qualité de code
- **Prettier** - Formatage automatique
- **PostCSS** + **Autoprefixer** - Traitement CSS

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

# Utilitaires
yarn eject          # Éjecte la configuration (⚠️ irréversible)
```

## 📁 Structure du Projet

```
src/
├── components/    # Composants React
├── assets/        # Images, icônes, médias
├── hooks/         # Hooks personnalisés
├── types/         # Définitions TypeScript
├── App.tsx        # Composant principal
└── index.tsx      # Point d'entrée de l'application
```

## 🎨 Design et UX

Le projet suit le principe **KISS** (Keep It Simple, Stupid) et les principes **SOLID** pour garantir :

- **Maintenabilité** : Code propre et modulaire
- **Performance** : Optimisations React et lazy loading
- **Accessibilité** : Navigation inclusive et responsive

## 🌐 Déploiement

Le site est actuellement hébergé et accessible à l'adresse :
**[https://www.merci-lartiste.com/](https://www.merci-lartiste.com/)**

## 🔧 Configuration

- **Port de développement** : 3006
- **Proxy backend** : http://localhost:5000
- **Build** : Optimisé pour la production avec React Scripts

## 📄 License

Projet privé - Tous droits réservés.

---

_Développé avec ❤️ pour capturer l'essence authentique de l'art barbier traditionnel dans une expérience web moderne._
