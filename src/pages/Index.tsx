import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import InstitutesSection from '@/components/InstitutesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main>
        <AboutSection />
        <InstitutesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
