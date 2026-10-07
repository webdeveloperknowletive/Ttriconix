import { useState, type FC } from 'react';
import { PRODUCT_CATEGORIES } from '../../config/content';
import { Box, Check } from 'lucide-react';

export const WhatWeBuildSection: FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>(PRODUCT_CATEGORIES[0].id);
  const activeProduct = PRODUCT_CATEGORIES.find((p) => p.id === selectedCatId) || PRODUCT_CATEGORIES[0];

  return (
    <section id="products" className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Box size={14} />
            <span>08 // PRODUCT ARCHETYPES</span>
          </div>
          <h2 className="section-title">
            What we engineer.
          </h2>
          <p className="section-subtitle">
            We don’t build disposable brochures or demo prototypes. We engineer resilient, multi-tenant, mission-critical digital products that run businesses and generate revenue.
          </p>
        </div>

        {/* Product Archetype Category Pills */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '32px',
            scrollbarWidth: 'none',
          }}
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: isSelected ? 'var(--color-primary-text)' : 'var(--color-surface)',
                  color: isSelected ? 'var(--color-primary-bg)' : 'var(--color-secondary-text)',
                  border: isSelected ? '1px solid var(--color-primary-text)' : '1px solid var(--color-border)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-heading)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Realistic Technical Product Showcase Mockup Card */}
        <div
          className="card-elevated"
          style={{
            padding: '36px',
            border: '2px solid var(--color-strong-border)',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Archetype Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="tech-badge">{activeProduct.category}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-primary-accent)' }}>
                  [PRODUCTION ARCHETYPE]
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px' }}>
                {activeProduct.title}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '28px' }}>
                {activeProduct.description}
              </p>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--color-primary-accent)',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    letterSpacing: '0.05em',
                  }}
                >
                  Architectural Specifications:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {activeProduct.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-base)',
                        backgroundColor: 'var(--color-surface-elevated)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.82rem',
                        color: 'var(--color-primary-text)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Check size={14} color="var(--color-primary-accent)" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Realistic UI Mockup Representation */}
            <div
              style={{
                backgroundColor: 'var(--color-primary-bg)',
                borderRadius: 'var(--radius-base)',
                border: '1px solid var(--color-strong-border)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Window Title Bar */}
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-text)' }}>
                  app.ttriconix.production // {activeProduct.id}
                </div>
                <div style={{ width: '30px' }} />
              </div>

              {/* Realistic Inner UI Mockup */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
                      {activeProduct.archetypeUI}
                    </div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-success)' }}>
                      ● System Online · 99.99% Uptime SLA
                    </div>
                  </div>
                  <span className="tech-badge" style={{ fontSize: '0.68rem' }}>
                    v2.4.0
                  </span>
                </div>

                {/* Simulated Data Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ padding: '12px', borderRadius: '6px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-muted-text)' }}>Throughput</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>14,280 req/s</div>
                  </div>
                  <div style={{ padding: '12px', borderRadius: '6px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-muted-text)' }}>Latency p99</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-accent)' }}>18.4ms</div>
                  </div>
                  <div style={{ padding: '12px', borderRadius: '6px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-muted-text)' }}>Tenant Health</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-success)' }}>100% Valid</div>
                  </div>
                </div>

                {/* Simulated Event Stream / Code Block */}
                <div
                  style={{
                    padding: '14px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-secondary-text)',
                    lineHeight: 1.6,
                  }}
                >
                  <div style={{ color: 'var(--color-primary-accent)' }}>
                    [EVENT LOG // 13:22:14 UTC]
                  </div>
                  <div>&gt; Pipeline.dispatch({ activeProduct.id }) =&gt; Status: 200 OK</div>
                  <div>&gt; Auth token verified (Zero-Trust Ed25519)</div>
                  <div>&gt; Distributed transaction committed to PostgreSQL + Redis cache hot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
