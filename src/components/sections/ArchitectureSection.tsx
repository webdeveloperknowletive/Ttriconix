import { useState, type FC } from 'react';
import { ARCHITECTURE_LAYERS } from '../../config/content';
import { Network, Terminal } from 'lucide-react';

export const ArchitectureSection: FC = () => {
  const [activeLayerLevel, setActiveLayerLevel] = useState<string>('01');
  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.level === activeLayerLevel) || ARCHITECTURE_LAYERS[0];

  return (
    <section id="architecture" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Network size={14} />
            <span>06 // ENGINEERING UNDER THE SURFACE</span>
          </div>
          <h2 className="section-title">
            The architecture beneath your product.
          </h2>
          <p className="section-subtitle">
            A beautiful interface is only the top layer. Beneath the surface, we engineer robust API contracts, resilient data pipelines, AI orchestration, and zero-trust infrastructure designed to never buckle.
          </p>
        </div>

        {/* Multi-Layer Stack Interactive Explorer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left: The Visual Layered Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = layer.level === activeLayerLevel;

              return (
                <div
                  key={layer.level}
                  onMouseEnter={() => setActiveLayerLevel(layer.level)}
                  onClick={() => setActiveLayerLevel(layer.level)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: isSelected
                      ? 'var(--color-surface-elevated)'
                      : 'var(--color-surface)',
                    border: isSelected
                      ? '1.5px solid var(--color-primary-accent)'
                      : '1px solid var(--color-border)',
                    boxShadow: isSelected
                      ? '0 0 20px var(--color-accent-glow)'
                      : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isSelected ? 'translateX(8px)' : 'translateX(0)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: isSelected ? 'var(--color-primary-accent)' : 'var(--color-muted-text)',
                        fontWeight: 700,
                      }}
                    >
                      L{layer.level}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: isSelected ? 'var(--color-primary-text)' : 'var(--color-secondary-text)',
                      }}
                    >
                      {layer.name}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: isSelected ? 'var(--color-primary-accent)' : 'var(--color-muted-text)',
                      }}
                    >
                      {layer.tag}
                    </span>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? 'var(--color-primary-accent)' : 'var(--color-border)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Layer Technical Telemetry Detail */}
          <div
            className="card-elevated"
            style={{
              padding: '36px',
              border: '2px solid var(--color-strong-border)',
              background: 'linear-gradient(145deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="tech-badge">LAYER {activeLayer.level} // {activeLayer.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-success)' }}>
                ● PRODUCTION GRADE
              </span>
            </div>

            <h3 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '8px' }}>
              {activeLayer.name}
            </h3>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--color-primary-accent)',
                marginBottom: '20px',
              }}
            >
              {activeLayer.tech}
            </div>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '28px' }}>
              {activeLayer.description}
            </p>

            {/* Simulated Live Architectural Telemetry */}
            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-base)',
                backgroundColor: 'var(--color-primary-bg)',
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary-accent)', marginBottom: '8px' }}>
                <Terminal size={14} />
                <span>RUNTIME_METRICS_PROFILE</span>
              </div>
              <div style={{ color: 'var(--color-primary-text)', lineHeight: 1.6 }}>
                {activeLayer.telemetry}
              </div>
            </div>

            <div style={{ marginTop: '24px', fontSize: '0.82rem', color: 'var(--color-muted-text)', lineHeight: 1.5 }}>
              💡 Hover over or click any layer on the left to inspect its role and runtime guarantees.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
