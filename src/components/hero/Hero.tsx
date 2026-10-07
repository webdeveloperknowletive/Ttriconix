import type React from 'react';
import { HeroVisual } from './HeroVisual';
import { BRAND_CONFIG } from '../../config/brand';
import { ArrowRight, Sparkles, Shield, Cpu, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenIntake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntake }) => {
  return (
    <section
      className="section bg-tech-grid"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '56px',
            marginBottom: '72px',
          }}
        >
          {/* Left Column: Core Positioning & Headline */}
          <div style={{ maxWidth: '620px' }}>
            {/* Engineering Badge */}
            <div
              className="tech-badge"
              style={{
                marginBottom: '24px',
                padding: '6px 14px',
                fontSize: '0.8rem',
              }}
            >
              <Cpu size={14} />
              <span>AI-NATIVE SOFTWARE ENGINEERING STUDIO</span>
            </div>

            {/* Primary Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                marginBottom: '24px',
                color: 'var(--color-primary-text)',
              }}
            >
              Bring the idea. <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary-text) 30%, var(--color-secondary-text) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                We engineer the product.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                lineHeight: 1.6,
                color: 'var(--color-secondary-text)',
                marginBottom: '36px',
                maxWidth: '540px',
              }}
            >
              {BRAND_CONFIG.subtext}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              <button
                className="btn btn-primary"
                onClick={onOpenIntake}
                style={{ padding: '15px 30px', fontSize: '1.02rem' }}
              >
                {BRAND_CONFIG.ctas.primaryHero} <ArrowRight size={18} />
              </button>

              <a
                href="#pipeline"
                className="btn btn-secondary"
                style={{ padding: '15px 26px', fontSize: '1.02rem' }}
              >
                {BRAND_CONFIG.ctas.secondaryHero}
              </a>
            </div>

            {/* Micro-guarantees */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-muted-text)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={14} color="var(--color-primary-accent)" />
                <span>100% Client Code Ownership</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Terminal size={14} color="var(--color-primary-accent)" />
                <span>Direct Senior Engineering</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} color="var(--color-primary-accent)" />
                <span>AI-Powered Speed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Living Product System */}
          <div style={{ position: 'relative', width: '100%' }}>
            <HeroVisual />
          </div>
        </div>

        {/* Real Engineering Telemetry Strip */}
        <div
          style={{
            padding: '20px 28px',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-primary-accent)', marginBottom: '4px' }}>
              // EXECUTION SPEED
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
              Weeks, Not Quarters
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>
              AI accelerated boilerplate to prototype
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-primary-accent)', marginBottom: '4px' }}>
              // SOFTWARE RIGOR
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
              100% Production Code
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>
              Strict TypeScript, CI/CD & test pyramids
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-primary-accent)', marginBottom: '4px' }}>
              // ARCHITECTURAL DEPTH
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
              Zero Fragile Wrappers
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>
              Engineered backends, schemas & RBAC
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-primary-accent)', marginBottom: '4px' }}>
              // IP ASSIGNMENT
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
              Unencumbered Ownership
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)' }}>
              You own 100% of repos & cloud infra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
