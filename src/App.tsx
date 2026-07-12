import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider'
import { SiteHeader } from './components/layout/SiteHeader'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { BlogSection } from './components/sections/BlogSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <SmoothScrollProvider>
      <div className="noise-overlay" />
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}

export default App
