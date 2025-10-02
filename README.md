# 🚀 Wheater-devops - Landing Page d'Exploration Spatiale

Une landing page moderne et interactive sur le thème de l'exploration spatiale, conçue avec React et Tailwind CSS.

## 📋 Description

Wheater-devops est un projet de démonstration simple créé à des fins pédagogiques pour illustrer le déploiement d'applications web conteneurisées. Cette landing page immersive présente des animations fluides, des effets parallaxe et un design moderne qui suit les dernières tendances du web.

## 🎯 Objectif Pédagogique

Ce projet est spécifiquement conçu pour être déployé via :
- **K3S** (Kubernetes léger)
- **Docker Swarm**

Il sert d'exemple pratique pour l'apprentissage des concepts DevOps tels que la conteneurisation, l'orchestration de conteneurs et le déploiement d'applications web.

## ✨ Fonctionnalités

- Interface responsive et mobile-first
- Animations et transitions fluides
- Effets parallaxe interactifs
- Fond étoilé animé
- Navigation dynamique avec scroll
- Design moderne avec dégradés vibrants
- Optimisé pour les performances

## 🛠️ Technologies Utilisées

- **React** - Framework JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Bibliothèque d'icônes
- **Vite** - Build tool moderne

## 🚀 Installation et Lancement Local

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm run build
```

## 🐳 Déploiement avec Docker

### Construction de l'image

```bash
docker build -t novastar-landing .
```

### Lancement du conteneur

```bash
docker run -p 80:80 novastar-landing
```

## ☸️ Déploiement avec K3S

```bash
# Appliquer le déploiement
kubectl apply -f k8s/deployment.yaml

# Vérifier le statut
kubectl get pods
kubectl get services
```

## 🐝 Déploiement avec Docker Swarm

```bash
# Initialiser le swarm
docker swarm init

# Déployer la stack
docker stack deploy -c docker-compose.yml novastar

# Vérifier les services
docker service ls
```

## 📁 Structure du Projet

```
novastar-landing/
├── src/
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
├── public/              # Assets statiques
├── package.json         # Dépendances npm
└── README.md           # Documentation
```

## 🎨 Personnalisation

Le projet utilise Tailwind CSS, permettant une personnalisation facile des couleurs, espacements et styles. Modifiez simplement les classes utility dans les composants.

## 📝 Licence

Ce projet est libre d'utilisation à des fins pédagogiques et de démonstration.

## 🤝 Contribution

Les contributions sont les bienvenues pour améliorer cet exemple pédagogique !

---

**Note** : Ce projet est intentionnellement simple pour faciliter la compréhension des concepts de déploiement containerisé. Il est destiné à des fins d'apprentissage et de démonstration.