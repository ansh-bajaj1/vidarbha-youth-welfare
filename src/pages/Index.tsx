import TealNavigation from '@/components/TealNavigation';
import TealHeroSection from '@/components/TealHeroSection';
import TealAboutSection from '@/components/TealAboutSection';
import ManagementSection from '@/components/ManagementSection';
import TealInstitutesSection from '@/components/TealInstitutesSection';
import TealFooter from '@/components/TealFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TealNavigation />
      <main>
        <TealHeroSection />
        <TealAboutSection />
        <ManagementSection />
        <TealInstitutesSection />
      </main>
      <TealFooter />
    </div>
  );
};

export default Index;
