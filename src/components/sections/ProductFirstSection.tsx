import { useState, type FC } from 'react';
import { PHILOSOPHY_STEPS } from '../../config/content';
import { Compass, ArrowRight, Target } from 'lucide-react';

export const ProductFirstSection: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="philosophy" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Compass size={14} />
            <span>05 // PRODUCT THINKING PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            We don’t start with code. <br />
            <span style={{ color: 'var(--color-primary-accent)' }}>
              We start with the product.
            </span>
          </h2>
          <p className="section-subtitle">
            Most software failures are not caused by bad syntax—they are caused by building the wrong thing. We think in product economics, user psychology, and systems resilience before writing a single line of code.
          </p>
        </div>

        {/* 6-Step Decision Cascade Sequence */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {PHILOSOPHY_STEPS.map((step, idx) => {
            const isSelected = idx === activeStep;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={isSelected ? 'card-elevated' : 'card'}
                style={{
                  border: isSelected ? '2px solid var(--color-primary-accent)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px 28px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: isSelected ? 'var(--color-primary-accent)' : 'var(--color-muted-text)',
                      }}
                    >
                      {step.step}
                    </span>
                    <span className="tech-badge" style={{ fontSize: '0.68rem' }}>
                      {step.focus}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: isSelected ? 'var(--color-primary-text)' : 'var(--color-primary-text)',
                      marginBottom: '14px',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.question}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--color-secondary-text)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {step.detail}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                  }}
                >
                  <span style={{ color: 'var(--color-muted-text)' }}>DELIVERABLE:</span>
                  <span style={{ color: 'var(--color-primary-accent)', fontWeight: 600 }}>{step.output}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Summary Callout */}
        <div
          style={{
            marginTop: '40px',
            padding: '24px 32px',
            borderRadius: 'var(--radius-base)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-strong-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Target size={20} color="var(--color-primary-accent)" />
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
              Outcome-Driven Engineering: We measure success in product performance and user adoption, not billable hours.
            </span>
          </div>

          <a
            href="#pipeline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-primary-accent)',
              fontWeight: 600,
            }}
          >
            See How This Drives The Pipeline <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
