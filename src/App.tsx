import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ThemeDrawer } from './components/layout/ThemeDrawer';
import { IntakeModal } from './components/modal/IntakeModal';
import { Hero } from './components/hero/Hero';
import { BigIdeaSection } from './components/sections/BigIdeaSection';
import { ProcessPipeline } from './components/sections/ProcessPipeline';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { ProductFirstSection } from './components/sections/ProductFirstSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { AiWorkflowSection } from './components/sections/AiWorkflowSection';
import { WhatWeBuildSection } from './components/sections/WhatWeBuildSection';
import { WhoWeBuildForSection } from './components/sections/WhoWeBuildForSection';
import { TrustSection } from './components/sections/TrustSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { DEFAULT_THEME_ID, THEME_PRESETS, applyTheme } from './config/theme';

export function App() {
  const [activeThemeId, setActiveThemeId] = useState<string>(DEFAULT_THEME_ID);
  const [isThemeDrawerOpen, setIsThemeDrawerOpen] = useState<boolean>(false);
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState<boolean>(false);

  // Apply default theme on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('ttriconix_theme');
    const initialId = savedTheme && THEME_PRESETS[savedTheme] ? savedTheme : DEFAULT_THEME_ID;
    setActiveThemeId(initialId);
    applyTheme(THEME_PRESETS[initialId]);
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setActiveThemeId(themeId);
    localStorage.setItem('ttriconix_theme', themeId);
    applyTheme(THEME_PRESETS[themeId]);
  };

  const handleOpenIntake = () => {
    setIsIntakeModalOpen(true);
  };

  const handleCloseIntake = () => {
    setIsIntakeModalOpen(false);
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar
        onOpenIntake={handleOpenIntake}
        onOpenTheme={() => setIsThemeDrawerOpen(true)}
      />

      {/* Main Experience Flow */}
      <main style={{ flex: 1 }}>
        {/* Hero Section with Interactive System Visualization */}
        <Hero onOpenIntake={handleOpenIntake} />

        {/* Section 02: The Big Idea (AI Leverage vs Engineering Accountability) */}
        <BigIdeaSection />

        {/* Section 03: 01 to 09 Idea to Production Pipeline */}
        <ProcessPipeline />

        {/* Section 04: Integrated Core Capabilities */}
        <CapabilitiesSection />

        {/* Section 05: "We Don't Start With Code. We Start With The Product." */}
        <ProductFirstSection />

        {/* Section 06: Engineering Under The Surface (Multi-Layer Architecture) */}
        <ArchitectureSection />

        {/* Section 07: AI Inside The Workflow */}
        <AiWorkflowSection />

        {/* Section 08: What Ttriconix Can Build (Realistic Product Archetypes) */}
        <WhatWeBuildSection />

        {/* Section 09: Who We Build For */}
        <WhoWeBuildForSection onOpenIntake={handleOpenIntake} />

        {/* Section 10: Trust & Verified Engineering Proof */}
        <TrustSection />

        {/* Section 11: Final Conversion CTA */}
        <FinalCtaSection onOpenIntake={handleOpenIntake} />
      </main>

      {/* Technical Footer */}
      <Footer
        onOpenIntake={handleOpenIntake}
        activeThemeId={activeThemeId}
        onSelectTheme={handleSelectTheme}
      />

      {/* Project Intake Modal / Drawer */}
      <IntakeModal
        isOpen={isIntakeModalOpen}
        onClose={handleCloseIntake}
      />

      {/* Live Theme Configuration Drawer */}
      <ThemeDrawer
        isOpen={isThemeDrawerOpen}
        onClose={() => setIsThemeDrawerOpen(false)}
        activeThemeId={activeThemeId}
        onSelectTheme={handleSelectTheme}
      />
    </div>
  );
}

export default App;
