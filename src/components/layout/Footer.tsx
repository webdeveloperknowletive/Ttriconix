import type { FC } from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { THEME_PRESETS, applyTheme } from '../../config/theme';
import { Cpu, Terminal, ArrowUpRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenIntake: () => void;
  activeThemeId: string;
  onSelectTheme: (id: string) => void;
}

export const Footer: FC<FooterProps> = ({ onOpenIntake, activeThemeId, onSelectTheme }) => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-secondary-bg)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-strong-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary-accent)',
                }}
              >
                <Cpu size={18} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {BRAND_CONFIG.name}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '20px' }}>
              {BRAND_CONFIG.tagline}
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-muted-text)', lineHeight: 1.5, marginBottom: '24px' }}>
              {BRAND_CONFIG.supportingConcept}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--color-success)' }}>
              <ShieldCheck size={16} />
              <span>Full IP Ownership & Direct Engineering</span>
            </div>
          </div>

          {/* Col 2: Engineering Capabilities */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--color-primary-accent)',
                letterSpacing: '0.06em',
                marginBottom: '20px',
              }}
            >
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#capabilities" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Product Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  AI Engineering & Agents
                </a>
              </li>
              <li>
                <a href="#capabilities" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Distributed System Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Technical Product Design
                </a>
              </li>
              <li>
                <a href="#pipeline" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  01 to 09 Product Pipeline
                </a>
              </li>
              <li>
                <a href="#architecture" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Architecture Deep-Dive
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Systems & What We Build */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--color-primary-accent)',
                letterSpacing: '0.06em',
                marginBottom: '20px',
              }}
            >
              What We Build
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#products" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Multi-Tenant SaaS
                </a>
              </li>
              <li>
                <a href="#products" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Autonomous Copilots
                </a>
              </li>
              <li>
                <a href="#products" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Operational Automation
                </a>
              </li>
              <li>
                <a href="#products" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Real-Time Dashboards
                </a>
              </li>
              <li>
                <a href="#products" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Client Portals
                </a>
              </li>
              <li>
                <a href="#products" style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
                  Legacy Re-Platforming
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Location */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--color-primary-accent)',
                letterSpacing: '0.06em',
                marginBottom: '20px',
              }}
            >
              Verified Engineering Hub
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem', color: 'var(--color-secondary-text)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="var(--color-primary-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  DS IKON, Laxman Nagar, Baner, Pune, Maharashtra 411045, India
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="var(--color-primary-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} style={{ color: 'var(--color-primary-text)' }}>
                  {BRAND_CONFIG.contact.email}
                </a>
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  className="btn btn-secondary"
                  onClick={onOpenIntake}
                  style={{ width: '100%', fontSize: '0.85rem', padding: '10px 14px' }}
                >
                  Initiate Technical Scoping <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Palette Bar (Theme Configurability Proof) */}
        <div
          style={{
            padding: '16px 20px',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Terminal size={16} color="var(--color-primary-accent)" />
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary-text)' }}>
              Centralized Theme Presets:
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Object.values(THEME_PRESETS).map((preset) => {
              const isSelected = preset.id === activeThemeId;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    onSelectTheme(preset.id);
                    applyTheme(preset);
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: isSelected ? 'var(--color-primary-accent-muted)' : 'var(--color-surface-elevated)',
                    color: isSelected ? 'var(--color-primary-accent)' : 'var(--color-secondary-text)',
                    border: isSelected ? '1px solid var(--color-primary-accent)' : '1px solid var(--color-border)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {preset.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'var(--color-muted-text)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.legalName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', fontFamily: 'var(--font-mono)' }}>
            <span>Zero Bloat</span>
            <span>·</span>
            <span>Real Software</span>
            <span>·</span>
            <span>AI-Accelerated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
