import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;

// PostgreSQL Connection Pool configuration
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  connectionTimeoutMillis: 3000,
});

let isPgConnected = false;

// Fallback in-memory store if DB is disconnected / initializing
const fallbackMessages = [
  {
    id: 1,
    name: 'Kouassi Konan',
    email: 'kouassi.k@gmail.com',
    subject: 'Étudiant / Apprenant',
    message: 'Bonjour, je suis étudiant en Licence 3 Informatique à l INPHB. Avez-vous des conseils pour postuler aux offres Flutter à Abidjan ?',
    status: 'unread',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 2,
    name: 'Sarah Bamba',
    email: 's.bamba@fintech-ci.com',
    subject: 'Recruteur / Entreprise',
    message: 'Nous recherchons 2 développeurs Senior Java Spring Boot pour notre équipe sur Cocody. Comment publier une offre sur votre observatoire ?',
    status: 'unread',
    created_at: new Date(Date.now() - 3600000 * 2).toISOString()
  }
];

// Initialize DB schema on startup
export const initDb = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL Database!');
    isPgConnected = true;

    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    await client.query(schemaSql);
    console.log('✅ PostgreSQL Schema initialized (contact_messages table ready).');
    client.release();
  } catch (err) {
    console.warn('⚠️ PostgreSQL connection not available yet:', err.message);
    console.log('ℹ️ Running in fallback memory store mode (will automatically retry connecting).');
    isPgConnected = false;
  }
};

// Insert a new contact message
export const saveMessage = async ({ name, email, subject, message }) => {
  if (isPgConnected) {
    try {
      const res = await pool.query(
        `INSERT INTO contact_messages (name, email, subject, message)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [name, email, subject || 'Étudiant / Apprenant', message]
      );
      return res.rows[0];
    } catch (err) {
      console.error('Error inserting message into Postgres:', err);
    }
  }

  // Fallback in-memory insertion
  const newMessage = {
    id: fallbackMessages.length + 1,
    name,
    email,
    subject: subject || 'Étudiant / Apprenant',
    message,
    status: 'unread',
    created_at: new Date().toISOString()
  };
  fallbackMessages.unshift(newMessage);
  return newMessage;
};

// Get all contact messages
export const getMessages = async () => {
  if (isPgConnected) {
    try {
      const res = await pool.query(
        `SELECT * FROM contact_messages ORDER BY created_at DESC`
      );
      return res.rows;
    } catch (err) {
      console.error('Error fetching messages from Postgres:', err);
    }
  }

  return fallbackMessages;
};

// Mark message as read
export const markMessageAsRead = async (id) => {
  if (isPgConnected) {
    try {
      const res = await pool.query(
        `UPDATE contact_messages SET status = 'read' WHERE id = $1 RETURNING *`,
        [id]
      );
      return res.rows[0];
    } catch (err) {
      console.error('Error updating message status in Postgres:', err);
    }
  }

  const msg = fallbackMessages.find(m => m.id === parseInt(id));
  if (msg) msg.status = 'read';
  return msg;
};

// Delete a message
export const deleteMessage = async (id) => {
  if (isPgConnected) {
    try {
      await pool.query(`DELETE FROM contact_messages WHERE id = $1`, [id]);
      return true;
    } catch (err) {
      console.error('Error deleting message from Postgres:', err);
    }
  }

  const idx = fallbackMessages.findIndex(m => m.id === parseInt(id));
  if (idx !== -1) {
    fallbackMessages.splice(idx, 1);
    return true;
  }
  return false;
};

export default pool;
