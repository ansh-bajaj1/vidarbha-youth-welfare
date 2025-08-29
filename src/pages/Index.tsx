import TealNavigation from '@/components/TealNavigation';
import TealHeroSection from '@/components/TealHeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import AcademicProgramsSection from '@/components/AcademicProgramsSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import ManagementSection from '@/components/ManagementSection';
import TealInstitutesSection from '@/components/TealInstitutesSection';
import TealFooter from '@/components/TealFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TealNavigation />
      <main>
        <TealHeroSection />
        <WelcomeSection />
        <AcademicProgramsSection />
        <AdmissionsSection />
        <ManagementSection />
        <TealInstitutesSection />
      </main>
      <TealFooter />
    </div>
  );
};

export default Index;
