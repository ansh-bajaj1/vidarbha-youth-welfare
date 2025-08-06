import { ArrowRight, Users, GraduationCap, Award } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { number: '60+', label: 'Years of Excellence', icon: Award },
    { number: '10K+', label: 'Students Impacted', icon: Users },
    { number: '38', label: 'Total Institutes', icon: GraduationCap },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Established 1965</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Vidarbha Youth
                <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Welfare Society
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Empowering generations through world-class education across primary, secondary, higher, technical, and professional learning.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 hover:scale-105">
                <span>Explore Institutes</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Our Legacy
              </button>
            </div>
          </div>
          
          {/* Right Content - Logo and Stats */}
          <div className="space-y-8">
            <div className="text-center">
              <img
                src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
                alt="Vidarbha Youth Welfare Society Logo"
                className="h-48 w-auto mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;