import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS, STUDENT_ROADMAPS } from '../data/marketData';
import {
  RotateCcw,
  ArrowRight,
  BookOpen,
  Rocket,
  Award,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Brain,
  Terminal,
  Clock,
  DollarSign,
  Briefcase,
  Lightbulb,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function OrientationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({
    frontend: 0,
    backend: 0,
    mobile: 0,
    data_ai: 0,
    devops: 0,
    opensource: 0
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionScore) => {
    const updatedScores = { ...scores };
    Object.keys(optionScore).forEach(key => {
      updatedScores[key] = (updatedScores[key] || 0) + optionScore[key];
    });
    setScores(updatedScores);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#C8F31D', '#06B6D4', '#34D399', '#FFFFFF']
      });
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({ frontend: 0, backend: 0, mobile: 0, data_ai: 0, devops: 0, opensource: 0 });
    setIsCompleted(false);
  };

  // Determine top score track
  const getTopTrack = () => {
    let topKey = 'frontend';
    let maxVal = -1;
    Object.keys(scores).forEach(key => {
      if (scores[key] > maxVal) {
        maxVal = scores[key];
        topKey = key;
      }
    });
    return topKey;
  };

  const topTrackKey = getTopTrack();
  const roadmapInfo = STUDENT_ROADMAPS[topTrackKey] || STUDENT_ROADMAPS.frontend;

  return (
    <div className="quiz-box fade-in" style={{ width: '100%' }}>
      {!isCompleted ? (
        <div className="quiz-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '36px', borderRadius: 'var(--radius-md)' }}>
          {/* Header Progress */}
          <div className="quiz-progress" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <span className="badge badge-lime" style={{ marginBottom: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} /> Orient'IT Côte d'Ivoire — Diagnostic
              </span>
              <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Question {currentStep + 1} sur {QUIZ_QUESTIONS.length}
              </h2>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-lime)', fontSize: '1.4rem' }}>
              {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%
            </div>
          </div>

          <div className="progress-bar-bg" style={{ width: '100%', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden', marginBottom: '28px' }}>
            <div
              className="progress-bar-fill"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #C8F31D, #06B6D4)', transition: 'width 0.4s ease' }}
            ></div>
          </div>

          {/* Question Text */}
          <h3 style={{ fontSize: '1.2rem', marginBottom: '28px', lineHeight: '1.5', color: 'var(--text-primary)', fontFamily: 'var(--font-main)', fontWeight: 600 }}>
            {QUIZ_QUESTIONS[currentStep].question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                className="option-btn"
                onClick={() => handleSelectOption(opt.score)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  padding: '16px 20px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
              >
                <span style={{ lineHeight: '1.4' }}>{opt.label}</span>
                <ArrowRight size={18} style={{ color: 'var(--accent-lime)', flexShrink: 0, marginLeft: '12px' }} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* VISUALLY STUNNING ROADMAP RESULT VIEW */
        <div className="quiz-card fade-in" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '40px 32px', borderRadius: 'var(--radius-md)' }}>
          {/* Header Banner */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ display: 'inline-flex', background: 'rgba(200, 243, 29, 0.12)', border: '1px solid rgba(200, 243, 29, 0.3)', color: 'var(--accent-lime)', padding: '16px', borderRadius: '50%', marginBottom: '16px', boxShadow: '0 0 25px rgba(200, 243, 29, 0.2)' }}>
              <Award size={48} />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <span className="badge badge-lime" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                <Star size={12} style={{ marginRight: '4px' }} /> DIAGNOSTIC EFFECTUÉ AVEC SUCCÈS
              </span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
              TON PROFIL IDÉAL : <span style={{ color: 'var(--accent-lime)' }}>{roadmapInfo.title}</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
              Voici votre feuille de route interactive sur mesure pour devenir un expert convoité sur le marché ivoirien et international.
            </p>
          </div>

          {/* Metrics Summary Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '18px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-lime)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                <DollarSign size={16} /> Salaire / Mois (CI)
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-lime)' }}>
                {roadmapInfo.salary}
              </div>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '18px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#06B6D4', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                <Clock size={16} /> Durée d'Apprentissage
              </div>
              <div style={{ fontFamily: 'var(--font-main)', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                {roadmapInfo.duration}
              </div>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '18px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                <ShieldCheck size={16} /> Niveau Requis
              </div>
              <div style={{ fontFamily: 'var(--font-main)', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                {roadmapInfo.difficulty}
              </div>
            </div>
          </div>

          {/* Skills Tags List */}
          <div style={{ marginBottom: '40px', background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', color: 'var(--accent-lime)' }}>
              COMPÉTENCES DÉCISIVES À MAÎTRISER :
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {roadmapInfo.skills.map((sk, sIdx) => (
                <span key={sIdx} className="badge-lime" style={{ fontSize: '0.8rem', padding: '6px 12px', background: 'rgba(200, 243, 29, 0.12)', color: 'var(--accent-lime)', border: '1px solid rgba(200, 243, 29, 0.25)' }}>
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* VISUAL TIMELINE STEPPER (Feuille de route Étape par Étape) */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <BookOpen size={24} style={{ color: 'var(--accent-lime)' }} />
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                FEUILLE DE ROUTE DÉTAILLÉE (STEPPER)
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
              {roadmapInfo.steps.map((st, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    padding: '22px',
                    borderRadius: 'var(--radius-sm)',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Step Number Circle */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(200, 243, 29, 0.15)',
                      border: '2px solid var(--accent-lime)',
                      color: 'var(--accent-lime)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      textAlign: 'center',
                      lineHeight: 1,
                      padding: 0,
                      margin: 0,
                      flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </div>

                  {/* Step Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-main)', fontWeight: 700, color: '#FFFFFF' }}>
                        {st.phase}
                      </h4>
                      <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                        {st.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {st.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Portfolio Project Highlight Box */}
          <div style={{ background: 'linear-gradient(135deg, rgba(200, 243, 29, 0.1) 0%, rgba(6, 182, 212, 0.08) 100%)', border: '1px solid rgba(200, 243, 29, 0.3)', borderRadius: 'var(--radius-sm)', padding: '28px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-lime)', marginBottom: '12px' }}>
              <Rocket size={24} />
              <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                PROJET CLEF À CONSTRUIRE DANS VOTRE PORTFOLIO
              </h4>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-main)', fontWeight: 700, marginBottom: '8px', color: '#FFFFFF' }}>
              {roadmapInfo.portfolioProject.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              {roadmapInfo.portfolioProject.desc}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tech Stack :</span>
              {roadmapInfo.portfolioProject.stack.map((t, tIdx) => (
                <span key={tIdx} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', color: '#FFFFFF', fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Expert Mentoring & Advice Section */}
          <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '28px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#06B6D4', marginBottom: '16px' }}>
              <Lightbulb size={24} />
              <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                CONSEILS D'EXPERTS POUR RÉUSSIR VOTRE PARCOURS
              </h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {roadmapInfo.expertAdvice.map((adv, aIdx) => (
                <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-lime)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {adv}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reset Quiz Button */}
          <div style={{ textAlign: 'center' }}>
            <button className="btn-secondary" onClick={resetQuiz} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 32px' }}>
              <RotateCcw size={18} />
              <span>REFAIRE LE TEST D'ORIENTATION</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
