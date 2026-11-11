import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DomainPillars from './components/DomainPillars';
import UiCraftLab from './components/UiCraftLab';
import ProjectsSection from './components/ProjectsSection';
import ExperienceAndAchievements from './components/ExperienceAndAchievements';
import SkillsAndContact from './components/SkillsAndContact';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      try {
        localStorage.setItem('rk-theme', 'dark');
      } catch {
        // Ignore storage errors
      }
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('rk-theme', 'light');
      } catch {
        // Ignore storage errors
      }
    }
  }, [darkMode]);

  useEffect(() => {
    const handleGlobalKey = (e) => {
      const target = e.target;
      const isInput =
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
        return;
      }
      if (!isInput && e.key === '/' && !paletteOpen && !selectedProject) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [paletteOpen, selectedProject]);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((d) => !d)}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <main>
        <Hero />
        <DomainPillars />
        <UiCraftLab />
        <ProjectsSection selectedProject={selectedProject} onSelectProject={setSelectedProject} />
        <ExperienceAndAchievements />
        <SkillsAndContact />
      </main>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((d) => !d)}
        onOpenProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
