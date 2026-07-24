import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OrientationQuiz from './components/OrientationQuiz';
import SalaryCalculator from './components/SalaryCalculator';
import EcosystemDirectory from './components/EcosystemDirectory';
import ConferenceSlides from './components/ConferenceSlides';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [activeOverlay, setActiveOverlay] = useState(null); // null, 'quiz', 'calculator', 'ecosystem', 'admin'
  const [showSlides, setShowSlides] = useState(false);
  
  // scroll refs for sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);
  const salaryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Detect secret admin URL route or query param
    if (
      window.location.pathname.includes('secret-admin') ||
      window.location.pathname.includes('admin-portal') ||
      window.location.search.includes('admin=true')
    ) {
      setActiveOverlay('admin');
    }
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setActiveOverlay(null);
    }
  };

  return (
    <div className="app-main">
      <Header
        onScrollTo={scrollTo}
        refs={{ heroRef, servicesRef, statsRef, projectsRef, salaryRef, contactRef }}
        onOpenQuiz={() => setActiveOverlay('quiz')}
        onOpenCalculator={() => setActiveOverlay('calculator')}
        onOpenEcosystem={() => setActiveOverlay('ecosystem')}
        onOpenSlides={() => setShowSlides(true)}
        onOpenAdmin={() => setActiveOverlay('admin')}
      />

      <Dashboard
        refs={{ heroRef, servicesRef, statsRef, projectsRef, salaryRef, contactRef }}
        onOpenQuiz={() => setActiveOverlay('quiz')}
        onOpenCalculator={() => setActiveOverlay('calculator')}
        onOpenEcosystem={() => setActiveOverlay('ecosystem')}
        onOpenSlides={() => setShowSlides(true)}
        onOpenAdmin={() => setActiveOverlay('admin')}
      />

      {/* Overlay Modals */}
      {activeOverlay === 'quiz' && (
        <div className="quiz-overlay" style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }} onClick={closeOverlay}>
          <div style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <button onClick={() => setActiveOverlay(null)} style={{ position: 'sticky', top: '0px', float: 'right', background: 'var(--accent-lime)', border: 'none', color: '#0A0A0A', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100, fontWeight: 'bold' }} title="Fermer"><X size={20} /></button>
            <OrientationQuiz />
          </div>
        </div>
      )}

      {activeOverlay === 'calculator' && (
        <div className="calculator-overlay" style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }} onClick={closeOverlay}>
          <div style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <button onClick={() => setActiveOverlay(null)} style={{ position: 'sticky', top: '0px', float: 'right', background: 'var(--accent-lime)', border: 'none', color: '#0A0A0A', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100, fontWeight: 'bold' }} title="Fermer"><X size={20} /></button>
            <SalaryCalculator />
          </div>
        </div>
      )}

      {activeOverlay === 'ecosystem' && (
        <div className="ecosystem-overlay" style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }} onClick={closeOverlay}>
          <div style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <button onClick={() => setActiveOverlay(null)} style={{ position: 'sticky', top: '0px', float: 'right', background: 'var(--accent-lime)', border: 'none', color: '#0A0A0A', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100, fontWeight: 'bold' }} title="Fermer"><X size={20} /></button>
            <EcosystemDirectory />
          </div>
        </div>
      )}

      {activeOverlay === 'admin' && (
        <div className="admin-overlay" style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(14px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }} onClick={closeOverlay}>
          <div style={{ maxWidth: '1000px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
            <button onClick={() => setActiveOverlay(null)} style={{ position: 'sticky', top: '0px', float: 'right', background: 'var(--accent-lime)', border: 'none', color: '#0A0A0A', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100, fontWeight: 'bold' }} title="Fermer"><X size={20} /></button>
            <AdminDashboard onClose={() => setActiveOverlay(null)} />
          </div>
        </div>
      )}

      {showSlides && <ConferenceSlides onClose={() => setShowSlides(false)} />}
    </div>
  );
}
