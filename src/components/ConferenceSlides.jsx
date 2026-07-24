import React, { useState, useEffect } from 'react';
import { PRESENTATION_SLIDES } from '../data/marketData';
import { ChevronLeft, ChevronRight, X, Maximize, CheckCircle, Briefcase, Zap, Star } from 'lucide-react';

export default function ConferenceSlides({ onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slide = PRESENTATION_SLIDES[currentSlideIndex];
  const totalSlides = PRESENTATION_SLIDES.length;

  const nextSlide = () => {
    if (currentSlideIndex + 1 < totalSlides) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="fullscreen-slides fade-in">
      {/* Top Slide Control Bar */}
      <div className="slide-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🇨🇮</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.5px' }}>
            Conférence IT - Orientation Étudiants CI
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', opacity: 0.7 }}>
            Diaposite {currentSlideIndex + 1} / {totalSlides}
          </span>
          <button
            onClick={onClose}
            style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', color: 'var(--text-on-accent)', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <X size={18} /> Quitter (Esc)
          </button>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="slide-body">
        {slide.type === 'hero' && (
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="badge badge-lime" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              {slide.badge}
            </span>
            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              {slide.title}
            </h1>
            <p style={{ fontSize: '1.4rem', color: '#9ca3af', marginBottom: '2.5rem' }}>
              {slide.subtitle}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', textAlign: 'left' }}>
              {slide.highlights.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ color: 'var(--accent-lime)', marginBottom: '0.5rem' }}>
                    <Star size={24} />
                  </div>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === 'sectors' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>Secteurs d'Avenir à Abidjan</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af' }}>{slide.subtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {slide.data.slice(0, 4).map((sec, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-lime)' }}>{sec.name}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-green)' }}>{sec.share}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#9ca3af', marginBottom: '1rem' }}>{sec.description}</p>
                  <div style={{ fontSize: '0.85rem', color: '#d1d5db' }}>
                    <strong>Exemples: </strong> {sec.examples.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === 'tech_stack' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-lime" style={{ marginBottom: '0.5rem' }}>Indice de Demande Tech</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af' }}>{slide.subtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {slide.techs.map((t, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-on-accent)' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-lime)' }}>{t.trend}</span>
                  </div>
                  <span className="badge badge-green" style={{ fontSize: '0.8rem' }}>{t.demand}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === 'salaries' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Devise FCFA (XOF)</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af' }}>{slide.subtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {slide.levels.map((lvl, idx) => (
                <div key={idx} style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-on-accent)', marginBottom: '0.5rem' }}>{lvl.title}</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-lime)', marginBottom: '0.75rem' }}>
                    {lvl.range}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{lvl.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === 'pillars' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>Conseils Clés</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{slide.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af' }}>{slide.subtitle}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {slide.pillars.map((p, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-lime)', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#d1d5db', lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === 'action_plan' && (
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
            <span className="badge badge-lime" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Conclusion & Action</span>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>{slide.title}</h2>
            <p style={{ fontSize: '1.2rem', color: '#9ca3af', marginBottom: '2.5rem' }}>{slide.subtitle}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              {slide.actions.map((act, idx) => (
                <div key={idx} style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.25rem 1.75rem', borderRadius: '14px', border: '1px solid rgba(16, 185, 129, 0.25)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-green)', fontSize: '1.5rem', fontWeight: 800 }}>0{idx + 1}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>{act}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="slide-nav">
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          style={{ background: 'rgba(255, 255, 255, 0.08)', border: 'none', color: 'var(--text-on-accent)', padding: '0.75rem 1.5rem', borderRadius: '10px', cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentSlideIndex === 0 ? 0.4 : 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ChevronLeft size={20} /> Précédent
        </button>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {PRESENTATION_SLIDES.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              style={{ width: idx === currentSlideIndex ? '28px' : '10px', height: '10px', borderRadius: '5px', background: idx === currentSlideIndex ? 'var(--accent-lime)' : 'rgba(255, 255, 255, 0.2)', cursor: 'pointer', transition: 'all 0.3s ease' }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIndex + 1 === totalSlides}
          style={{ background: 'var(--accent-lime)', border: 'none', color: 'var(--text-on-accent)', padding: '0.75rem 1.5rem', borderRadius: '10px', cursor: currentSlideIndex + 1 === totalSlides ? 'not-allowed' : 'pointer', opacity: currentSlideIndex + 1 === totalSlides ? 0.4 : 1, display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
        >
          Suivant <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
