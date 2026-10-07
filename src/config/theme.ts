/**
 * TTRICONIX THEME CONFIGURATION SYSTEM
 * Centralized token system allowing dynamic switching of visual identity
 * without rewriting component styles.
 */

export interface ThemeTokens {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  colors: {
    primaryBg: string;
    secondaryBg: string;
    surface: string;
    surfaceElevated: string;
    primaryText: string;
    secondaryText: string;
    mutedText: string;
    border: string;
    strongBorder: string;
    primaryAccent: string;
    primaryAccentMuted: string;
    secondaryAccent: string;
    accentGlow: string;
    gridLine: string;
    success: string;
    warning: string;
    error: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    monoFont: string;
  };
  geometry: {
    borderRadius: string;
    cardRadius: string;
    buttonRadius: string;
  };
  layout: {
    pageMaxWidth: string;
    sectionSpacing: string;
    spacingScale: string;
  };
  motion: {
    animationSpeed: string;
    animationIntensity: string;
    shadowIntensity: string;
  };
}

export const THEME_PRESETS: Record<string, ThemeTokens> = {
  // Default: Dark Neutral / Monochrome-First Premium Tech Aesthetic with subtle platinum/cyan glow
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Engineering (Default)',
    description: 'Dark neutral, monochrome-first technical precision with subtle platinum accents',
    isDark: true,
    colors: {
      primaryBg: '#090a0f',
      secondaryBg: '#0e1117',
      surface: '#12161f',
      surfaceElevated: '#181d28',
      primaryText: '#f3f4f6',
      secondaryText: '#9ca3af',
      mutedText: '#6b7280',
      border: 'rgba(255, 255, 255, 0.08)',
      strongBorder: 'rgba(255, 255, 255, 0.16)',
      primaryAccent: '#38bdf8', // Subtle engineering cyan
      primaryAccentMuted: 'rgba(56, 189, 248, 0.12)',
      secondaryAccent: '#818cf8', // Indigo
      accentGlow: 'rgba(56, 189, 248, 0.22)',
      gridLine: 'rgba(255, 255, 255, 0.03)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    typography: {
      headingFont: "'Plus Jakarta Sans', -apple-system, sans-serif",
      bodyFont: "'Inter', -apple-system, sans-serif",
      monoFont: "'JetBrains Mono', monospace",
    },
    geometry: {
      borderRadius: '8px',
      cardRadius: '14px',
      buttonRadius: '8px',
    },
    layout: {
      pageMaxWidth: '1280px',
      sectionSpacing: '120px',
      spacingScale: '1',
    },
    motion: {
      animationSpeed: '0.35s',
      animationIntensity: 'normal',
      shadowIntensity: '0.4',
    },
  },

  // Pure Monochrome High-Contrast
  monochrome: {
    id: 'monochrome',
    name: 'Pure Monochrome Studio',
    description: 'Ultra-minimalist black and white high-contrast editorial aesthetic',
    isDark: true,
    colors: {
      primaryBg: '#000000',
      secondaryBg: '#0a0a0a',
      surface: '#111111',
      surfaceElevated: '#1a1a1a',
      primaryText: '#ffffff',
      secondaryText: '#a3a3a3',
      mutedText: '#525252',
      border: 'rgba(255, 255, 255, 0.12)',
      strongBorder: 'rgba(255, 255, 255, 0.28)',
      primaryAccent: '#ffffff',
      primaryAccentMuted: 'rgba(255, 255, 255, 0.14)',
      secondaryAccent: '#d4d4d4',
      accentGlow: 'rgba(255, 255, 255, 0.15)',
      gridLine: 'rgba(255, 255, 255, 0.04)',
      success: '#ffffff',
      warning: '#d4d4d4',
      error: '#ffffff',
    },
    typography: {
      headingFont: "'Plus Jakarta Sans', -apple-system, sans-serif",
      bodyFont: "'Inter', -apple-system, sans-serif",
      monoFont: "'JetBrains Mono', monospace",
    },
    geometry: {
      borderRadius: '4px',
      cardRadius: '8px',
      buttonRadius: '4px',
    },
    layout: {
      pageMaxWidth: '1280px',
      sectionSpacing: '120px',
      spacingScale: '1',
    },
    motion: {
      animationSpeed: '0.3s',
      animationIntensity: 'subtle',
      shadowIntensity: '0.2',
    },
  },

  // Amber Noir / Hardware & Precision Industrial
  amberNoir: {
    id: 'amberNoir',
    name: 'Amber Precision',
    description: 'Deep tungsten charcoal with calibrated warm amber telemetry accents',
    isDark: true,
    colors: {
      primaryBg: '#0c0d0e',
      secondaryBg: '#131416',
      surface: '#181a1d',
      surfaceElevated: '#202227',
      primaryText: '#f4f4f5',
      secondaryText: '#a1a1aa',
      mutedText: '#71717a',
      border: 'rgba(245, 158, 11, 0.12)',
      strongBorder: 'rgba(245, 158, 11, 0.28)',
      primaryAccent: '#f59e0b',
      primaryAccentMuted: 'rgba(245, 158, 11, 0.12)',
      secondaryAccent: '#fbbf24',
      accentGlow: 'rgba(245, 158, 11, 0.25)',
      gridLine: 'rgba(245, 158, 11, 0.03)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    typography: {
      headingFont: "'Plus Jakarta Sans', -apple-system, sans-serif",
      bodyFont: "'Inter', -apple-system, sans-serif",
      monoFont: "'JetBrains Mono', monospace",
    },
    geometry: {
      borderRadius: '6px',
      cardRadius: '12px',
      buttonRadius: '6px',
    },
    layout: {
      pageMaxWidth: '1280px',
      sectionSpacing: '120px',
      spacingScale: '1',
    },
    motion: {
      animationSpeed: '0.35s',
      animationIntensity: 'normal',
      shadowIntensity: '0.4',
    },
  },

  // Light Editorial Mode
  lightEditorial: {
    id: 'lightEditorial',
    name: 'Light Editorial',
    description: 'Clean paper-white minimalist foundation with crisp technical ink typography',
    isDark: false,
    colors: {
      primaryBg: '#fafafa',
      secondaryBg: '#f4f4f5',
      surface: '#ffffff',
      surfaceElevated: '#f8fafc',
      primaryText: '#09090b',
      secondaryText: '#4b5563',
      mutedText: '#6b7280',
      border: 'rgba(0, 0, 0, 0.08)',
      strongBorder: 'rgba(0, 0, 0, 0.18)',
      primaryAccent: '#0284c7',
      primaryAccentMuted: 'rgba(2, 132, 199, 0.08)',
      secondaryAccent: '#4f46e5',
      accentGlow: 'rgba(2, 132, 199, 0.18)',
      gridLine: 'rgba(0, 0, 0, 0.03)',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
    },
    typography: {
      headingFont: "'Plus Jakarta Sans', -apple-system, sans-serif",
      bodyFont: "'Inter', -apple-system, sans-serif",
      monoFont: "'JetBrains Mono', monospace",
    },
    geometry: {
      borderRadius: '8px',
      cardRadius: '14px',
      buttonRadius: '8px',
    },
    layout: {
      pageMaxWidth: '1280px',
      sectionSpacing: '120px',
      spacingScale: '1',
    },
    motion: {
      animationSpeed: '0.35s',
      animationIntensity: 'normal',
      shadowIntensity: '0.15',
    },
  },
};

