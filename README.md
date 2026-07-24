# 🇨🇮 IvoryDev Insights — Fullstack & Observatoire Tech Côte d'Ivoire

Observatoire du marché du développement informatique en Côte d'Ivoire. Plateforme moderne NISOZ Agency Style avec Backend Express.js, base de données PostgreSQL, containerisation Docker et Panneau d'Administration Secret pour la gestion des messages de contact.

---

## 🛠️ Architecture Technologique

- **Frontend** : React 18, Vite, Chart.js, Lucide Icons, Canvas Confetti.
- **Backend** : Express.js, JWT Authentication, CORS.
- **Base de données** : PostgreSQL 16 avec script d'initialisation `schema.sql`.
- **Conteneurisation** : Docker & Docker-Compose (Services `postgres` + `web`).

---

## 🔐 Espace Administrateur Secret

L'espace de consultation des messages reçus via le formulaire de contact est protégé et accessible via l'**URL Secrète** :

- **URL Secrète d'accès direct** : `http://localhost:3000/secret-admin-portal-ci-2026` (ou en cliquant sur `🔒 Admin Secret` dans le footer).
- **Identifiant par défaut** : `admin_ivorydev`
- **Mot de passe secret par défaut** : `Abidjan2026#SecretKey`

---

## 🐳 Lancement avec Docker & PostgreSQL

Pour lancer l'ensemble de la stack (PostgreSQL + Backend Express + Frontend Vite) en conteneurs isolés :

```bash
# Lancer la base PostgreSQL et l'application Web
docker-compose up --build -d

# Vérifier le statut des conteneurs
docker-compose ps

# Stopper l'application
docker-compose down
```

---

## 🚀 Lancement Local sans Docker

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur Backend Express (Port 5000)
node server/index.js

# 3. Dans un second terminal, démarrer le Frontend Vite (Port 3000)
npm run dev
```

---

## 📡 Endpoints REST API

- `POST /api/contact` — Soumission d'un message de contact (Public)
- `POST /api/admin/login` — Connexion administrateur secret (JWT)
- `GET /api/admin/messages` — Récupération des messages reçus (Admin authentifié)
- `PATCH /api/admin/messages/:id/read` — Marquer un message comme lu (Admin authentifié)
- `DELETE /api/admin/messages/:id` — Supprimer un message (Admin authentifié)
- `GET /api/health` — Vérification de l'état du serveur
