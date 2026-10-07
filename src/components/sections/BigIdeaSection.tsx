import { useState, type FC } from 'react';
import { BIG_IDEA_DATA } from '../../config/content';
import { Sparkles, Shield, Cpu, Zap, CheckCircle2, Layers } from 'lucide-react';

export const BigIdeaSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'ai' | 'engineering'>('both');

  return (
    <section id="approach" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '880px' }}>
          <div className="section-label">
            <Cpu size={14} />
            <span>02 // THE FOUNDATIONAL PARADIGM</span>
          </div>
          <h2 className="section-title">
            AI changed how software gets made. <br />
            <span style={{ color: 'var(--color-primary-accent)' }}>
              It didn’t remove the need to engineer it.
            </span>
          </h2>
          <p className="section-subtitle">
            {BIG_IDEA_DATA.summary}
          </p>
        </div>

        {/* Interactive Comparison Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
            backgroundColor: 'var(--color-surface)',
            padding: '6px',
            borderRadius: 'var(--radius-base)',
            width: 'fit-content',
            border: '1px solid var(--color-border)',
          }}
        >
          <button
            onClick={() => setActiveTab('both')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'both' ? 'var(--color-surface-elevated)' : 'transparent',
              color: activeTab === 'both' ? 'var(--color-primary-text)' : 'var(--color-secondary-text)',
              border: activeTab === 'both' ? '1px solid var(--color-strong-border)' : '1px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            Ttriconix Intersection (AI + Engineering)
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'ai' ? 'var(--color-surface-elevated)' : 'transparent',
              color: activeTab === 'ai' ? 'var(--color-primary-accent)' : 'var(--color-secondary-text)',
              border: activeTab === 'ai' ? '1px solid var(--color-strong-border)' : '1px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            AI Force Multiplier
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'engineering' ? 'var(--color-surface-elevated)' : 'transparent',
              color: activeTab === 'engineering' ? 'var(--color-primary-text)' : 'var(--color-secondary-text)',
              border: activeTab === 'engineering' ? '1px solid var(--color-strong-border)' : '1px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            Engineering Accountability
          </button>
        </div>

        {/* Dual Pillar Comparison Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeTab === 'both' ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            gap: '28px',
            marginBottom: '48px',
          }}
        >
          {/* Pillar 1: AI (The Leverage) */}
          {(activeTab === 'both' || activeTab === 'ai') && (
            <div
              className="card"
              style={{
                borderColor: activeTab === 'ai' ? 'var(--color-primary-accent)' : 'var(--color-border)',
                background: 'linear-gradient(180deg, var(--color-surface) 0%, rgba(56, 189, 248, 0.03) 100%)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-primary-accent-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-accent)',
                    }}
                  >
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>AI: The Force Multiplier</h3>
                    <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary-accent)' }}>
                      [ACCELERATION ENGINE]
                    </div>
                  </div>
                </div>
                <span className="tech-badge">5x - 10x SPEED</span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)', lineHeight: 1.5, marginBottom: '24px' }}>
                Generative AI tools radically eliminate repetitive software development tax. They accelerate prototyping, synthesize syntax, and compress development cycles from months to days.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {BIG_IDEA_DATA.aiLeverage.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: 'var(--radius-base)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Zap size={18} color="var(--color-primary-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pillar 2: ENGINEERING (The Accountability) */}
          {(activeTab === 'both' || activeTab === 'engineering') && (
            <div
              className="card"
              style={{
                borderColor: activeTab === 'engineering' ? 'var(--color-primary-accent)' : 'var(--color-border)',
                background: 'linear-gradient(180deg, var(--color-surface) 0%, rgba(255, 255, 255, 0.02) 100%)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-text)',
                    }}
                  >
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Engineering: The Reality</h3>
                    <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-muted-text)' }}>
                      [DETERMINISTIC RIGOR]
                    </div>
                  </div>
                </div>
                <span className="tech-badge" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--color-primary-text)' }}>
                  100% PRODUCTION
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)', lineHeight: 1.5, marginBottom: '24px' }}>
                AI can output code, but it cannot take ownership of production outages, database corruptions, data leakage, or business failure. Real software requires engineering discipline.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {BIG_IDEA_DATA.engineeringAccountability.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: 'var(--radius-base)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)', marginTop: '2px' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Intersection Callout: WHERE TTRICONIX SITS */}
        <div
          style={{
            padding: '36px',
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--color-surface-elevated)',
            border: '2px solid var(--color-strong-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            alignItems: 'center',
            gap: '32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Layers size={18} color="var(--color-primary-accent)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-primary-accent)', letterSpacing: '0.06em' }}>
                THE TTRICONIX INTERSECTION
              </span>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
              AI provides the leverage. <br />
              Engineering provides the direction.
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
              {BIG_IDEA_DATA.intersectionSummary}
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              borderRadius: 'var(--radius-base)',
              backgroundColor: 'var(--color-primary-bg)',
              border: '1px solid var(--color-border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
            }}
          >
            <div style={{ color: 'var(--color-muted-text)', marginBottom: '8px' }}>
              // TTRICONIX FORMULA
            </div>
            <div style={{ color: 'var(--color-primary-text)', marginBottom: '6px' }}>
              <span style={{ color: 'var(--color-primary-accent)' }}>const</span> ProductOutcome = ({' '}
              <span style={{ color: '#fbbf24' }}>ClientIdea</span> +{' '}
              <span style={{ color: 'var(--color-primary-accent)' }}>AI_Velocity</span>{' '}
              ) * <span style={{ color: 'var(--color-success)' }}>EngineeringAccountability</span>;
            </div>
            <div style={{ color: 'var(--color-secondary-text)', fontSize: '0.76rem', marginTop: '12px' }}>
              Status: <strong>Zero hallucinated architectures. 100% deterministic production delivery.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
