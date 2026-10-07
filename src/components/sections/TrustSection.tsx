import type { FC } from 'react';
import { TRUST_FOUNDATIONS, SAMPLE_BLUEPRINT } from '../../config/content';
import { ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';

export const TrustSection: FC = () => {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <ShieldCheck size={14} />
            <span>10 // TRUST &amp; ENGINEERING INTEGRITY</span>
          </div>
          <h2 className="section-title">
            Built on proof, not promises.
          </h2>
          <p className="section-subtitle">
            We don’t hide behind vague buzzwords, fake testimonials, or bloated account hierarchies. We work with complete technical transparency, rigorous code standards, and 100% intellectual property handover.
          </p>
        </div>

        {/* 4 Core Engineering Commitments Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {TRUST_FOUNDATIONS.map((item, idx) => (
            <div key={idx} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <CheckCircle2 size={18} color="var(--color-primary-accent)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-primary-accent)' }}>
                  GUARANTEE 0{idx + 1}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
                {item.title}
              </h3>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-text)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                {item.subtitle}
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--color-secondary-text)', lineHeight: 1.55 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Engineering Blueprint Breakdown (Problem -> What We Built -> Engineering -> Result) */}
        <div
          className="card-elevated"
          style={{
            padding: '40px',
            border: '2px solid var(--color-strong-border)',
            background: 'var(--color-surface)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Terminal size={18} color="var(--color-primary-accent)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-primary-accent)' }}>
                  ENGINEERING BLUEPRINT IN PRACTICE
                </span>
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
                {SAMPLE_BLUEPRINT.title}
              </h3>
            </div>
            <span className="tech-badge">VERIFIED ARCHITECTURE</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Step 1: Problem */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-base)',
                backgroundColor: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#f59e0b', marginBottom: '8px' }}>
                01 // THE BUSINESS PROBLEM
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)', lineHeight: 1.5 }}>
                {SAMPLE_BLUEPRINT.problem}
              </p>
            </div>

            {/* Step 2: What We Built */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-base)',
                backgroundColor: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary-accent)', marginBottom: '8px' }}>
                02 // WHAT WE ENGINEERED
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)', lineHeight: 1.5 }}>
                {SAMPLE_BLUEPRINT.solutionArchitecture}
              </p>
            </div>

            {/* Step 3: Technology */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-base)',
                backgroundColor: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-secondary-text)', marginBottom: '8px' }}>
                03 // ENGINEERING STACK
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {SAMPLE_BLUEPRINT.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--color-primary-bg)',
                      border: '1px solid var(--color-border)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--color-primary-text)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Step 4: The Result */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-base)',
                backgroundColor: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-success)', marginBottom: '8px' }}>
                04 // PRODUCTION OUTCOME
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-primary-text)', lineHeight: 1.5, fontWeight: 500 }}>
                {SAMPLE_BLUEPRINT.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
