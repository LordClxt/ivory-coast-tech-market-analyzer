-- Schema pour la base de données PostgreSQL IvoryDev Insights
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(100) DEFAULT 'Étudiant / Apprenant',
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'unread',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de données de test initiales si la table est vide
INSERT INTO contact_messages (name, email, subject, message, status)
SELECT 'Kouassi Konan', 'kouassi.k@gmail.com', 'Étudiant / Apprenant', 'Bonjour, je suis étudiant en Licence 3 Informatique à l INPHB. Avez-vous des conseils pour postuler aux offres Flutter à Abidjan ?', 'unread'
WHERE NOT EXISTS (SELECT 1 FROM contact_messages);

INSERT INTO contact_messages (name, email, subject, message, status)
SELECT 'Sarah Bamba', 's.bamba@fintech-ci.com', 'Recruteur / Entreprise', 'Nous recherchons 2 développeurs Senior Java Spring Boot pour notre équipe sur Cocody. Comment publier une offre sur votre observatoire ?', 'unread'
WHERE NOT EXISTS (SELECT 1 FROM contact_messages OFFSET 1);
