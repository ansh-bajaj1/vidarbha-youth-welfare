import { ArrowRight, Users, BookOpen, Globe } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                About Our Institution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Welcome to Vidarbha Youth Welfare Society
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Established in 1965, VYWS has been a cornerstone of quality education in the Vidarbha region. Our commitment to excellence has shaped thousands of students into successful professionals and responsible global citizens.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full p-2 mt-1">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Student-Centric Approach</h4>
                  <p className="text-sm text-text-secondary">Personalized learning experiences tailored to individual student needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-white rounded-full p-2 mt-1">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Quality Education</h4>
                  <p className="text-sm text-text-secondary">Comprehensive curriculum designed to meet industry standards</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full p-2 mt-1">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Global Perspective</h4>
                  <p className="text-sm text-text-secondary">Preparing students for a connected and competitive world</p>
                </div>
              </div>
            </div>

            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center space-x-2">
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Image and Info */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg bg-white p-4">
                  <img
                    src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                    alt="VYWS Campus"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="bg-primary text-white rounded-full px-6 py-3 inline-block">
                  <span className="font-bold">58+ Years of Excellence</span>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-card">
                  <h3 className="text-lg font-bold text-primary mb-3">Our Mission</h3>
                  <p className="text-sm text-text-secondary">
                    To provide holistic education that nurtures intellectual growth, character development, and social responsibility in our students.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-card">
                  <h3 className="text-lg font-bold text-primary mb-3">Our Vision</h3>
                  <p className="text-sm text-text-secondary">
                    To be a leading educational institution that creates innovative leaders and global citizens who contribute to society's progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;