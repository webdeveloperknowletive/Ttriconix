import { useState, type FC } from 'react';
import { PIPELINE_STAGES } from '../../config/content';
import { GitBranch, CheckCircle, Terminal } from 'lucide-react';

export const ProcessPipeline: FC = () => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);
  const activeStage = PIPELINE_STAGES[selectedStageIdx];

  return (
    <section id="pipeline" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <GitBranch size={14} />
            <span>03 // IDEA TO PRODUCTION PIPELINE</span>
          </div>
          <h2 className="section-title">
            From an idea in your head <br />
            to a product in the market.
          </h2>
          <p className="section-subtitle">
            We don’t hand over wireframes and leave you stranded. We guide your product from conceptual inception through system architecture, AI enablement, and live production scaling.
          </p>
        </div>

        {/* Pipeline Stepper Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '32px',
            scrollbarWidth: 'none',
          }}
        >
          {PIPELINE_STAGES.map((stage, idx) => {
            const isSelected = idx === selectedStageIdx;
            const isCompleted = idx < selectedStageIdx;

            return (
              <button
                key={stage.number}
                onClick={() => setSelectedStageIdx(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: isSelected
                    ? 'var(--color-primary-accent)'
                    : isCompleted
                    ? 'var(--color-surface-elevated)'
                    : 'var(--color-surface)',
                  color: isSelected
                    ? 'var(--color-primary-bg)'
                    : isCompleted
                    ? 'var(--color-primary-text)'
                    : 'var(--color-muted-text)',
                  border: isSelected
                    ? '1px solid var(--color-primary-accent)'
                    : '1px solid var(--color-border)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <span>{stage.number}</span>
                <span>{stage.name}</span>
                {isCompleted && <CheckCircle size={14} color="var(--color-success)" />}
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div
          className="card-elevated"
          style={{
            padding: '40px',
            border: '2px solid var(--color-strong-border)',
            background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%)',
            marginBottom: '48px',
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
            {/* Stage Left: Description & Deliverables */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-accent)',
                  }}
                >
                  STAGE {activeStage.number} // {activeStage.name}
                </span>
                <span className="tech-badge">{activeStage.tagline}</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
                {activeStage.tagline}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '28px' }}>
                {activeStage.description}
              </p>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--color-primary-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '12px',
                  }}
                >
                  Verified Deliverables at Stage {activeStage.number}:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeStage.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.9rem',
                        color: 'var(--color-primary-text)',
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary-accent)',
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Right: Technical Telemetry & Progression Console */}
            <div
              style={{
                backgroundColor: 'var(--color-primary-bg)',
                borderRadius: 'var(--radius-base)',
                border: '1px solid var(--color-strong-border)',
                padding: '24px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-accent)' }}>
                  <Terminal size={16} />
                  <span style={{ fontSize: '0.78rem' }}>PIPELINE_STATUS_RUNNER</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-success)' }}>
                  ● PHASE ACTIVE
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)', lineHeight: 1.7, marginBottom: '20px' }}>
                <div>&gt; Pipeline.init(&quot;{activeStage.name}&quot;)</div>
                <div>&gt; Focus: <span style={{ color: 'var(--color-primary-text)' }}>{activeStage.techFocus}</span></div>
                <div>&gt; Architecture Guarantee: Strict Verification</div>
                <div>&gt; Next Phase: {PIPELINE_STAGES[(selectedStageIdx + 1) % PIPELINE_STAGES.length].name}</div>
              </div>

              {/* Progress bar across 9 stages */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--color-muted-text)', marginBottom: '6px' }}>
                  <span>Progression to Production</span>
                  <span>{Math.round(((selectedStageIdx + 1) / PIPELINE_STAGES.length) * 100)}%</span>
                </div>
                <div
                  style={{
                    height: '6px',
                    borderRadius: '999px',
                    backgroundColor: 'var(--color-surface)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${((selectedStageIdx + 1) / PIPELINE_STAGES.length) * 100}%`,
                      backgroundColor: 'var(--color-primary-accent)',
                      transition: 'width 0.3s ease-out',
                    }}
                  />
                </div>
              </div>

              {/* Next Stage Navigation Button */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setSelectedStageIdx((prev) => (prev > 0 ? prev - 1 : PIPELINE_STAGES.length - 1))}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-secondary-text)',
                    fontSize: '0.75rem',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  ← Prev Stage
                </button>
                <button
                  onClick={() => setSelectedStageIdx((prev) => (prev + 1) % PIPELINE_STAGES.length)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--color-surface-elevated)',
                    color: 'var(--color-primary-text)',
                    fontSize: '0.75rem',
                    border: '1px solid var(--color-primary-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginLeft: 'auto',
                  }}
                >
                  Advance to Stage {PIPELINE_STAGES[(selectedStageIdx + 1) % PIPELINE_STAGES.length].number} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 9-Stage Compact Grid Summary */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '14px',
          }}
        >
          {PIPELINE_STAGES.map((stg, idx) => {
            const isCurrent = idx === selectedStageIdx;
            return (
              <div
                key={stg.number}
                onClick={() => setSelectedStageIdx(idx)}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: isCurrent ? 'var(--color-surface-elevated)' : 'var(--color-surface)',
                  border: isCurrent ? '1.5px solid var(--color-primary-accent)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: isCurrent ? 'var(--color-primary-accent)' : 'var(--color-muted-text)' }}>
                    {stg.number}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
                    {stg.name}
                  </span>
                </div>
                <p style={{ fontSize: '0.74rem', color: 'var(--color-secondary-text)', lineHeight: 1.4, margin: 0 }}>
                  {stg.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
