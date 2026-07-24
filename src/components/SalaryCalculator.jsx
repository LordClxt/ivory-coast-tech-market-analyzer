import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SALARY_GRID } from '../data/marketData';

export default function SalaryCalculator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [expYears, setExpYears] = useState(0); // 0: Junior, 1: Mid, 2: Senior
  const [englishLevel, setEnglishLevel] = useState('intermediate'); // basic, intermediate, fluent
  const [portfolioProjects, setPortfolioProjects] = useState(2); // 0 to 5
  const [companyType, setCompanyType] = useState('fintech'); // agency, fintech, corporate, remote

  // Calculation Logic in FCFA
  const calculateSalary = () => {
    let baseMin = 350000;
    let baseMax = 650000;

    // Role multiplier
    if (roleIndex === 0) { baseMin = 380000; baseMax = 700000; } // Fullstack
    else if (roleIndex === 1) { baseMin = 320000; baseMax = 580000; } // Backend PHP
    else if (roleIndex === 2) { baseMin = 360000; baseMax = 650000; } // Mobile
    else if (roleIndex === 3) { baseMin = 400000; baseMax = 750000; } // Data
    else if (roleIndex === 4) { baseMin = 450000; baseMax = 800000; } // DevOps
    else if (roleIndex === 5) { baseMin = 420000; baseMax = 750000; } // Cyber

    // Exp multiplier
    if (expYears === 1) { baseMin *= 1.8; baseMax *= 1.8; }
    else if (expYears === 2) { baseMin *= 3.2; baseMax *= 3.5; }

    // English multiplier
    if (englishLevel === 'fluent') {
      baseMin *= 1.25;
      baseMax *= 1.35;
    }

    // Portfolio projects boost
    const projectBonus = portfolioProjects * 40000;
    baseMin += projectBonus;
    baseMax += projectBonus * 1.5;

    // Company type multiplier
    if (companyType === 'remote') {
      baseMin = Math.max(baseMin * 2.2, 1800000);
      baseMax = Math.max(baseMax * 2.5, 4500000);
    } else if (companyType === 'fintech') {
      baseMin *= 1.2;
      baseMax *= 1.25;
    } else if (companyType === 'corporate') {
      baseMin *= 1.15;
      baseMax *= 1.2;
    }

    return {
      min: Math.round(baseMin / 10000) * 10000,
      max: Math.round(baseMax / 10000) * 10000
    };
  };

  const salary = calculateSalary();

  return (
    <div className="fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass-card" style={{ marginBottom: '2rem' }}>
        <div className="section-title-box">
          <div className="badge badge-lime" style={{ marginBottom: '0.5rem' }}>Simulateur de Prétention Salariale</div>
          <h2>Calculateur de Valeur Marché (Côte d'Ivoire & Remote)</h2>
          <div className="section-subtitle">Ajustez vos paramètres pour estimer la fourchette de salaire mensuel brute en FCFA (XOF)</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Controls */}
          <div>
            <div className="form-group">
              <label className="form-label">
                <span>Spécialité / Métier cible</span>
              </label>
              <select className="form-select" value={roleIndex} onChange={(e) => setRoleIndex(Number(e.target.value))}>
                {SALARY_GRID.map((item, idx) => (
                  <option key={idx} value={idx}>{item.role}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Niveau d'expérience</span>
                <span style={{ color: 'var(--accent-lime)' }}>
                  {expYears === 0 ? 'Junior (0-2 ans)' : expYears === 1 ? 'Confirmé (2-5 ans)' : 'Senior (5+ ans)'}
                </span>
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="2"
                value={expYears}
                onChange={(e) => setExpYears(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Maîtrise de l'Anglais</span>
              </label>
              <select className="form-select" value={englishLevel} onChange={(e) => setEnglishLevel(e.target.value)}>
                <option value="basic">Débutant (Notions de base)</option>
                <option value="intermediate">Technique (Lecture de doc officielle)</option>
                <option value="fluent">Courant / Fluent (Interviews & Télétravail US/EU)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Nombre de Projets Propres sur GitHub</span>
                <span style={{ color: 'var(--accent-lime)', fontWeight: 700 }}>{portfolioProjects} projet(s)</span>
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                value={portfolioProjects}
                onChange={(e) => setPortfolioProjects(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Type d'entreprise ciblée</span>
              </label>
              <select className="form-select" value={companyType} onChange={(e) => setCompanyType(e.target.value)}>
                <option value="agency">Agence Web / ESN Locale (Abidjan)</option>
                <option value="fintech">Startup Fintech / Scale-up (Wave, Bizao, Djamo...)</option>
                <option value="corporate">Multinationale / Télécom / Banque (Orange, SGCI...)</option>
                <option value="remote">Télétravail International (Client US / Europe)</option>
              </select>
            </div>
          </div>

          {/* Results Box */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(200, 243, 29, 0.12) 0%, rgba(200, 243, 29, 0.05) 100%)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(200, 243, 29, 0.3)', textAlign: 'center' }}>
              <div className="badge badge-lime" style={{ marginBottom: '0.75rem' }}>Estimation du Salaire Mensuel</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-lime)', lineHeight: 1.2, margin: '0.5rem 0' }}>
                {salary.min.toLocaleString('fr-FR')} - {salary.max.toLocaleString('fr-FR')} FCFA
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Rémunération mensuelle estimée avant impôts à Abidjan ou équivalent net en Freelance / Remote.
              </p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginTop: '1rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-lime)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <TrendingUp size={18} />
                Conseils pour débloquer la tranche supérieure :
              </h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {englishLevel !== 'fluent' && (
                  <li>Passez votre niveau d'Anglais à <strong>Fluent</strong> (+25% à +150% de potentiel salarial en Remote).</li>
                )}
                {portfolioProjects < 3 && (
                  <li>Ajoutez <strong>{3 - portfolioProjects} projet(s)</strong> supplémentaire(s) déployé(s) en ligne sur Vercel ou VPS.</li>
                )}
                <li>Intégrez une API de paiement comme <strong>Wave API</strong> ou <strong>CinetPay</strong> sur l'un de vos projets.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
