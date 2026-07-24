import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDb, saveMessage, getMessages, markMessageAsRead, deleteMessage } from './db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = process.env.JWT_SECRET || 'ivorydev_secret_jwt_key_2026';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin_ivorydev';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Abidjan2026SecretKey';

// Middlewares
app.use(cors());
app.use(express.json());

// Initialize Database Connection
initDb();

// JWT Authentication Middleware for Admin Routes
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Accès non autorisé (Token manquant)' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token invalide ou expiré' });
  }
};

// --- PUBLIC REST API ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'IvoryDev Insights API & Express Server', timestamp: new Date().toISOString() });
});

// Submit Contact Message (Public)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires (Nom, Email, Message).' });
    }

    const saved = await saveMessage({ name, email, subject, message });
    console.log(`📩 Nouveau message reçu de ${name} (${email})`);
    res.status(201).json({ success: true, message: 'Votre message a été transmis avec succès !', data: saved });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ error: 'Erreur lors de l’enregistrement du message.' });
  }
});

// --- SECRET ADMIN API ROUTES ---

// Secret Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { username, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    console.log(`🔐 Connexion réussie à l'Espace Admin Secret par ${username}`);
    return res.json({
      success: true,
      token,
      admin: { username, role: 'Administrateur Observatoire Tech CI' }
    });
  }

  console.warn(`🔒 Échec de connexion admin tentée avec l'identifiant: ${username}`);
  return res.status(401).json({ error: 'Identifiant ou mot de passe secret incorrect.' });
});

// Get All Messages (Protected Admin)
app.get('/api/admin/messages', authenticateAdmin, async (req, res) => {
  try {
    const messages = await getMessages();
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    console.error('Error fetching admin messages:', err);
    res.status(500).json({ error: 'Erreur lors de la récupération des messages.' });
  }
});

// Mark Message as Read (Protected Admin)
app.patch('/api/admin/messages/:id/read', authenticateAdmin, async (req, res) => {
  try {
    const updated = await markMessageAsRead(req.params.id);
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la lecture.' });
  }
});

// Delete Message (Protected Admin)
app.delete('/api/admin/messages/:id', authenticateAdmin, async (req, res) => {
  try {
    await deleteMessage(req.params.id);
    res.json({ success: true, message: 'Message supprimé avec succès.' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression du message.' });
  }
});

// Serve Static Frontend Assets in Production Mode
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.use((req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    res.status(404).json({ error: 'API route not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Express Server running on http://localhost:${PORT}`);
  console.log(`🔐 Secret Admin Credentials -> Username: ${ADMIN_USERNAME} | Password: ${ADMIN_PASSWORD}`);
});
