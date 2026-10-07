import { useState, useRef, type MouseEvent, type ReactNode, type FC } from 'react';
import { HERO_NODES } from '../../config/content';
import { 
  Sparkles, Layers, ShieldCheck, Database, Server, 
  Cpu, Code2, Cloud, CheckSquare, Webhook, Activity 
} from 'lucide-react';

const ICON_MAP: Record<string, ReactNode> = {
  product: <Layers size={16} />,
  ai: <Sparkles size={16} />,
  frontend: <Code2 size={16} />,
  backend: <Server size={16} />,
  data: <Database size={16} />,
  security: <ShieldCheck size={16} />,
  cloud: <Cloud size={16} />,
  qa: <CheckSquare size={16} />,
  integrations: <Webhook size={16} />,
};

export const HeroVisual: FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive pointer movement
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setMouseOffset({
      x: Math.max(-15, Math.min(15, deltaX * 12)),
      y: Math.max(-15, Math.min(15, deltaY * 12)),
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Node position calculation helper
  const centerX = 300;
  const centerY = 300;

  const activeNode = HERO_NODES.find((n) => n.id === activeNodeId) || HERO_NODES[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '620px',
        margin: '0 auto',
        aspectRatio: '1 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      aria-label="Interactive Product Engineering System Visualization"
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.6,
          transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* SVG Connecting Lines & Data Pulses */}
      <svg
        viewBox="0 0 600 600"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary-accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-strong-border)" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric subtle radar guide rings */}
        <circle cx={centerX} cy={centerY} r="130" fill="none" stroke="var(--color-border)" strokeDasharray="3 6" opacity="0.6" />
        <circle cx={centerX} cy={centerY} r="210" fill="none" stroke="var(--color-border)" strokeWidth="1" opacity="0.4" />

        {/* Node Connection Lines */}
        {HERO_NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = centerX + Math.cos(rad) * node.distance;
          const ny = centerY + Math.sin(rad) * node.distance;
          const isActive = node.id === activeNodeId;

          return (
            <g key={node.id}>
              <line
                x1={centerX}
                y1={centerY}
                x2={nx}
                y2={ny}
                stroke={isActive ? 'var(--color-primary-accent)' : 'var(--color-border)'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? 'none' : '4 4'}
                opacity={isActive ? 1 : 0.45}
                filter={isActive ? 'url(#glow)' : undefined}
                style={{ transition: 'all 0.3s ease' }}
              />

              {/* Animated data pulses along connection lines */}
              {isActive && (
                <circle r="3" fill="var(--color-primary-accent)">
                  <animateMotion
                    path={`M ${centerX} ${centerY} L ${nx} ${ny}`}
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Orbiting Engineering Nodes (Interactive HTML Elements) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)`,
          transition: 'transform 0.25s ease-out',
        }}
      >
        {HERO_NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          // Percentage-based coordinates for responsive rendering
          const leftPercent = 50 + (Math.cos(rad) * (node.distance / 300) * 44);
          const topPercent = 50 + (Math.sin(rad) * (node.distance / 300) * 44);
          const isActive = node.id === activeNodeId;

          return (
            <div
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              onMouseEnter={() => setActiveNodeId(node.id)}
              style={{
                position: 'absolute',
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                zIndex: isActive ? 20 : 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 12px',
                  borderRadius: '999px',
                  backgroundColor: isActive ? 'var(--color-surface-elevated)' : 'var(--color-surface)',
                  border: isActive
                    ? '1.5px solid var(--color-primary-accent)'
                    : '1px solid var(--color-border)',
                  boxShadow: isActive
                    ? '0 0 20px var(--color-accent-glow)'
                    : '0 4px 12px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                <div
                  style={{
                    color: isActive ? 'var(--color-primary-accent)' : 'var(--color-secondary-text)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {ICON_MAP[node.id] || <Activity size={14} />}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--color-primary-text)' : 'var(--color-secondary-text)',
                      lineHeight: 1.1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {node.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-mono)',
                      color: isActive ? 'var(--color-primary-accent)' : 'var(--color-muted-text)',
                      lineHeight: 1.1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {node.subtitle}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Dominant Node: YOUR PRODUCT */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-surface-elevated)',
            border: '2px solid var(--color-primary-accent)',
            boxShadow: '0 0 35px var(--color-accent-glow), inset 0 0 20px var(--color-primary-accent-muted)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '16px',
            position: 'relative',
          }}
        >
          {/* Pulsing ring indicator */}
          <div
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              border: '1px solid var(--color-primary-accent)',
              opacity: 0.35,
              animation: 'pulseRing 3s ease-out infinite',
            }}
          />

          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'var(--color-primary-accent-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-accent)',
              marginBottom: '6px',
            }}
          >
            <Cpu size={18} />
          </div>

          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: 'var(--color-primary-text)',
              lineHeight: 1.1,
              textTransform: 'uppercase',
            }}
          >
            YOUR PRODUCT
          </span>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--color-primary-accent)',
              marginTop: '4px',
              letterSpacing: '0.04em',
            }}
          >
            PRODUCTION ENGINE
          </span>

          <div
            style={{
              marginTop: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.6rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-success)',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success)',
                display: 'inline-block',
              }}
            />
            LIVE
          </div>
        </div>
      </div>

      {/* Floating Active Node Telemetry Card */}
      <div
        style={{
          position: 'absolute',
          bottom: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '380px',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-strong-border)',
          borderRadius: 'var(--radius-base)',
          padding: '12px 16px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
          zIndex: 40,
          backdropFilter: 'blur(12px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--color-primary-accent)' }}>
              {ICON_MAP[activeNode.id]}
            </span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-text)' }}>
              {activeNode.label} Layer
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-primary-accent)' }}>
            [ENGINEERED]
          </span>
        </div>
        <p style={{ fontSize: '0.74rem', color: 'var(--color-secondary-text)', lineHeight: 1.4, margin: 0 }}>
          {activeNode.role}
        </p>
      </div>

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.96); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 0.15; }
          100% { transform: scale(0.96); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};
