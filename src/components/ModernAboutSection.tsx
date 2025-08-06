import { Users, Target, Award, BookOpen } from 'lucide-react';

const ModernAboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Vision',
      description: 'To be a world-class premier organization for comprehensive education across all levels.'
    },
    {
      icon: BookOpen,
      title: 'Mission',
      description: 'Empowering minds through quality education from primary to professional levels.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Serving the Vidarbha region with dedication and educational excellence.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Six decades of unwavering commitment to educational leadership.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>About Our Legacy</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-modern-primary leading-tight">
                Six Decades of 
                <span className="block text-primary">Educational Excellence</span>
              </h2>
              
              <p className="text-lg text-modern-secondary leading-relaxed">
                Founded in 1965 by visionary leaders, Vidarbha Youth Welfare Society has been at the forefront of educational transformation in the Vidarbha region, nurturing generations of bright minds.
              </p>
            </div>

            <div className="prose prose-lg text-modern-secondary">
              <p>
                Our society was established by distinguished personalities including Late Prof Ram K. Meghe, Late Surendra B. Deshmukh, and other pioneering educators who shared a common vision of creating world-class educational institutions.
              </p>
              
              <p>
                From humble beginnings to becoming a comprehensive educational ecosystem, we continue to uphold our founding principles of accessibility, quality, and innovation in education.
              </p>
            </div>

            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Learn More About Our History
            </button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-modern-card-bg p-6 rounded-xl hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-modern-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-modern-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAboutSection;