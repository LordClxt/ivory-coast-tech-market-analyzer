import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import {
  LayoutDashboard,
  Compass,
  Calculator,
  MapPin,
  Play,
  Check,
  Globe,
  Building2,
  Search,
  Code,
  Briefcase,
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  ShieldCheck,
  Rocket,
  Award,
  Send,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  MARKET_METRICS,
  TECH_DEMAND,
  TECH_COMPARISON,
  SALARY_GRID,
  SECTORS,
  DATA_SOURCES,
  REAL_JOB_LISTINGS_SAMPLE
} from '../data/marketData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = ({ refs, onOpenQuiz, onOpenCalculator, onOpenEcosystem, onOpenSlides, onOpenAdmin }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Étudiant / Apprenant',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
    } catch (err) {
      console.warn('Backend API submission warning:', err);
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', subject: 'Étudiant / Apprenant', message: '' });
    }, 4000);
  };

  const projectImages = [
    '/images/article-coding.jpg',
    '/images/article-students.jpg',
    '/images/article-meeting.jpg',
    '/images/cta-fintech.jpg'
  ];

  // Chart Data for Tech Demand vs Talent Supply comparison
  const comparisonChartData = {
    labels: TECH_COMPARISON.labels,
    datasets: [
      {
        label: "Besoins des Recruteurs (Offres %)",
        data: TECH_COMPARISON.demandScore,
        backgroundColor: '#C8F31D',
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.75,
      },
      {
        label: "Profils Disponibles en CI (%)",
        data: TECH_COMPARISON.talentSupplyScore,
        backgroundColor: '#06b6d4',
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.75,
      }
    ]
  };

  const comparisonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#AAAAAA',
          font: { family: 'Inter', size: 12, weight: 600 },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#888888', font: { family: 'Inter', size: 11 } },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      y: {
        max: 100,
        ticks: { color: '#888888', font: { family: 'Inter' } },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      }
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-section" ref={refs?.heroRef}>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-label">🇨🇮 OBSERVATOIRE TECH CÔTE D'IVOIRE</div>
            <h1 className="hero-title">
              LE MARCHÉ DES<br />
              DÉVELOPPEURS EN<br />
              <span className="accent">CÔTE D'IVOIRE</span>
            </h1>
            <p className="hero-desc">
              Découvrez les tendances, les salaires et les compétences les plus demandées sur le marché tech ivoirien. Une plateforme open-source conçue pour orienter les étudiants et jeunes diplômés vers les meilleures opportunités.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary" 
                onClick={() => refs?.servicesRef?.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                EXPLORER LE MARCHÉ
              </button>
              <button className="btn-secondary" onClick={onOpenQuiz}>
                QUIZ D'ORIENTATION
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero.jpg" alt="Hero IvoryDev" />
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="services-section animate-on-scroll" ref={refs?.servicesRef}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">NOS OUTILS</span>
            <h2 className="section-title">CE QUE NOUS OFFRONS AUX ÉTUDIANTS</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><LayoutDashboard size={32} /></div>
              <h3>VUE DU MARCHÉ</h3>
              <p>Analyse croisée des offres Google Jobs, LinkedIn CI et Emploi.ci</p>
            </div>
            <div className="service-card" onClick={onOpenQuiz} style={{cursor: 'pointer'}}>
              <div className="service-icon"><Compass size={32} /></div>
              <h3>QUIZ D'ORIENTATION</h3>
              <p>Diagnostic de carrière personnalisé pour étudiants ivoiriens</p>
            </div>
            <div className="service-card" onClick={onOpenCalculator} style={{cursor: 'pointer'}}>
              <div className="service-icon"><Calculator size={32} /></div>
              <h3>SIMULATEUR FCFA</h3>
              <p>Estimation du salaire selon votre profil et expérience</p>
            </div>
            <div className="service-card" onClick={onOpenEcosystem} style={{cursor: 'pointer'}}>
              <div className="service-icon"><MapPin size={32} /></div>
              <h3>ÉCOSYSTÈME CI</h3>
              <p>Communautés tech, incubateurs et APIs de paiement local</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="stats-section animate-on-scroll" ref={refs?.statsRef}>
        <div className="container stats-grid">
          <div className="stats-image">
            <img src="/images/stats.jpg" alt="Stats Market" />
            <button className="play-btn" onClick={onOpenSlides}>
              <Play fill="currentColor" size={24} />
            </button>
          </div>
          <div className="stats-content">
            <span className="section-label">DONNÉES DU MARCHÉ</span>
            <h2 className="section-title">PRÊT À LANCER VOTRE CARRIÈRE TECH ?</h2>
            <p>
              Le marché ivoirien est en pleine mutation. Les startups fintech et les grandes entreprises télécoms recherchent activement des talents capables de construire l'économie numérique de demain.
            </p>
            <ul className="stats-list">
              <li>
                <Check className="check-icon lime-color" size={20} />
                <span>Croissance de +28% des offres tech par an à Abidjan</span>
              </li>
              <li>
                <Check className="check-icon lime-color" size={20} />
                <span>Top Stack : JavaScript (React/Node) & PHP (Laravel)</span>
              </li>
              <li>
                <Check className="check-icon lime-color" size={20} />
                <span>Pénurie critique de profils DevOps & Cloud</span>
              </li>
            </ul>
            <div className="stats-counters">
              <div className="counter-box">
                <div className="counter-val">18K+</div>
                <div className="counter-label">DÉVELOPPEURS ACTIFS</div>
              </div>
              <div className="counter-box">
                <div className="counter-val">+28%</div>
                <div className="counter-label">CROISSANCE ANNUELLE</div>
              </div>
              <div className="counter-box">
                <div className="counter-val">350K</div>
                <div className="counter-label">SALAIRE JUNIOR FCFA</div>
              </div>
              <div className="counter-box">
                <div className="counter-val">6</div>
                <div className="counter-label">SECTEURS CLÉS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOGOS BAND */}
      <section className="logos-band animate-on-scroll">
        <div className="logos-track">
          {[...Array(2)].map((_, i) => (
            <div className="logos-set" key={i}>
              <div className="logo-item"><Search className="logo-icon" size={24} /> Emploi.ci</div>
              <div className="logo-item"><Briefcase className="logo-icon" size={24} /> Novojob.ci</div>
              <div className="logo-item"><Globe className="logo-icon" size={24} /> JobIvoire.ci</div>
              <div className="logo-item"><Code className="logo-icon" size={24} /> ProJobivoire</div>
              <div className="logo-item"><Briefcase className="logo-icon" size={24} /> LinkedIn CI</div>
              <div className="logo-item"><Globe className="logo-icon" size={24} /> Google Jobs CI</div>
              <div className="logo-item"><Building2 className="logo-icon" size={24} /> Wave</div>
              <div className="logo-item"><Building2 className="logo-icon" size={24} /> CinetPay</div>
              <div className="logo-item"><Building2 className="logo-icon" size={24} /> Orange CI</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4B. TECH COMPARISON CHART SECTION */}
      <section className="section animate-on-scroll" style={{ background: 'var(--bg-secondary)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">ANALYSE DU MARCHÉ & TENSIONS</span>
            <h2 className="section-title">DEMANDE DES RECRUTEURS VS PROFILS DISPONIBLES EN CÔTE D'IVOIRE</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '750px' }}>
              Analyse comparative consolidée à partir des données d'<strong>Emploi.ci</strong>, <strong>Novojob.ci</strong>, <strong>JobIvoire.ci</strong>, <strong>ProJobivoire</strong> et <strong>LinkedIn CI</strong>.
            </p>
          </div>

          {/* Chart Container */}
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '30px', marginBottom: '40px' }}>
            <div style={{ height: '380px', width: '100%' }}>
              <Bar data={comparisonChartData} options={comparisonChartOptions} />
            </div>
          </div>

          {/* Key Tension Points Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {TECH_COMPARISON.details.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ fontFamily: 'var(--font-main)', fontSize: '1rem', fontWeight: 'bold' }}>{item.tech}</h4>
                  <span className={`badge ${item.status.includes('PÉNURIE') || item.status.includes('Pénurie') ? 'badge-orange' : item.status.includes('Équilibré') ? 'badge-green' : 'badge-lime'}`}>
                    {item.status}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <div>Offres: <strong style={{ color: 'var(--accent-lime)' }}>{item.demand}%</strong></div>
                  <div>Profils: <strong style={{ color: '#06b6d4' }}>{item.supply}%</strong></div>
                  <div>Tension: <strong style={{ color: item.demand > item.supply ? '#fb923c' : '#34d399' }}>{item.demand - item.supply > 0 ? `+${item.demand - item.supply}%` : `${item.demand - item.supply}%`}</strong></div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCTIVITY SECTION */}
      <section className="productivity-section animate-on-scroll">
        <div className="container productivity-grid">
          <div className="productivity-content">
            <span className="section-label">ORIENTATION STRATÉGIQUE</span>
            <h2 className="section-title">IVORYDEV VOUS PERMET D'OPTIMISER VOTRE ORIENTATION</h2>
            <ul className="productivity-checks">
              <li>
                <div className="check-icon-wrapper"><Check className="check-icon" size={24} /></div>
                <div className="check-text">
                  <h4>Portfolio GitHub & Demo en Ligne</h4>
                  <p>Au moins 2-3 applications hébergées en ligne</p>
                </div>
              </li>
              <li>
                <div className="check-icon-wrapper"><Check className="check-icon" size={24} /></div>
                <div className="check-text">
                  <h4>APIs & Paiement Mobile Money</h4>
                  <p>Maîtriser Wave API, CinetPay ou Bizao</p>
                </div>
              </li>
              <li>
                <div className="check-icon-wrapper"><Check className="check-icon" size={24} /></div>
                <div className="check-text">
                  <h4>Anglais Technique Fluent</h4>
                  <p>Accès aux opportunités Remote International</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="productivity-image-wrapper">
            <div className="productivity-image">
              <img src="/images/article-meeting.jpg" alt="Strategic Orientation" />
            </div>
            <div className="productivity-badge">
              <span className="badge-val">+48%</span>
              <span className="badge-label">Python & Data</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="cta-section animate-on-scroll">
        <div className="container cta-grid">
          <div className="cta-content">
            <span className="section-label">CARRIÈRE TECH</span>
            <h2 className="section-title">PRÊT À DONNER UN NOUVEAU LOOK À VOTRE CARRIÈRE ?</h2>
            <p>
              Notre plateforme regroupe toutes les ressources nécessaires pour comprendre les attentes du marché ivoirien et international.
            </p>
            <div className="cta-items">
              <div className="cta-item">
                <Zap className="cta-icon" size={28} />
                <h4>Quiz Personnalisé</h4>
                <p>Trouvez votre voie en 4 questions</p>
              </div>
              <div className="cta-item">
                <TrendingUp className="cta-icon" size={28} />
                <h4>Données Marché</h4>
                <p>Statistiques directes Google Jobs</p>
              </div>
              <div className="cta-item">
                <DollarSign className="cta-icon" size={28} />
                <h4>Simulateur Salaire</h4>
                <p>Estimation en FCFA selon votre profil</p>
              </div>
              <div className="cta-item">
                <Users className="cta-icon" size={28} />
                <h4>Écosystème Local</h4>
                <p>Communautés et APIs à maîtriser</p>
              </div>
            </div>
          </div>
          <div className="cta-image-wrapper">
            <div className="cta-image">
              <img src="/images/cta-fintech.jpg" alt="Fintech Career" />
            </div>
            <div className="cta-floating-card">
              <span className="floating-icon">🚀</span>
              <h4>EXPLOREZ LES SERVICES</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROJECTS SECTION */}
      <section className="projects-section animate-on-scroll" ref={refs?.projectsRef}>
        <div className="container">
          <div className="projects-header text-center">
            <span className="section-label">OFFRES D'EMPLOI</span>
            <h2 className="section-title">APERÇU DES POSTES RÉCENTS</h2>
          </div>
          <div className="projects-grid">
            {REAL_JOB_LISTINGS_SAMPLE.slice(0, 4).map((job, idx) => (
              <div className="project-card" key={idx}>
                <img src={projectImages[idx % projectImages.length]} alt={job.title} />
                <div className="project-overlay">
                  <span className="project-tag">{job.type}</span>
                  <h4>{job.title}</h4>
                  <div className="project-company">{job.company}</div>
                  <div className="project-location">{job.location} • {job.source}</div>
                  <div className="project-techs">
                    {job.stack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US SECTION */}
      <section className="why-section animate-on-scroll">
        <div className="container why-grid">
          <div className="why-image">
            <img src="/images/article-students.jpg" alt="Why IvoryDev" />
          </div>
          <div className="why-content">
            <span className="section-label">POURQUOI IVORYDEV</span>
            <h2 className="section-title">POURQUOI CHOISIR NOTRE PLATEFORME ?</h2>
            <ul className="why-points">
              <li>
                <ShieldCheck className="why-icon" size={32} />
                <div className="why-text">
                  <h4>Données Vérifiées</h4>
                  <p>Sources: Google Jobs, LinkedIn CI, Emploi.ci</p>
                </div>
              </li>
              <li>
                <Rocket className="why-icon" size={32} />
                <div className="why-text">
                  <h4>Conçu pour les Étudiants</h4>
                  <p>Orientations, roadmaps et conseils adaptés au marché ivoirien</p>
                </div>
              </li>
              <li>
                <Award className="why-icon" size={32} />
                <div className="why-text">
                  <h4>Gratuit & Open Source</h4>
                  <p>Accessible à tous les étudiants et jeunes diplômés de Côte d'Ivoire</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. ARTICLES SECTION */}
      <section className="articles-section animate-on-scroll">
        <div className="container">
          <div className="articles-header text-center">
            <span className="section-label">PILIERS D'EMPLOYABILITÉ</span>
            <h2 className="section-title">LES 4 CLÉS DE VOTRE SUCCÈS</h2>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-image">
                <img src="/images/article-coding.jpg" alt="PORTFOLIO" />
                <span className="article-date">ESSENTIEL</span>
              </div>
              <div className="article-content">
                <span className="article-category">PORTFOLIO</span>
                <h3>Un Portfolio GitHub & Demo en Ligne</h3>
                <p>Avoir 2-3 applications réelles hébergées en ligne prouve vos compétences au-delà du CV.</p>
              </div>
            </div>
            <div className="article-card">
              <div className="article-image">
                <img src="/images/article-students.jpg" alt="PAIEMENT" />
                <span className="article-date">ESSENTIEL</span>
              </div>
              <div className="article-content">
                <span className="article-category">PAIEMENT</span>
                <h3>APIs & Paiement Mobile Money</h3>
                <p>Maîtriser les intégrations Wave API et CinetPay est indispensable pour les projets locaux.</p>
              </div>
            </div>
            <div className="article-card">
              <div className="article-image">
                <img src="/images/article-meeting.jpg" alt="LANGUE" />
                <span className="article-date">ESSENTIEL</span>
              </div>
              <div className="article-content">
                <span className="article-category">LANGUE</span>
                <h3>Anglais Technique Fluent</h3>
                <p>Ouvre la porte aux documentations avancées et aux opportunités de travail en remote international.</p>
              </div>
            </div>
            <div className="article-card">
              <div className="article-image">
                <img src="/images/cta-fintech.jpg" alt="RÉSEAU" />
                <span className="article-date">ESSENTIEL</span>
              </div>
              <div className="article-content">
                <span className="article-category">RÉSEAU</span>
                <h3>Réseau & Communautés Tech</h3>
                <p>S'impliquer dans le GDG Abidjan, ODC ou PyData CI multiplie les opportunités d'embauche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SALARY SECTION */}
      <section className="salary-section animate-on-scroll" ref={refs?.salaryRef}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">GRILLE SALARIALE</span>
            <h2 className="section-title">SALAIRES OBSERVÉS EN CÔTE D'IVOIRE (FCFA)</h2>
          </div>
          <div className="salary-table-container">
            <table className="salary-table">
              <thead>
                <tr>
                  <th>Spécialité</th>
                  <th>Junior</th>
                  <th>Confirmé</th>
                  <th>Senior</th>
                  <th>Remote International</th>
                  <th>Compétences</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_GRID.map((role, idx) => (
                  <tr key={idx}>
                    <td className="role-title">{role.role}</td>
                    <td className="fcfa-val">{role.junior}</td>
                    <td className="fcfa-val">{role.mid}</td>
                    <td className="fcfa-val">{role.senior}</td>
                    <td className="fcfa-val">{role.remoteInternational}</td>
                    <td>
                      {role.hotKeywords.map((kw, i) => (
                        <span key={i} className="badge-lime" style={{marginRight: '4px', display: 'inline-block', marginBottom: '4px', padding: '2px 6px', borderRadius: '4px', backgroundColor: '#C8F31D', color: '#0A0A0A', fontSize: '0.75rem', fontWeight: 'bold'}}>{kw}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. CONTACT & MESSAGE SECTION */}
      <section className="contact-section animate-on-scroll" ref={refs?.contactRef}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '35px' }}>
            <span className="section-label">CONTACT & REMARQUES</span>
            <h2 className="section-title">POSEZ UNE QUESTION / LAISSEZ UN MESSAGE</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '650px' }}>
              Une suggestion de données, une question d'orientation ou une remarque ? Renseignez votre message ci-dessous.
            </p>
          </div>

          <div className="contact-card">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(200, 243, 29, 0.15)', border: '1px solid #C8F31D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#C8F31D' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#C8F31D', marginBottom: '8px' }}>MESSAGE TRANSMIS AVEC SUCCÈS !</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Merci {contactForm.name}, votre message a bien été pris en compte par l'équipe IvoryDev Insights.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="contact-form-grid">
                  <div className="form-group">
                    <label className="form-label">Nom complet *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Ex: Jean-Marc Koffi"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Adresse Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Ex: jeanmarc@gmail.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Votre Profil / Sujet</label>
                    <select
                      className="form-select"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    >
                      <option value="Étudiant / Apprenant">Étudiant / Apprenant en informatique</option>
                      <option value="Développeur Web/Mobile">Développeur Web / Mobile actif</option>
                      <option value="Recruteur / Entreprise">Recruteur / Entreprise Tech Abidjan</option>
                      <option value="Autre">Autre demande / Partenariat</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Votre Message *</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Tapez ici votre message, vos remarques sur le marché ou vos questions d'orientation..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <div className="full-width" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button type="submit" className="btn-primary" style={{ padding: '14px 36px', width: '100%', justifyContent: 'center' }}>
                      <Send size={18} />
                      ENVOYER LE MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 12. FOOTER SECTION */}
      <footer className="footer-section animate-on-scroll">
        <div className="container">
          <div className="footer-cta text-center">
            <h2>TRAVAILLONS ENSEMBLE</h2>
            <p>Découvrez votre potentiel sur le marché tech ivoirien et international.</p>
            <div className="footer-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem'}}>
              <button className="btn-primary" onClick={onOpenQuiz}>QUIZ D'ORIENTATION</button>
              <button className="btn-outline-lime" onClick={onOpenSlides} style={{border: '2px solid #C8F31D', backgroundColor: 'transparent', color: '#C8F31D', padding: '0.75rem 1.5rem', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer'}}>MODE CONFÉRENCE</button>
            </div>
          </div>
          <div className="footer-bottom" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem'}}>
            <div className="footer-left">
              © 2026 IvoryDev Insights — Données Google Jobs & LinkedIn CI
            </div>
            <div className="footer-links" style={{display: 'flex', gap: '1.5rem'}}>
              <a href="#" onClick={(e) => { e.preventDefault(); refs?.heroRef?.current?.scrollIntoView({behavior: 'smooth'}); }}>Accueil</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenQuiz(); }}>Quiz</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenCalculator(); }}>Simulateur</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenEcosystem(); }}>Écosystème</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenAdmin(); }} style={{ color: 'var(--accent-lime)', opacity: 0.6 }}>🔒 Admin Secret</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
