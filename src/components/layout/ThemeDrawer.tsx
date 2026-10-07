import { useEffect, type FC } from 'react';
import { THEME_PRESETS, applyTheme, type ThemeTokens } from '../../config/theme';
import { Palette, X, Check, Sun, Moon, Sparkles } from 'lucide-react';

interface ThemeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeThemeId: string;
  onSelectTheme: (themeId: string) => void;
}

export const ThemeDrawer: FC<ThemeDrawerProps> = ({
  isOpen,
  onClose,
  activeThemeId,
  onSelectTheme,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTheme = THEME_PRESETS[activeThemeId] || THEME_PRESETS.obsidian;

  const handleSelect = (id: string) => {
    onSelectTheme(id);
    applyTheme(THEME_PRESETS[id]);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Theme Customizer"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          height: '100%',
          backgroundColor: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-strong-border)',
          padding: '32px 24px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Palette size={20} color="var(--color-primary-accent)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Theme Configuration</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '6px',
              color: 'var(--color-secondary-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close theme customizer"
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary-text)', marginBottom: '24px', lineHeight: 1.5 }}>
          The entire design system is centralized through CSS variables and token presets. Choose a preset to preview how Ttriconix adapts without modifying component markup.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
          {Object.values(THEME_PRESETS).map((preset: ThemeTokens) => {
            const isSelected = preset.id === activeThemeId;
            return (
              <div
                key={preset.id}
                onClick={() => handleSelect(preset.id)}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-base)',
                  border: isSelected
                    ? '2px solid var(--color-primary-accent)'
                    : '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface-elevated)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {preset.isDark ? <Moon size={16} color="var(--color-muted-text)" /> : <Sun size={16} color="#f59e0b" />}
                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{preset.name}</span>
                  </div>
                  {isSelected && <Check size={18} color="var(--color-primary-accent)" />}
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)', marginBottom: '12px' }}>
                  {preset.description}
                </p>

                {/* Color swatches preview */}
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      backgroundColor: preset.colors.primaryBg,
                      border: '1px solid rgba(128,128,128,0.3)',
                    }}
                    title="Primary Background"
                  />
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      backgroundColor: preset.colors.surface,
                      border: '1px solid rgba(128,128,128,0.3)',
                    }}
                    title="Surface"
                  />
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      backgroundColor: preset.colors.primaryText,
                      border: '1px solid rgba(128,128,128,0.3)',
                    }}
                    title="Primary Text"
                  />
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      backgroundColor: preset.colors.primaryAccent,
                    }}
                    title="Accent"
                  />
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-muted-text)',
                    }}
                  >
                    {preset.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Token Inspection */}
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <Sparkles size={14} color="var(--color-primary-accent)" />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Active Configuration
            </span>
          </div>
          <div
            style={{
              padding: '12px',
              backgroundColor: 'var(--color-primary-bg)',
              borderRadius: 'var(--radius-base)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-muted-text)',
              lineHeight: 1.6,
            }}
          >
            <div>--color-primary-bg: {currentTheme.colors.primaryBg}</div>
            <div>--color-primary-accent: {currentTheme.colors.primaryAccent}</div>
            <div>--font-heading: {currentTheme.typography.headingFont.split(',')[0]}</div>
            <div>--radius-card: {currentTheme.geometry.cardRadius}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
