import TealNavigation from '@/components/TealNavigation';
import TealHeroSection from '@/components/TealHeroSection';
import TealAboutSection from '@/components/TealAboutSection';
import TealInstitutesSection from '@/components/TealInstitutesSection';
import TealFooter from '@/components/TealFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TealNavigation />
      <main>
        <TealHeroSection />
        <TealAboutSection />
        <TealInstitutesSection />
      </main>
      <TealFooter />
    </div>
  );
};

export default Index;
