import { useState, useEffect, type FC } from 'react';
import { NAV_LINKS } from '../../config/content';
import { BRAND_CONFIG } from '../../config/brand';
import { Menu, X, ArrowRight, Palette, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenIntake: () => void;
  onOpenTheme: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenIntake, onOpenTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled ? 'rgba(9, 10, 15, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Logo / Brand */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
          aria-label="Ttriconix Homepage"
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-base)',
              backgroundColor: 'var(--color-surface-elevated)',
              border: '1px solid var(--color-strong-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-accent)',
            }}
          >
            <Cpu size={20} strokeWidth={2.2} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-primary-text)',
            }}
          >
            {BRAND_CONFIG.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              listStyle: 'none',
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: 'var(--color-secondary-text)',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary-text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-secondary-text)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme customizer button */}
          <button
            onClick={onOpenTheme}
            style={{
              padding: '9px 12px',
              borderRadius: 'var(--radius-button)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-secondary-text)',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            title="Configure Theme & Palette"
            aria-label="Theme Customizer"
          >
            <Palette size={15} color="var(--color-primary-accent)" />
            <span className="hidden-mobile">Theme</span>
          </button>

          {/* Primary CTA */}
          <button
            className="btn btn-primary"
            onClick={onOpenIntake}
            style={{
              padding: '10px 18px',
              fontSize: '0.88rem',
            }}
          >
            {BRAND_CONFIG.ctas.primaryNav}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-primary-text)',
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-primary-bg)',
            borderBottom: '1px solid var(--color-strong-border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
          className="mobile-menu-container"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-primary-text)',
                padding: '8px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntake();
              }}
              style={{ width: '100%' }}
            >
              Build My Product <ArrowRight size={16} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTheme();
              }}
              style={{ width: '100%' }}
            >
              <Palette size={16} /> Switch Visual Theme
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
