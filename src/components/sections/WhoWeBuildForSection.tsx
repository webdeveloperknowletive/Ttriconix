import type { FC } from 'react';
import { AUDIENCE_DATA } from '../../config/content';
import { Users, Rocket, Briefcase, Building2, Code, RefreshCw, ArrowRight } from 'lucide-react';

const AUDIENCE_ICONS = [
  <Rocket key="startup" size={24} />,
  <Briefcase key="entrepreneur" size={24} />,
  <Building2 key="business" size={24} />,
  <Code key="team" size={24} />,
  <RefreshCw key="product" size={24} />,
];

interface WhoWeBuildForProps {
  onOpenIntake: () => void;
}

export const WhoWeBuildForSection: FC<WhoWeBuildForProps> = ({ onOpenIntake }) => {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Users size={14} />
            <span>09 // AUDIENCE &amp; PARTNERSHIP PROFILES</span>
          </div>
          <h2 className="section-title">
            Who we engineer for.
          </h2>
          <p className="section-subtitle">
            Whether you have a breakthrough thesis on a napkin or an established codebase that needs AI leverage and modern architecture, we are your high-velocity engineering partner.
          </p>
        </div>

        {/* Audience Profiles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {AUDIENCE_DATA.map((item, idx) => (
            <div
              key={item.role}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
              }}
            >
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-accent)',
                    marginBottom: '20px',
                  }}
                >
                  {AUDIENCE_ICONS[idx % AUDIENCE_ICONS.length]}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                  {item.role}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--color-primary-accent)',
                    marginBottom: '14px',
                  }}
                >
                  {item.pitch}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {item.detail}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-muted-text)',
                }}
              >
                <div style={{ color: 'var(--color-primary-text)', fontWeight: 600, marginBottom: '2px' }}>
                  Expected Delivery:
                </div>
                <div>{item.deliverable}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Audience Intake Prompt */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
          }}
        >
          <button
            className="btn btn-secondary"
            onClick={onOpenIntake}
            style={{ padding: '14px 28px' }}
          >
            Find The Engineering Model For Your Team <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
