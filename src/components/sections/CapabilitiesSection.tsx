import { useState, type FC } from 'react';
import { CAPABILITIES } from '../../config/content';
import { Layers, Sparkles, Server, Palette, CheckCircle2, Terminal } from 'lucide-react';

const CAPABILITY_ICONS = {
  'product-engineering': <Layers size={22} />,
  'ai-engineering': <Sparkles size={22} />,
  'system-engineering': <Server size={22} />,
  'product-design': <Palette size={22} />,
};

export const CapabilitiesSection: FC = () => {
  const [activeCapId, setActiveCapId] = useState<string>(CAPABILITIES[0].id);
  const activeCap = CAPABILITIES.find((c) => c.id === activeCapId) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Layers size={14} />
            <span>04 // CORE CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Engineered as one coherent system.
          </h2>
          <p className="section-subtitle">
            We don’t fragment work across isolated silos. Product thinking, AI acceleration, systems engineering, and ergonomics are engineered together from day one.
          </p>
        </div>

        {/* 4 Core Pillars Selector Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {CAPABILITIES.map((cap) => {
            const isSelected = cap.id === activeCapId;
            return (
              <div
                key={cap.id}
                onClick={() => setActiveCapId(cap.id)}
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-card)',
                  backgroundColor: isSelected ? 'var(--color-surface-elevated)' : 'var(--color-surface)',
                  border: isSelected
                    ? '2px solid var(--color-primary-accent)'
                    : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: isSelected ? 'var(--color-primary-accent-muted)' : 'var(--color-surface-elevated)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? 'var(--color-primary-accent)' : 'var(--color-secondary-text)',
                    }}
                  >
                    {CAPABILITY_ICONS[cap.id as keyof typeof CAPABILITY_ICONS]}
                  </div>
                  <span className="tech-badge" style={{ fontSize: '0.68rem' }}>
                    {cap.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px', color: 'var(--color-primary-text)' }}>
                  {cap.title}
                </h3>

                <p style={{ fontSize: '0.82rem', color: 'var(--color-secondary-text)', lineHeight: 1.5, margin: 0 }}>
                  {cap.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Architecture Fragment & Deliverables */}
        <div
          className="card"
          style={{
            padding: '44px',
            border: '2px solid var(--color-strong-border)',
            background: 'var(--color-surface-elevated)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: Deep Summary & Bulleted Guarantees */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ color: 'var(--color-primary-accent)' }}>
                  {CAPABILITY_ICONS[activeCap.id as keyof typeof CAPABILITY_ICONS]}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-primary-accent)', fontWeight: 700 }}>
                  // {activeCap.title.toUpperCase()} SPECIFICATION
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>
                {activeCap.tagline}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '28px' }}>
                {activeCap.summary}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {activeCap.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2
                      size={18}
                      color="var(--color-primary-accent)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '0.92rem', color: 'var(--color-primary-text)', lineHeight: 1.5 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Chipset */}
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-muted-text)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Core Tech Stack &amp; Libraries:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeCap.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--color-primary-bg)',
                        border: '1px solid var(--color-border)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        color: 'var(--color-primary-text)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Blueprint & Architectural Artifact */}
            <div
              style={{
                backgroundColor: 'var(--color-primary-bg)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-strong-border)',
                padding: '28px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '14px',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={16} color="var(--color-primary-accent)" />
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-accent)' }}>
                    ARCHITECTURAL_MANIFEST.json
                  </span>
                </div>
                <span className="tech-badge" style={{ fontSize: '0.66rem' }}>
                  INTEGRATED
                </span>
              </div>

              {/* Simulated Architecture Definition */}
              <div style={{ fontSize: '0.82rem', color: 'var(--color-secondary-text)', lineHeight: 1.7 }}>
                <div style={{ color: 'var(--color-muted-text)' }}>// Engineered Capability Unit</div>
                <div>&#123;</div>
                <div style={{ paddingLeft: '16px' }}>
                  &quot;capability&quot;: &quot;<span style={{ color: 'var(--color-primary-accent)' }}>{activeCap.id}</span>&quot;,
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  &quot;executionModel&quot;: &quot;AI-Accelerated Senior Squad&quot;,
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  &quot;productionReadiness&quot;: &#123;
                </div>
                <div style={{ paddingLeft: '32px' }}>
                  &quot;typeSafety&quot;: &quot;Strict 100%&quot;,
                </div>
                <div style={{ paddingLeft: '32px' }}>
                  &quot;ciCdAutomation&quot;: true,
                </div>
                <div style={{ paddingLeft: '32px' }}>
                  &quot;ipTransfer&quot;: &quot;Complete &amp; Unencumbered&quot;
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  &#125;,
                </div>
                <div style={{ paddingLeft: '16px' }}>
                  &quot;slaStandard&quot;: &quot;Tier-1 Production&quot;
                </div>
                <div>&#125;</div>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  padding: '16px',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.78rem',
                }}
              >
                <div style={{ color: 'var(--color-primary-text)', fontWeight: 600, marginBottom: '4px' }}>
                  Why this matters:
                </div>
                <div style={{ color: 'var(--color-secondary-text)', lineHeight: 1.5 }}>
                  You don’t have to hire 4 separate agencies for UX, AI, backend, and DevOps. Ttriconix engineers all 4 disciplines as one unified product machine.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
