# Guide : Comment ajouter un article de blog

Ce guide vous explique comment ajouter un nouvel article de blog au site Dynastia directement depuis l'interface web de GitHub, sans avoir besoin d'outils de développement.

## 📋 Prérequis

- Accès en écriture au repository GitHub
- Images préparées (idéalement 1200x630px pour l'image de couverture)
- Contenu rédigé et relu

## 🚀 Étapes pour ajouter un article

### Étape 1 : Créer le fichier MDX

1. Allez sur GitHub et naviguez vers le repository
2. Naviguez vers le dossier `src/content/blog/`
3. Cliquez sur **"Add file"** → **"Create new file"**
4. Nommez votre fichier selon ce format : `mon-article-slug.mdx`
   - ⚠️ **Important** : N'utilisez PAS de date dans le nom du fichier
   - ✅ Bon : `guide-financement-startup.mdx`
   - ❌ Mauvais : `2025-01-15-guide-financement.mdx`
   - Utilisez uniquement des lettres minuscules, chiffres et tirets

### Étape 2 : Copier le template

1. Copiez le contenu du fichier `docs/new-post-template.mdx`
2. Collez-le dans votre nouveau fichier
3. Modifiez le frontmatter (la section entre les `---`) :

```yaml
---
title: "Votre titre accrocheur ici"
description: "Description de 50-160 caractères pour le SEO"
pubDate: 2025-01-15  # Format YYYY-MM-DD
tags: ["financement", "startup", "québec"]  # Max 5 tags
coverImage: "/assets/blog/guide-financement/cover.jpg"
coverAlt: "Description de l'image pour l'accessibilité"
draft: false  # Mettez false pour publier
---
```

### Étape 3 : Uploader les images

1. **Créer le dossier d'images** :
   - Allez dans `public/assets/blog/`
   - Cliquez sur **"Create new file"**
   - Tapez : `votre-slug/README.md` (cela créera le dossier)
   - Ajoutez un contenu simple comme "Images pour l'article X"
   - Commitez

2. **Uploader les images** :
   - Retournez dans `public/assets/blog/votre-slug/`
   - Cliquez sur **"Add file"** → **"Upload files"**
   - Glissez-déposez vos images
   - Nommez-les clairement : `cover.jpg`, `diagram.png`, etc.
   - Commitez les changements

### Étape 4 : Référencer les images

Dans votre article MDX, référencez les images ainsi :

```markdown
![Description de l'image](/assets/blog/votre-slug/image.jpg)
```

⚠️ **Important** : Le chemin commence par `/assets/` (pas `./assets/` ni `assets/`)

### Étape 5 : Écrire le contenu

1. Remplacez le contenu du template par votre article
2. Structurez avec des titres (##, ###)
3. Utilisez des listes, citations, et exemples de code si pertinent
4. Ajoutez des liens internes et externes

### Étape 6 : Commiter et publier

1. En bas de la page GitHub, dans "Commit changes" :
   - Titre : `Add blog post: [Votre titre]`
   - Description : Brève description des changements
2. Sélectionnez **"Commit directly to the main branch"**
3. Cliquez sur **"Commit changes"**

### Étape 7 : Vérifier le déploiement

1. Allez dans l'onglet **"Actions"** du repository
2. Attendez que le workflow "Deploy to GitHub Pages" se termine (environ 2-3 minutes)
3. Vérifiez votre article à : `https://dynast-ia.org/blog/votre-slug`

## 📁 Structure des fichiers

```
src/
  content/
    blog/
      mon-article.mdx          # Votre article
      autre-article.mdx         # Autre article
      
public/
  assets/
    blog/
      mon-article/              # Dossier pour les images de votre article
        cover.jpg               # Image de couverture (1200x630px recommandé)
        diagram.png             # Autres images
      autre-article/
        cover.jpg
```

## ✅ Checklist avant publication

- [ ] **Nom du fichier** : Pas de date, que des minuscules et tirets
- [ ] **Frontmatter complet** : title, description, pubDate, tags
- [ ] **Image de couverture** : Uploadée et référencée correctement
- [ ] **Draft à false** : Pour publier l'article
- [ ] **Description SEO** : Entre 50 et 160 caractères
- [ ] **Images optimisées** : Taille raisonnable (< 500KB par image)
- [ ] **Liens vérifiés** : Tous les liens fonctionnent
- [ ] **Orthographe** : Article relu et corrigé

## 🔧 Règles de nommage

### Fichiers MDX
- ✅ `guide-financement-startup.mdx`
- ✅ `intelligence-artificielle-pme.mdx`
- ✅ `reussir-pitch-investisseurs.mdx`
- ❌ `2025-01-15-guide.mdx` (pas de dates)
- ❌ `Guide_Financement.mdx` (pas de majuscules ou underscores)

### Dossiers d'images
- Le nom du dossier doit correspondre au slug de l'article
- Si l'article est `guide-financement.mdx`
- Le dossier d'images sera `public/assets/blog/guide-financement/`

### Images
- `cover.jpg` ou `cover.png` : Image principale
- Noms descriptifs : `dashboard-analytics.jpg`, `process-diagram.png`
- Évitez : `image1.jpg`, `photo.png`, `IMG_1234.jpg`

## 🎯 Bonnes pratiques

1. **Taille des images** :
   - Image de couverture : 1200x630px (ratio 1.91:1)
   - Images dans l'article : Max 1920px de large
   - Compressez les images avant upload

2. **Tags** :
   - Maximum 5 tags par article
   - En minuscules
   - Utilisez des tags existants quand possible
   - Exemples : `ia`, `financement`, `startup`, `québec`, `innovation`

3. **Titres** :
   - 60 caractères maximum pour un bon affichage
   - Incluez des mots-clés pertinents
   - Soyez spécifique et accrocheur

4. **Description** :
   - Entre 50 et 160 caractères
   - Résumez le bénéfice principal pour le lecteur
   - Incluez des mots-clés pour le SEO

## 📢 Partager sur LinkedIn

Après publication, partagez votre article sur LinkedIn :

1. Attendez 5 minutes après le déploiement
2. Copiez l'URL : `https://dynast-ia.org/blog/votre-slug`
3. Sur LinkedIn, créez un post avec :
   - L'URL de l'article (génère un aperçu automatique)
   - Un court texte d'introduction
   - Des hashtags pertinents
   - Taguez @Dynastia si applicable

L'aperçu LinkedIn utilisera automatiquement :
- Le titre de votre article
- La description
- L'image de couverture

## 🆘 Dépannage

### L'article n'apparaît pas
- Vérifiez que `draft: false` dans le frontmatter
- Attendez 3-5 minutes après le commit
- Vérifiez l'onglet Actions pour voir si le déploiement a réussi

### Les images ne s'affichent pas
- Vérifiez le chemin : doit commencer par `/assets/blog/`
- Assurez-vous que les images sont dans `public/assets/blog/votre-slug/`
- Vérifiez l'extension : `.jpg`, `.png`, `.webp`

### Erreur de build
- Vérifiez la syntaxe du frontmatter (YAML valide)
- Assurez-vous que la date est au format YYYY-MM-DD
- Vérifiez qu'il n'y a pas de caractères spéciaux dans les tags

## 📚 Ressources

- [Template d'article](./new-post-template.mdx)
- [Syntaxe Markdown](https://www.markdownguide.org/basic-syntax/)
- [Syntaxe MDX](https://mdxjs.com/docs/what-is-mdx/)
- [Optimisation d'images](https://squoosh.app/)

---

Pour toute question ou problème, contactez l'équipe technique ou ouvrez une issue sur GitHub.