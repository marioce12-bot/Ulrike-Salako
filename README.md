# Ulrike Salako — Portfolio

Site statique (HTML/CSS/JS, aucun framework, aucun build) avec une page
publique (`index.html`) et une page d'administration (`admin.html`) qui
permet d'ajouter des photos et de modifier tous les textes du site sans
toucher au code.

Le contenu est stocké dans **Firestore** (un seul document `site/content`).
`index.html` le lit à chaque chargement ; `admin.html` permet de le modifier
après connexion (**Firebase Auth**).

## 1. Créer le projet Firebase

1. Va sur [console.firebase.google.com](https://console.firebase.google.com) → **Ajouter un projet**.
2. Une fois créé : **Créer une application** → icône `</>` (Web) → donne-lui un nom → **Enregistrer**.
3. Copie l'objet `firebaseConfig` affiché.
4. Ouvre `firebase-init.js` à la racine du repo et remplace les 6 valeurs `"REMPLACE_MOI"` par celles copiées.

## 2. Activer Firestore

1. Dans la console Firebase → **Firestore Database** → **Créer une base de données** → mode **production**.
2. Onglet **Règles** → colle le contenu de `firestore.rules` (déjà dans ce repo) → **Publier**.

## 3. Activer l'authentification + créer ton compte admin

1. Dans la console Firebase → **Authentication** → **Get started**.
2. Onglet **Sign-in method** → active **Email/Password**.
3. Onglet **Users** → **Add user** → renseigne l'email et le mot de passe avec lesquels tu te connecteras sur `/admin`.

Il n'y a pas d'inscription publique : seul un compte créé manuellement ici peut se connecter à l'admin.

## 4. Déployer sur Vercel

1. Pousse ce repo sur `github.com/marioce12-bot/Ulrike-Salako`.
2. Sur [vercel.com](https://vercel.com) → **Add New → Project** → importe le repo.
3. Aucune configuration de build nécessaire (site statique) — laisse les champs par défaut et clique **Deploy**.
4. Le site est en ligne sur `<nom-du-projet>.vercel.app`. Tu peux ajouter ton propre domaine ensuite dans **Settings → Domains**.

## 5. Ajouter des photos avec imgbb

1. Va sur [imgbb.com](https://imgbb.com) → **Start uploading** → dépose ta photo.
2. Une fois l'upload terminé, copie le lien **"Direct link"** (finit par `.jpg`/`.png`, pas la page de partage imgbb).
3. Sur `<ton-site>.vercel.app/admin`, connecte-toi, section **Galerie** → **+ Ajouter une photo** → colle le lien dans "Lien direct imgbb", ajoute une courte description, puis **Enregistrer les modifications**.
4. Actualise la page publique pour voir le résultat.

## Structure du repo

```
index.html          Page publique — lit le contenu depuis Firestore
admin.html           Espace admin (connexion + formulaires d'édition)
firebase-init.js      Configuration Firebase (à remplir, étape 1)
default-content.js    Contenu affiché tant qu'aucune modification n'a été enregistrée
firestore.rules       Règles de sécurité (lecture publique, écriture connectée uniquement)
vercel.json            Config de déploiement Vercel
```

## Ce que l'admin permet de modifier

- **En-tête** : mentions, prénom/nom, texte de présentation
- **Profil** : citation, paragraphe, badges (ajout/suppression)
- **Données techniques** : lignes taille/poids/etc. (ajout/suppression)
- **Galerie** : photos (ajout, suppression, réordonnement via ↑/↓)
- **Contact** : téléphone, email, Instagram
- **Pied de page**

Toutes les modifications sont enregistrées d'un coup avec le bouton
**"Enregistrer les modifications"** en haut de la page admin.
