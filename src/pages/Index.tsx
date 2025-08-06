import ModernNavigation from '@/components/ModernNavigation';
import HeroSection from '@/components/HeroSection';
import ModernAboutSection from '@/components/ModernAboutSection';
import ModernInstitutesSection from '@/components/ModernInstitutesSection';
import ModernFooter from '@/components/ModernFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ModernNavigation />
      <main>
        <HeroSection />
        <ModernAboutSection />
        <ModernInstitutesSection />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;
