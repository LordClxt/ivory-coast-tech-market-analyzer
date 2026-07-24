import React from 'react';
import { ECOSYSTEM_RESOURCES } from '../data/marketData';
import { MapPin, ExternalLink, Users, Code, Building, Sparkles } from 'lucide-react';

export default function EcosystemDirectory() {
  return (
    <div className="fade-in">
      <div className="glass-card" style={{ marginBottom: '2rem' }}>
        <div className="section-title-box">
          <div className="badge badge-lime" style={{ marginBottom: '0.5rem' }}>Réseau & Écosystème Abidjan</div>
          <h2>L'Écosystème Numérique en Côte d'Ivoire</h2>
          <div className="section-subtitle">Les communautés, hubs d'innovation et SDKs de paiement indispensables pour tout développeur ivoirien</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {ECOSYSTEM_RESOURCES.map((cat, cIdx) => (
            <div key={cIdx}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-lime)' }}>
                <Sparkles size={20} />
                {cat.category}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      background: 'var(--bg-tertiary)',
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'border-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-highlight)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.name}</h4>
                        <span className="badge badge-lime" style={{ fontSize: '0.7rem' }}>{item.type}</span>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {item.focus}
                      </p>
                    </div>

                    {item.link !== '#' && (
                      <a
                        href={`https://${item.link}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--accent-lime)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                      >
                        Visiter le site <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
