import { useState, useEffect, type FC, type FormEvent } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Terminal } from 'lucide-react';
import { INTAKE_PROJECT_TYPES, INTAKE_STAGES, INTAKE_TIMELINES } from '../../config/content';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntakeModal: FC<IntakeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: INTAKE_PROJECT_TYPES[0],
    stage: INTAKE_STAGES[0],
    timeline: INTAKE_TIMELINES[0],
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setErrorMsg('Please complete your name, email, and project description.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Modular submission handler: logs payload for API integration
    console.log('[TTRICONIX PROJECT INTAKE SUBMISSION]:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      projectType: INTAKE_PROJECT_TYPES[0],
      stage: INTAKE_STAGES[0],
      timeline: INTAKE_TIMELINES[0],
      description: '',
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project Intake Form"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-strong-border)',
          borderRadius: 'var(--radius-card)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-surface-elevated)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Terminal size={18} color="var(--color-primary-accent)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary-accent)', letterSpacing: '0.06em' }}>
                PROJECT INTAKE ARCHITECTURE
              </span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Tell us what you want to build</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '6px',
              color: 'var(--color-secondary-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close intake modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px', overflowY: 'auto', flex: 1 }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: 'var(--color-success)',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
                Specification Received
              </h4>
              <p style={{ color: 'var(--color-secondary-text)', maxWidth: '440px', margin: '0 auto 28px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Thank you, <strong>{formData.name}</strong>. A senior software engineer from Ttriconix will review your product parameters and schedule a direct technical scoping call within 24 hours.
              </p>

              <div
                style={{
                  background: 'var(--color-surface-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-base)',
                  padding: '16px',
                  maxWidth: '480px',
                  margin: '0 auto 32px',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-secondary-text)',
                }}
              >
                <div style={{ color: 'var(--color-primary-text)', fontWeight: 600, marginBottom: '6px' }}>
                  // Intended Direct Route
                </div>
                <div>Entity: {formData.company || 'Confidential'}</div>
                <div>Category: {formData.projectType}</div>
                <div>Stage: {formData.stage}</div>
                <div>Target Contact: {formData.email}</div>
              </div>

              <button className="btn btn-primary" onClick={handleReset}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {errorMsg && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid var(--color-error)',
                    color: 'var(--color-error)',
                    fontSize: '0.85rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              {/* Name & Company */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-base)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-strong-border)',
                      color: 'var(--color-primary-text)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Company / Startup
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HyperScale Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-base)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-strong-border)',
                      color: 'var(--color-primary-text)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-strong-border)',
                    color: 'var(--color-primary-text)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              {/* Project Type & Stage */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-base)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-strong-border)',
                      color: 'var(--color-primary-text)',
                      fontSize: '0.9rem',
                    }}
                  >
                    {INTAKE_PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                    Current Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-base)',
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-strong-border)',
                      color: 'var(--color-primary-text)',
                      fontSize: '0.9rem',
                    }}
                  >
                    {INTAKE_STAGES.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* What are you building */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  What are you building? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your product idea, business problem, user workflows, or engineering challenge..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-strong-border)',
                    color: 'var(--color-primary-text)',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Timeline selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Target Delivery Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-base)',
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-strong-border)',
                    color: 'var(--color-primary-text)',
                    fontSize: '0.9rem',
                  }}
                >
                  {INTAKE_TIMELINES.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Trust Badges */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--color-border)',
                  fontSize: '0.78rem',
                  color: 'var(--color-muted-text)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="var(--color-primary-accent)" />
                  <span>Strict NDA / 100% IP Ownership</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="var(--color-primary-accent)" />
                  <span>24hr Technical Review</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '6px' }}
              >
                {isSubmitting ? 'Evaluating Parameters...' : (
                  <>
                    Submit Project Blueprint <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
