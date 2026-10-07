import { useState, type FC } from 'react';
import { AI_WORKFLOW_STEPS } from '../../config/content';
import { Workflow, Sparkles, UserCheck, Cpu } from 'lucide-react';

export const AiWorkflowSection: FC = () => {
  const [activePhaseIdx, setActivePhaseIdx] = useState<number>(0);
  const currentStep = AI_WORKFLOW_STEPS[activePhaseIdx];

  return (
    <section id="workflow" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Workflow size={14} />
            <span>07 // APPLIED AI METHODOLOGY</span>
          </div>
          <h2 className="section-title">
            Use AI where it creates leverage. <br />
            <span style={{ color: 'var(--color-primary-accent)' }}>
              Keep engineering in control.
            </span>
          </h2>
          <p className="section-subtitle">
            We don’t simply tack on an LLM chatbot. AI is natively integrated across every phase of our product development lifecycle—amplifying senior engineering speed while ensuring strict accountability.
          </p>
        </div>

        {/* 5-Step Phase Switcher */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginBottom: '36px',
          }}
        >
          {AI_WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = idx === activePhaseIdx;
            return (
              <button
                key={step.phase}
                onClick={() => setActivePhaseIdx(idx)}
                style={{
                  padding: '16px 14px',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: isSelected ? 'var(--color-surface-elevated)' : 'var(--color-surface)',
                  border: isSelected
                    ? '2px solid var(--color-primary-accent)'
                    : '1px solid var(--color-border)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: isSelected ? 'var(--color-primary-accent)' : 'var(--color-muted-text)',
                      fontWeight: 700,
                    }}
                  >
                    PHASE {step.phase}
                  </span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--color-primary-accent)' : 'transparent',
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary-text)' }}>
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Phase Inspection Box */}
        <div
          className="card-elevated"
          style={{
            padding: '40px',
            border: '2px solid var(--color-strong-border)',
            background: 'var(--color-surface)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Phase Overview & Explanation */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="tech-badge">LIFECYCLE STAGE {currentStep.phase}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-success)' }}>
                  {currentStep.leverageMetric}
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>
                {currentStep.name}: Engineered Synergy
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '28px' }}>
                {currentStep.detail}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* AI Role */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <Sparkles size={20} color="var(--color-primary-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary-accent)', textTransform: 'uppercase' }}>
                      AI Force Multiplier:
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
                      {currentStep.aiRole}
                    </div>
                  </div>
                </div>

                {/* Human Engineer Safeguard */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                  }}
                >
                  <UserCheck size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-success)', textTransform: 'uppercase' }}>
                      Senior Engineering Safeguard:
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
                      {currentStep.humanRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Visual: The Loop */}
            <div
              style={{
                backgroundColor: 'var(--color-primary-bg)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-strong-border)',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-accent-muted)',
                  color: 'var(--color-primary-accent)',
                  marginBottom: '16px',
                }}
              >
                <Cpu size={32} />
              </div>

              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                AI with Accountability
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-secondary-text)', lineHeight: 1.5, marginBottom: '24px' }}>
                Every automated synthesis passes through human architectural review and deterministic validation test harnesses.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-primary-accent)',
                }}
              >
                <span>[INPUT]</span>
                <span>→</span>
                <span>[AI ACCELERATOR]</span>
                <span>→</span>
                <span>[HUMAN REVIEW]</span>
                <span>→</span>
                <span style={{ color: 'var(--color-success)' }}>[PROD]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
