import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  User,
  LogOut,
  Mail,
  CheckCircle2,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  Inbox,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function AdminDashboard({ onClose }) {
  const [token, setToken] = useState(localStorage.getItem('ivory_admin_token') || '');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, unread, read

  // Fetch messages from Express Backend
  const fetchMessages = async (authToken) => {
    const activeToken = authToken || token;
    if (!activeToken) return;

    setLoadingMessages(true);
    try {
      const res = await fetch('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${activeToken}`
        }
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(data.data || []);
      } else {
        if (res.status === 401 || res.status === 403) {
          handleLogout();
        }
      }
    } catch (err) {
      console.error('Failed to fetch admin messages:', err);
    } finally {
      setLoadingMessages(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchMessages(token);
    }
  }, [token]);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoadingLogin(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('ivory_admin_token', data.token);
        setToken(data.token);
        fetchMessages(data.token);
      } else {
        setLoginError(data.error || 'Identifiants secrets incorrects.');
      }
    } catch (err) {
      setLoginError('Impossible de contacter le serveur Express backend.');
    } finally {
      setLoadingLogin(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('ivory_admin_token');
    setToken('');
    setMessages([]);
  };

  // Mark as read
  const handleMarkAsRead = async (id) => {
    try {
      const res = await fetch(`/api/admin/messages/${id}/read`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        setMessages(messages.map(m => m.id === id ? { ...m, status: 'read' } : m));
      }
    } catch (err) {
      console.error('Error marking as read:', err);
    }
  };

  // Delete message
  const handleDelete = async (id) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce message ?')) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        setMessages(messages.filter(m => m.id !== id));
      }
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  // Filtered messages
  const filteredMessages = messages.filter(m => {
    const matchesSearch =
      m.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.subject?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' ? true :
      statusFilter === 'unread' ? m.status === 'unread' :
      m.status === 'read';

    return matchesSearch && matchesStatus;
  });

  const unreadCount = messages.filter(m => m.status === 'unread').length;

  // --- LOGIN VIEW ---
  if (!token) {
    return (
      <div className="admin-login-box fade-in" style={{ padding: '36px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', maxWidth: '480px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ width: '60px', height: '60px', background: 'rgba(200, 243, 29, 0.15)', border: '1px solid #C8F31D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#C8F31D' }}>
            <ShieldCheck size={32} />
          </div>
          <span className="badge badge-lime" style={{ marginBottom: '8px', display: 'inline-block' }}>URL SECRÈTE DE GESTION</span>
          <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '1px' }}>
            ACCÈS ADMIN CONFIDENTIEL
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Espace réservé à l'administrateur de l'observatoire tech pour consulter les messages reçus.
          </p>
        </div>

        {loginError && (
          <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#f87171', padding: '12px 16px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <AlertCircle size={18} />
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '18px' }}>
            <label className="form-label">Identifiant Secret</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '40px' }}
                placeholder="Identifiant administrateur"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
              <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="form-label">Mot de passe Secret</label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                className="form-input"
                style={{ paddingLeft: '40px' }}
                placeholder="Mot de passe secret"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={loadingLogin}
            style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
          >
            {loadingLogin ? <RefreshCw className="animate-spin" size={18} /> : <ShieldCheck size={18} />}
            SE CONNECTER À L'ESPACE SECRET
          </button>
        </form>

        <div style={{ marginTop: '24px', background: 'var(--bg-tertiary)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <div><strong>Identifiant démo par défaut :</strong> <code>admin_ivorydev</code></div>
          <div style={{ marginTop: '4px' }}><strong>Mot de passe démo :</strong> <code>Abidjan2026SecretKey</code></div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD MESSAGES VIEW ---
  return (
    <div className="admin-dashboard-container fade-in" style={{ width: '100%' }}>
      {/* Top Header Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '16px', background: 'var(--bg-tertiary)', padding: '20px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'var(--accent-lime)', color: '#0A0A0A', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#FFFFFF' }}>
              PANNEAU DE GESTION DES MESSAGES
            </h2>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Accès administrateur sécurisé • Base de données PostgreSQL
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => fetchMessages()}
            className="icon-btn"
            title="Rafraîchir les messages"
            style={{ width: '38px', height: '38px' }}
          >
            <RefreshCw size={18} className={loadingMessages ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={handleLogout}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.8rem' }}
          >
            <LogOut size={16} />
            DÉCONNEXION
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '18px 22px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>
            TOTAL MESSAGES REÇUS
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--accent-lime)' }}>
            {messages.length}
          </div>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '18px 22px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>
            MESSAGES NON LUS
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: unreadCount > 0 ? '#fb923c' : '#34d399' }}>
            {unreadCount}
          </div>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '18px 22px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '4px' }}>
            PROFILS RECRUTEURS
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: '#06b6d4' }}>
            {messages.filter(m => m.subject?.includes('Recruteur')).length}
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative', minWidth: '250px' }}>
          <input
            type="text"
            className="form-input"
            placeholder="Rechercher par nom, email ou contenu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setStatusFilter('all')}
            className={`btn-secondary ${statusFilter === 'all' ? 'active' : ''}`}
            style={{ padding: '8px 16px', fontSize: '0.8rem', background: statusFilter === 'all' ? 'var(--accent-lime)' : 'transparent', color: statusFilter === 'all' ? '#0A0A0A' : 'var(--text-primary)' }}
          >
            Tous ({messages.length})
          </button>
          <button
            onClick={() => setStatusFilter('unread')}
            className={`btn-secondary ${statusFilter === 'unread' ? 'active' : ''}`}
            style={{ padding: '8px 16px', fontSize: '0.8rem', background: statusFilter === 'unread' ? '#fb923c' : 'transparent', color: statusFilter === 'unread' ? '#0A0A0A' : 'var(--text-primary)' }}
          >
            Non lus ({unreadCount})
          </button>
        </div>
      </div>

      {/* Messages List */}
      {filteredMessages.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <Inbox size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-main)', marginBottom: '8px' }}>Aucun message trouvé</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Aucun message ne correspond à vos critères de recherche.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                background: 'var(--bg-card)',
                border: msg.status === 'unread' ? '1px solid var(--accent-lime)' : '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '24px',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-main)', fontWeight: 700, color: '#FFFFFF' }}>{msg.name}</h4>
                    <span className={`badge ${msg.subject?.includes('Recruteur') ? 'badge-lime' : 'badge-green'}`} style={{ fontSize: '0.75rem' }}>
                      {msg.subject}
                    </span>
                    {msg.status === 'unread' && (
                      <span className="badge" style={{ background: '#fb923c', color: '#0A0A0A', fontSize: '0.7rem', fontWeight: 800 }}>
                        NOUVEAU
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-lime)', fontFamily: 'var(--font-mono)' }}>
                    <Mail size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    {msg.email}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <Clock size={14} />
                  <span>{new Date(msg.created_at).toLocaleString('fr-FR')}</span>
                </div>
              </div>

              {/* Message Content */}
              <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-color)', marginBottom: '16px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                {msg.message}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                {msg.status === 'unread' && (
                  <button
                    onClick={() => handleMarkAsRead(msg.id)}
                    className="btn-secondary"
                    style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                  >
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-lime)' }} />
                    Marquer comme lu
                  </button>
                )}

                <button
                  onClick={() => handleDelete(msg.id)}
                  style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', padding: '6px 14px', borderRadius: 'var(--radius-xs)', cursor: 'pointer', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Trash2 size={14} />
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
