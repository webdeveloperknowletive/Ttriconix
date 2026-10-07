import type { FC } from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { ArrowRight, MessageSquare, Terminal, Shield } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenIntake: () => void;
}

export const FinalCtaSection: FC<FinalCtaSectionProps> = ({ onOpenIntake }) => {
  return (
    <section className="section bg-tech-grid" style={{ borderTop: '1px solid var(--color-border)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '64px 32px',
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--color-surface)',
            border: '2px solid var(--color-strong-border)',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '400px',
              height: '240px',
              background: 'radial-gradient(ellipse at top, var(--color-accent-glow) 0%, transparent 70%)',
              pointerEvents: 'none',
              opacity: 0.8,
            }}
          />

          {/* Badge */}
          <div
            className="tech-badge"
            style={{
              marginBottom: '24px',
              padding: '6px 16px',
              fontSize: '0.82rem',
            }}
          >
            <Terminal size={14} />
            <span>IDEA → ENGINEERING → PRODUCTION</span>
          </div>

          {/* Main Conversion Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
              color: 'var(--color-primary-text)',
            }}
          >
            Your next product starts here.
          </h2>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              color: 'var(--color-secondary-text)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto 36px',
            }}
          >
            Have an idea, existing product, or business problem that needs software? Tell us what you&apos;re building. We take ownership of the architecture, design, and engineering to make it real.
          </p>

          {/* Dual CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <button
              className="btn btn-primary"
              onClick={onOpenIntake}
              style={{ padding: '16px 36px', fontSize: '1.05rem' }}
            >
              {BRAND_CONFIG.ctas.finalPrimary} <ArrowRight size={18} />
            </button>

            <a
              href={`mailto:${BRAND_CONFIG.contact.engineeringEmail}?subject=Direct%20Engineer%20Inquiry%20-%20Ttriconix`}
              className="btn btn-secondary"
              style={{ padding: '16px 30px', fontSize: '1.05rem' }}
            >
              <MessageSquare size={18} /> {BRAND_CONFIG.ctas.finalSecondary}
            </a>
          </div>

          {/* Direct Guarantee Statement */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-muted-text)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} color="var(--color-primary-accent)" />
              <span>Strict Mutual NDA</span>
            </div>
            <span>·</span>
            <div>
              <span>24hr Architecture Review</span>
            </div>
            <span>·</span>
            <div>
              <span>Direct Senior Engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
