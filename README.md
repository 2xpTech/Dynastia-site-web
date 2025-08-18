# Dynastia - AI Startup Accelerator

Site web pour Dynastia, un accélérateur de startups basé au Québec spécialisé dans l'accompagnement et la croissance des entreprises innovantes.

## 🚀 Aperçu

Dynastia est une plateforme d'accélération qui aide les startups à multiplier leurs revenus grâce à un accompagnement personnalisé, des programmes de financement et un réseau d'experts.

## 🛠️ Technologies

- **Astro** - Framework de site statique
- **Tailwind CSS** - Stylisation utility-first
- **TypeScript** - Typage statique
- **JavaScript** - Interactivité

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/joshveill/Dynastia.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🧞 Commandes

| Commande | Action |
|----------|--------|
| `npm install` | Installer les dépendances |
| `npm run dev` | Démarrer le serveur local à `localhost:4321` |
| `npm run build` | Construire le site pour production dans `./dist/` |
| `npm run preview` | Prévisualiser le build localement |

## 📁 Structure du Projet

```
/
├── public/          # Assets statiques
├── src/
│   ├── components/  # Composants Astro
│   ├── layouts/     # Layouts de page
│   ├── pages/       # Pages du site
│   └── styles/      # Styles globaux
└── package.json
```

## 🌟 Fonctionnalités

- Design responsive et moderne
- Sections pour services, coachs, témoignages
- Formulaire de contact intégré avec Calendly
- Animations fluides et scroll-based
- Support multilingue (Français)

## 🚀 Déploiement GitHub Pages

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.

### Configuration requise:
1. Dans les paramètres du repository GitHub, aller dans **Settings > Pages**
2. Sous **Source**, sélectionner **GitHub Actions**

Le site sera automatiquement déployé à chaque push sur la branche `main` à l'adresse:
`https://[votre-username].github.io/Dynastia/`

## 📄 License

© 2024 Dynastia. Tous droits réservés.