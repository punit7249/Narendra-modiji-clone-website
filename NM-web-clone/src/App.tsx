import { HomeFeatureGrid } from './components/home/FeatureGrid';
import { HomeGovernanceSection } from './components/home/GovernanceSection';
import { HomeHeroCarousel } from './components/home/HeroCarousel';
import { HomeNewsMediaSection } from './components/home/NewsMediaSection';
import { HomeRecognitionSection } from './components/home/RecognitionSection';
import { SiteFooter } from './components/layout/Footer';
import { SiteHeader } from './components/layout/Header';
import { NaMoAssistant } from './components/ui/NaMoAI';

function MainApp() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <HomeHeroCarousel />
        <HomeNewsMediaSection />
        <HomeFeatureGrid />
        <HomeGovernanceSection />
        <HomeRecognitionSection />
      </main>
      <SiteFooter />
      <NaMoAssistant />
    </div>
  );
}

export default MainApp;