export const DEFAULT_THEME_ID = 'obsidian';

/**
 * Apply theme tokens to document :root as CSS custom properties
 */
export function applyTheme(tokens: ThemeTokens) {
  const root = document.documentElement;

  // Colors
  root.style.setProperty('--color-primary-bg', tokens.colors.primaryBg);
  root.style.setProperty('--color-secondary-bg', tokens.colors.secondaryBg);
  root.style.setProperty('--color-surface', tokens.colors.surface);
  root.style.setProperty('--color-surface-elevated', tokens.colors.surfaceElevated);
  root.style.setProperty('--color-primary-text', tokens.colors.primaryText);
  root.style.setProperty('--color-secondary-text', tokens.colors.secondaryText);
  root.style.setProperty('--color-muted-text', tokens.colors.mutedText);
  root.style.setProperty('--color-border', tokens.colors.border);
  root.style.setProperty('--color-strong-border', tokens.colors.strongBorder);
  root.style.setProperty('--color-primary-accent', tokens.colors.primaryAccent);
  root.style.setProperty('--color-primary-accent-muted', tokens.colors.primaryAccentMuted);
  root.style.setProperty('--color-secondary-accent', tokens.colors.secondaryAccent);
  root.style.setProperty('--color-accent-glow', tokens.colors.accentGlow);
  root.style.setProperty('--color-grid-line', tokens.colors.gridLine);
  root.style.setProperty('--color-success', tokens.colors.success);
  root.style.setProperty('--color-warning', tokens.colors.warning);
  root.style.setProperty('--color-error', tokens.colors.error);

  // Typography
  root.style.setProperty('--font-heading', tokens.typography.headingFont);
  root.style.setProperty('--font-body', tokens.typography.bodyFont);
  root.style.setProperty('--font-mono', tokens.typography.monoFont);

  // Geometry
  root.style.setProperty('--radius-base', tokens.geometry.borderRadius);
  root.style.setProperty('--radius-card', tokens.geometry.cardRadius);
  root.style.setProperty('--radius-button', tokens.geometry.buttonRadius);

  // Layout
  root.style.setProperty('--layout-max-width', tokens.layout.pageMaxWidth);
  root.style.setProperty('--layout-section-spacing', tokens.layout.sectionSpacing);
  root.style.setProperty('--layout-spacing-scale', tokens.layout.spacingScale);

  // Motion
  root.style.setProperty('--motion-speed', tokens.motion.animationSpeed);
  root.style.setProperty('--motion-intensity', tokens.motion.animationIntensity);
  root.style.setProperty('--shadow-intensity', tokens.motion.shadowIntensity);

  // Body background & text directly to ensure smooth transitions
  document.body.style.backgroundColor = tokens.colors.primaryBg;
  document.body.style.color = tokens.colors.primaryText;
  
  if (tokens.isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}
